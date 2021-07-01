---
sidebar_position: 4
title: Crash Course
---
import { TextField, Button, CircularProgress, FormControl, FormControlLabel, InputLabel, Select, MenuItem, Checkbox } from '@material-ui/core';

## Administrator Overview

### Creating an Administrator
Utilize the default admin credentials located in the Database schema and create your own Administrator account once logged in. **Delete the default admin credentials to ensure bad actors cannot access your platform**.

### Creating a Team and Users
<!-- Thinking of adding these into a glossary; Please refer to the glossary for more details -->
- Create a Team and Users to set up the structure of the Developer organization
<div background-color="white">
<TextField label='User Email' name='email'></TextField><br></br> 
Should default to organizational email, which acts as a unique identifier, allowing them full access to the features available to create virual clusters and namespaces within their defined environments<br></br>
<TextField type='password' label='User Password' name='password'></TextField><br></br>
Admin generated and can be reset by the User<br></br>
<TextField label='First Name' name='firstName'></TextField><br></br>
<TextField label='Last Name' name='lastName'></TextField><br></br>
<TextField label='Team Name' name='teamName'></TextField><br></br>
Create different Teams based on their function; this field will determine which Clusters and Namespaces a User will have access to; Team Names are associated with a specific Team ID<br></br>
<FormControlLabel control=<Checkbox/>label='Add as Admin'/><br></br>
</div>
Checking the box will allow the User full access to the app, which will unlock priveleges and accessibility panes within the app. The general rule of thumb is that DevOps will be Admins and Developers will be Users

<!-- > **User Email** : Should default to organizational email, which acts as a unique identifier, allowing them full access to the features available to create virual clusters and namespaces within their defined environments

> **User Password** : Admin generated and can be reset by the User

> **Team Name** : Create different Teams based on their function; this field will determine which Clusters and Namespaces a User will have access to; Team Names are associated with a specific Team ID

> **Add as Admin** : Checking this box will allow the User full access to the app, which will unlock priveleges and accessibility panes within the app. The general rule of thumb is that DevOps will be Admins and Developers will be Users -->

**placeholder for picture/gif of the user creation workflow in the Admin page**
***
## User Overview

### Creating a vCluster
- A User without admin priveleges will be routed through to the vCluster page, allowing them to create a Cluster, which grants full administrator priveleges within that cluster
- Create a vCluster by selecting a ```Host Cluster```,```Namespace``` then naming your ```vCluster``` and clicking on <Button type="submit" variant="contained" color="secondary">Create</Button>

> **Select Cluster** : Dropdown menu of Clusters that are available to a User

> **Select Namespace** : Dropdown menu of Namespaces currently available to create a vCluster on. Available Namespaces are tied to specific Teams and the Cluster they exist on

> **vCluster** : Designated freeform vCluster name

> **Active vClusters** : Displays a list of all active vClusters, allowing to monitor resource usage. Typically, the Admin should limit the amount of active vClusters a User can create

**placeholder for picture/gif of the vcluster creation workflow**

### Creating a Namespace
- The Namespace allows a developer to function freely within a partitioned space with a specified image and make changes at will without affecting anything in production
- Select a ```Cluster``` and specify a ```Namespace``` name and click <Button type="submit" variant="contained" color="secondary">Create</Button>

> Select Cluster: Dropdown menu of Clusters that are available to a User

> Host Namespace: Namespace creation is limited to the Clusters the User has access to, defined and segmented by the Team(s) they have been assigned to

### Deploying an Image
- Deploy an Image simply by designating a ```Deployment Name```, ```Namespace```, and the specified ```Image``` link and clicking on <Button type="submit" variant="contained" color="secondary">Deploy</Button>
- Once Deployed, fill in ```Deployment Name``` and ```Namespace``` then click on  <Button type="submit" variant="contained" color="secondary">Get External IP</Button> and a link to your exposed container will appear
- **Please note that deployment times will vary** 

> Deployment Name: Designate a deployment name and the image file the User wants to build - a two step process to deploy and click out to the instance; this supports hot module reloading if using webpack and allows you to view changes in real time

> Select Namespace: Dropdown menu of Namespaces currently available to create a vCluster on. Available Namespaces are tied to specific Teams and the Cluster they exist on

> Image File: Any registry like ECR, Dockerhub, ACR with a valid image link are compatible

> Get Spaces Button (is this going to still be there or is it going to be hot reloaded as Active Spaces | should make the query only for the user's team id)

**placeholder for gif of the namespace creation workflow**
***
## Connectivity
- **At this juncture, Ohana only supports Google's Kubernetes Engine (GKE)**
- Support for the following are slated for deployment in the near future:
  - Amazon's Kuernetes Service (EKS)
  - Microsoft Azure's Kuberenetes Service (AKS)
  - IBM's Cloud Kubernetes Service (IKS)

## Databases
- While a PostgresQL database is provided out of the box, The Admin can incorporate and utilize an existing solution instead of what is packaged according to your needs. We provide a single file that includes all necessary variables, which can be filled out to connect
- **Note: Due to the relational aspect of Admins, Users, and Teams, MongoDB is not recommended**

## Monitoring
**will likely need modification based on user roles**
- Monitoring of resources and current and active Clusters, vClusters, and Namespaces will be provided by querying the database. Connectivity to your Kubernetes service is also monitored. While no usage statistics will be provided, this is a feature that is on the development roadmap
**include a picture of the database/table of active clusters/vclusters/namespaces**