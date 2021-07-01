---
slug: introduction-to-kubernetes
title: Overview of Kubernetes
author: Lawrence Han
author_title: Ohana | Software Engineer
author_url: https://github.com/lawrencehan650
author_image_url: https://github.com/lawrencehan650.png
tags: [cloud, containerization, docker, kubernetes]
---

The Digital Age we are living through is an epoch characterized by the rapid shift from industry to information serving as the driving force behind the world's economies. With millions upon millions of gigabytes of data being exchanged by billions of users everyday, this age of information has become reliant on cloud computing to provide the infrastructure needed to handle requests and to store an exponentially increasing amount of data.
<!--truncate-->

With the modern shift towards creating cloud-native applications, one technology in particular that has become prevalent is the concept of containerization.

In traditional software development, engineers work on their codebase in a specific computing environment with unique combinations of libraries, dependencies, and operating systems installed. While an application might work on one developer's machine, this doesn't guarantee that it would work on another individual's machine, which might have a slightly different configuration.

### Containers

Container structureOn the other hand, containerization is the process of packaging an application with the OS, libraries, configuration files, and dependencies it needs into a lightweight bundle of software. With all of these installed, the containers can operate in an environment isolated from the user's machine. This ensures that the application is being used in the same environment in which it was developed, making it possible to run across any platform free of issues.

If there's one thing to take away from the benefits of using containers, it's the following word: portability.

The portability of containers greatly speeds up the development process. It allows developers to write code for an app once and have it run anywhere. As a result, many companies are beginning to develop their new applications on containers while others are retrofitting their current applications to run on containers for use on the cloud.

But in order to actually build and deploy containers, developers need a container runtime. Currently, Docker is viewed as the industry standard because of its ability to manage container lifecycles, set resource limits on containers, and proxy requests to and from containers.

Using configurations provided in a text document called a Dockerfile, Docker allows developers to easily build images - which are essentially templates for creating containers - from a project directory. These images can be pushed onto a container image registry, such as Docker Hub, where people can then pull the image to run a container.
Docker workflow diagramOnce an application is deployed in a container, it can theoretically be used by anyone, anywhere. But what happens if your container goes down for some reason; would you have to spin up another one on demand? If you suddenly find your application flooding with new users, would you need to deploy new containers and direct users to a new endpoint?


### Kubernetes

This is where Kubernetes comes in. Kubernetes is an open-source container orchestration system, originally developed by Google. It automates the process of deploying, scaling, and managing containerized applications and services.

So how does Kubernetes help when containers fail or when traffic spikes?

Among many other features, Kubernetes is self-healing: when a container goes down, Kubernetes will replace that container. It will also kill off any containers that don't pass user-defined health checks.

Kubernetes also has automated rollouts, rollbacks, and load balancing. This way, network traffic can be distributed across many containers, and new containers are launched and terminated as needed.

To provide a relatively narrow scope of the architectural concepts behind Kubernetes, the components that a developer will most likely need to work with are clusters, nodes, namespaces, and vclusters.

The first step for deploying using Kubernetes is to create a cluster on your cloud computing platform. Upon creation of the cluster, you will be given the option to choose how many nodes you want operating within the cluster and how much computing power you want each node to have.

Kubernetes componentsAfter the cluster is created, namespaces are ways to divide the resources of the cluster. Namespaces can be helpful when there are multiple teams or projects that need to share the cluster and its resources. There are four namespaces created by default (default, kube-node-lease, kube-public, kube-system), but teams can also create their own as needed.
Furthermore, teams can utilize an open-source tool called vcluster which can be leveraged to create virtual Kubernetes clusters operating within the namespaces, within your original cluster. These vclusters can serve as additional development environments and can also save organizations from the cost of deploying a clusters on their respective cloud platforms while underutilizing that cluster's resources.

Namespaces in conjunction with vclusters can be a solution to solving the problem of multi-tenancy on a cluster. Combined, they could give organizations the ability to implement role-based access controls to limit which environments and processes teams or individuals can access.

### Ohana

While this is a lot to take in, the engineering team at Ohana has developed an open-source application that intends to abstract the relationships between all of these technologies to help ease the process of deploying clusters, namespaces, vclusters, and containerized codebases.

My colleague Andy Kahn has written a fantastic piece walking through how Ohana can help teams looking to migrate their applications to the cloud.