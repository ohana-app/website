---
sidebar_position: 4
title: Crash Course
---
# Administrator Overview
# Overview
- Generate the variables needed to initialize your Kubernetes flow:
  - Database URI
  - Environment variables within the Dockerfile
    - Docker Image
    - gcloud account (typically in the form of an IAM admin service account)
    - gcloud credentials via key file .json
    - Project ID
    - Cluster Zone or Region
```
# Set arguments
## Add gcloud service account here
ARG gcloud_account=<service account here>
## Add gcloud account key file path here
ARG key_path=<include .json file here>
## Add GKE project_id here
ARG project_id=<your project id>
## Add GKE Cluster zone here
ARG cluster_zone=us-west1-a
```