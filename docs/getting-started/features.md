---
sidebar_position: 5
title: Tech Stack & Features
---

### Ohana utilizes a tech stack which incorporates the following:
- **Node.js** and **Express** for minimalistic server architecture
- **React** as our front-end framework, used to generate reusable components and offer efficient Routing and State Management.
- **PostgresQL** as our database as a result of the relational aspect of Teams, Cluster, and Namespace access.
- **Supertest**, **Jest**, and **Enzyme** were leveraged to test the App, ensuring a consistent and reliable user interface.
- **Material UI** for customizability of our stylistic components.
- and much more. Join our community and come chat with us!


### User Authentication & Password Encryption
- Users are securely created utilizing **bCrypt** to hash passwords in addition to multiple rounds of salting to encrypt the User's password. From there, authentication occurs through a **JSON Web Token** (JWT), which then checks various datapoints to verify the type of User, such as whether they are an Admin, and whether they should have access to the platform.

### Role Based Access Control
- Our User Authentication (UA) infrastructure allows us to effectively create Roles within the organization and partition out Access Control. This ultimately means DevOps (Admins) and Developers (Users) are not reliant on each other, which efficiently abstracts the Wall of Confusion and generates a self-service model that is capable of decreasing deployment times by 85%.

### Namespace and Virtual Cluster creation
- As a result of RBAC and vClusters, the need for multiple Clusters or downtime waiting for DevOps to create a Namespace, the partitioned instances allow Users to essentially create their own development environments independently of any Teams, as long as they have been added as a new User, resulting in decreased ticket turnover and increased productivity.

- Additionally, Namespaces and vClusters grant the same permissions as if the Cluster were their own, eliminating further delays by trusting authenticated Developers on the platform. 

- Since Cluster resources are shared with vClusters and Namespaces, the cost savings could be significant when considering scale. Admins can further apply safeguards and limit the maximum amount of vClusters and Namespaces rationed out to users.

### Image Deployment
- Ohana abstracts the deployment of **Docker** runtime Images into a container, offering a two step process of deployment and clickout to the exposed server running the container that houses the specified Image, making it turnkey without the need for access to the cloud dashboards or the need to expose a pod once deployed.

### Database Normalization
- Incorporating an efficient and reliable database schema relies on normalization and minimizing duplication of entries, but preserving consistency and isolation of data in relevant Tables. Our schema is ACID compliant and is 4NF, allowing for the efficient passback and navigation with dynamic queries to track important data transactions within the Ohana platform.

### Containerized & Scalable Solution
- Ohana can be and is containerized, meaning the platform works out of the box once your specific configurations and connections have been made to connect to your Kubernetes engine. Additionally, this offers a solution that works regardless of what operating system your Developer is on and can be replicated and distributed with a simple link.
- **Best of all - we are Open Source and Free**, which also allows you build, modularize, or scale as your organization deems necessary.


## Roadmap


Deletion of Clusters limited to User scope on the roadmap
Connection to GKE (and more)
