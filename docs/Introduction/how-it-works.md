---
sidebar_position: 2
title: How It Works
---

# Setup
- **Download and check out the codebase from:** ```https://github.com/oslabs-beta/ohana```
  - A containerized version exists here on docker hub: ```insert docker hub repository here```
- **Admins handle the creation and maintenance of a (existing) Cluster**
- **Admins can then create Users to onboard a new emploee or team member with specific access controls**
- **A Dockerfile will be included but is up to the Admin to configure correctly**

## Create a User
- Create a user based off their email, allowing them full access to create virtual clusters and namespaces within that environment

**placeholder for picture/gif of the user creation workflow**


## Create a Cluster / vCluster
- A User without admin priveleges will be routed through to the vCluster page, allowing them to create a Cluster, which grants full administrator priveleges within that cluster

**placeholder for picture/gif of the vcluster creation workflow**

## Create a Namespace
- The namespace allows a developer to function freely with a specified image and make changes at will without affecting the image currently in production
- Namespace creation is limited to the Clusters the User has access to, defined by the Team(s) they have been assigned to
- Deployment is also easy: designate a deployment name and the image the User wants to build - a two step process to deploy and click out to the instance; this supports hot module reloading if using webpack and allows you to view changes in real time

**placeholder for gif of the namespace creation workflow**

# Connectivity

- At this juncture, Ohana only supports Google's Kubernetes Engine (GKE), with support for Amazon's Kuernetes Service (EKS), Microsoft Azure's Kuberenetes Service (AKS), and IBM's Cloud Kubernetes Service (IKS) slated for development

## Databases

- While a PostgresQL database is provided, a solution that currently exists for you can be incorporated and utilized instead of the packaged solution according to your needs. We provide a single file that includes all necessary variables, which can be filled out to populate relevant fields

**include a picture of the schema? probably not**
**Note: Due to the relational aspect of Admins, Users, and Teams, MongoDB is not recommended**

# Monitoring

**will likely need modification based on user roles**

- Monitoring of resources and current Clusters, vClusters, and Namespaces will be provided by querying the database, along with health checks. While no usage statistics will be provided, this is a feature that is on the development roadmap

**include a picture of the database/table of active clusters/vclusters/namespaces**
