---
slug: Introducting Ohana
title: Introducing Ohana, an internal Kubernetes platform
author: The Ohana Team
author_title: The Ohana Team
author_url: https://github.com/os-labs/ohana
author_image_url: https://avatars1.githubusercontent.com/u/2055384?v=4
tags: [ohana, kubernetes, containers, docker]
---

# Introducing Ohana, an internal kubernetes management platform
/Dreaming of better days managing your k8 clusters?/

*The problem*
As organizations of all sizes move towards a Kubernetes container orchestration strategy, the question arises: how to give engineers access to create their own clusters and namespaces, without giving them full access to the cloud dashboard, with the obvious security and cost risks associated?

Many organizations solve this problem by building out an internal platform - an abstraction layer that enables "self-service" from engineers and administration from DevOps.

While this may work for larger organizations with complex workflows, we wanted to provide an alternative for teams of all shapes and sizes: an open-source internal Kubernetes platform that has the functionality you need out of the box - but can be easily customized to meet your needs.

*Introducing: Ohana*
We built Ohana with both DevOps and engineers in mind. For DevOps, we wanted to make it easy to create and manage users, with granular permissions control and robust monitoring. For engineers, we wanted it to be a seamless experience, empowering them to access the cloud resources they need on their own, with minimal fuss.

*How it works*
Ohana is built on top of a number of tools you may already be using. We recommend running Ohana in a container (and you can find a sample container on our docker hub here) for consistency across all environments.

The front-end is built using React, with React Context to manage state. We use a Node/Express backend with Bcrypt for password-hashing and PostgreSQL database.

Ohana comes pre-installed with all the tools you will need for a typical Google Kubernetes Engine (GKE) workflow: Google Cloud SDK, kubectl and helm all come bundled. Ohana is containerized via a multi-stage build Dockerfile. This enables containers to spin up and authenticate to Google Cloud automatically - no additional intervention necessary.

The Ohana GUI allows for creation and management of Namespaces and Clusters, as well as tools for admins to manage their users and teams.

*Let's get started*
So what are you waiting for? We invite you to visit our docs then fork and clone from our GitHub repo or simply spin up our sample docker image.
We look forward to streamlining and improving your developer and DevOps workflows.
We love feedback! Give us a shout via our GitHub issues page to let us know your thoughts for further releases. Be sure to check out our product roadmap to see what features are coming soon. Ohana is 100% open-source and we always welcome contributions from the community. View our contribution guidelines here.

/Ohana is powered by OS Labs, a tech accelerator dedicated to building open-source tools to make developers lives easier and more productive./