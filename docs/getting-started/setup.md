---
sidebar_position: 3
title: Setup
id: setup
---

# Setup
- **Download and check out the codebase at:** ```https://github.com/oslabs-beta/ohana```
  - A containerized version exists here on docker hub: ```insert docker hub repository here```
- **Admins handle the creation and maintenance of a (existing) Cluster**
- **Admins can then create Users to onboard a new emploee or team member with specific access controls**
- **A Dockerfile will be included but is up to the Admin to configure correctly**

After forking and cloning the repository, open a terminal on the cloned directory on your local filesystem.
Run the following command to install the necessary dependencies:
```
npm install
```
When the dependencies are finished installing, run the following to concurrently bundle the application's assets and start the Express server in a ```development``` environment:
```
npm run dev
```
After the application finishes compiling, you should be served the Ohana user interface on ```localhost:8080```, with the server listening on ```localhost:3000```. You should
see a login screen rendered to your browser.


## Create a User
- Create a user based off their email, allowing them full access to create virtual clusters and namespaces within that environment
**placeholder for picture/gif of the user creation workflow**
## Create a Cluster / vCluster
- A User without admin priveleges will be routed through to the vCluster page, allowing them to create a Cluster, which grants full administrator priveleges within that cluster
**placeholder for picture/gif of the vcluster creation workflow**



## Create a Namespace
- The namespace allows a developer to function freely with a specified image and make changes at will without affecting the image currently in production
- Namespace creation is limited to the Clusters the User has access to, defined and segmented by the Team(s) they have been assigned to
- Deployment is also easy: designate a deployment name and the image file the User wants to build - a two step process to deploy and click out to the instance; this supports hot module reloading if using webpack and allows you to view changes in real time
  - Any registry like ECR, Dockerhub, ACR with a valid image link are compatible
**placeholder for gif of the namespace creation workflow**



# Connectivity
- At this juncture, Ohana only supports Google's Kubernetes Engine (GKE)
- Support for the following are slated for deployment in the near future:
  - Amazon's Kuernetes Service (EKS)
  - Microsoft Azure's Kuberenetes Service (AKS)
  - IBM's Cloud Kubernetes Service (IKS)



## Databases
- While a PostgresQL database is provided out of the box, a solution that currently exists for you can be incorporated and utilized instead of the packaged solution according to your needs. We provide a single file that includes all necessary variables, which can be filled out to populate relevant fields
**include a picture of the schema? probably not**
**Note: Due to the relational aspect of Admins, Users, and Teams, MongoDB is not recommended**



# Monitoring
**will likely need modification based on user roles**
- Monitoring of resources and current Clusters, vClusters, and Namespaces will be provided by querying the database Cluster uptime checks. While no usage statistics will be provided, this is a feature that is on the development roadmap
**include a picture of the database/table of active clusters/vclusters/namespaces**