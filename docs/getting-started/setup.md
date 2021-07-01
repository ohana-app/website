---
sidebar_position: 3
title: Setup
id: setup
---

## Getting Started
- Fork the codebase at: ```https://github.com/oslabs-beta/ohana```
  - A containerized version exists here on docker hub: ```insert docker hub repository here```
- DevOps Admins handle the creation and maintenance of a new or existing Cluster
- Admins can then create Users to onboard a new emploee or team member with specific access controls
- A Dockerfile will be included but is up to the Admin to configure correctly.
***
Ohana recommends Containerization. If running locally without containerization, please skip to the section ```No Containerization``` after Creating a Service Account

### Create a Service Account

To create the Admin service account that will execute on behalf of users, execute the following commands or you can reference [gcloud Service Account Creation](https://cloud.google.com/iam/docs/creating-managing-service-accounts)
```
gcloud iam service-accounts create [Service Account ID] \
  --description="[OPTIONAL: Description of Role]" \
  --display-name="[Display Name of Service Account]"
# Note: The Service Account ID cannot be changed; accepts 6-30 characters and can contain lowercase alphanumeric characters and dashes 
```
- After Service Account creation, set the role permissions to Admin or your choosing
```
gcloud projects add-iam-policy-binding [Project ID] \
  --member="serviceAccount:[Service Account ID]@[Project ID].iam.gserviceaccount.com" \
  --role="[roles/iam.serviceAccountAdmin]"
```
- To list all Service Accounts, use:
 ```gcloud iam service-accounts list```
- Create the keys json, execute the following commands or reference [JSON Key Creation](https://cloud.google.com/sdk/gcloud/reference/iam/service-accounts/keys/create)
```
gcloud iam service-accounts keys create [outputFile.json] --iam-account=[Iam-Account-Name]@[Project-Name].iam.gserviceaccount.com
# Optional flags: [--key-file-type=KEY_FILE_TYPE; default="json"] [GCLOUD_WIDE_FLAG …]
# Additional Google Wide Flags can be referenced in the link above
```
- Generated outputFile.json should look something like this:
```
{
    "type": "service_account",
    "project_id": "Ohana-1234",
    "private_key_id": "f31f9767f26023kj623j96195b8c7d",
    "private_key": "private key"
    "client_email": "newadmin@Ohana.iam.gserviceaccount.com",
    "client_id": "1159271332468734598",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/..."
}
```
***
## Containerization
We recommend running Ohana as a containerized application. Once you have configured the source files to fit your organization's needs, follow these steps to build and deploy the app as a container.

- Connect your Database through the URI variable in ```models.js``` then refer to the ```Dockerfile``` and fill in the environment variables
```
# Set arguments within the Dockerfile
## Add gcloud service account here
ARG gcloud_account= <newadmin@project_id.iam.gserviceaccount.com>

## Add gcloud account key file path here
ARG key_path= <outputFile.json>

## Add GKE project_id here
ARG project_id= <Ohana-1234>

## Add GKE Cluster zone or region here
ARG cluster_zone= <us-west1-a>
```
- Fill out the Cluster Name
```
RUN gcloud container clusters get-credentials [Cluster Name] --zone=${cluster}
```
The rest of the Dockerfile will install other dependencies in a multi-stage build:
- Installs Node
- Installs Debian
- Installs the gcloud SDK
- Establishes and configures the working environment
- Connects to GKE
- Installs helm
- Installs vCluster

- From here, build your Docker image and upload it to the registry of your choice
***
## No Containerization

After forking and cloning the repository [here](https://github.com/oslabs-beta/ohana), open a terminal within the cloned directory on your local filesystem.
Run the following command to install the necessary dependencies: ```npm install ```

When the dependencies are finished installing, run the following to concurrently bundle the application's assets and start the Express server in a ```development``` environment:

Ensure helm has been installed. You can do so with these commands:
```helm version``` to check your version. Please reference [helm](https://helm.sh/docs/intro/install/) for further instructions based on your OS

Ensure vCluster has been installed:
```vcluster -v``` to check your version. Please reference the following to download for your respective OS or visit [vCluster](https://www.vcluster.com/):

**Intel Mac**
```
curl -s -L "https://github.com/loft-sh/vcluster/releases/latest" | sed -nE 's!.*"([^"]*vcluster-darwin-amd64)".*!https://github.com\1!p' | xargs -n 1 curl -L -o vcluster && chmod +x vcluster;

sudo mv vcluster /usr/local/bin;
```
**Silicon Mac**
```
curl -s -L "https://github.com/loft-sh/vcluster/releases/latest" | sed -nE 's!.*"([^"]*vcluster-darwin-arm64)".*!https://github.com\1!p' | xargs -n 1 curl -L -o vcluster && chmod +x vcluster;
sudo mv vcluster /usr/local/bin;
```
**Windows**
```
md -Force "$Env:APPDATA\vcluster"; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]'Tls,Tls11,Tls12';

Invoke-WebRequest -UseBasicParsing ((Invoke-WebRequest -URI "https://github.com/loft-sh/vcluster/releases/latest" -UseBasicParsing).Content -replace "(?ms).*`"([^`"]*vcluster-windows-amd64.exe)`".*","https://github.com/`$1") -o $Env:APPDATA\vcluster\vcluster.exe;

$env:Path += ";" + $Env:APPDATA + "\vcluster";

[Environment]::SetEnvironmentVariable("Path", $env:Path, [System.EnvironmentVariableTarget]::User);
```
**Linux AMD**
```
curl -s -L "https://github.com/loft-sh/vcluster/releases/latest" | sed -nE 's!.*"([^"]*vcluster-linux-amd64)".*!https://github.com\1!p' | xargs -n 1 curl -L -o vcluster && chmod +x vcluster;

sudo mv vcluster /usr/local/bin;
```
**Linux ARM**
```
curl -s -L "https://github.com/loft-sh/vcluster/releases/latest" | sed -nE 's!.*"([^"]*vcluster-linux-arm64)".*!https://github.com\1!p' | xargs -n 1 curl -L -o vcluster && chmod +x vcluster;

sudo mv vcluster /usr/local/bin;
```
To run the application, execute ```npm run dev```

After the application finishes compiling, you should be served the Ohana user interface on ```localhost:8080```, with the server listening on ```localhost:3000```. You should
see a login screen rendered to your browser.
***

Please proceed to our next section for a crash course through the UI/UX

