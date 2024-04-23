+++
title = "Platform Architecture"
+++

## Platform Architecture

![Platform Architecture](/images/prefect-platform-arch.jpg)

## Core Components

### Prefect Cloud Workspace

Prefect Cloud workspace allows you to monitor your workflows and their execution. It provides a UI dashboard that gives you real-time insights into the execution of your workflows. Additionally, it allows developers to build low-code automation flows using the UI.

### Prefect Workers

Prefet workers are the execution agents that run the workflows. Workers are typically hosted in Azure Kubernetes Service (AKS) clusters. Prefect workers are stateless and can be scaled up or down based on the workload.

### Github Reopo

Prefect follows a mono repo pattern. All the workflows are stored in a single Github repo. `prefect-data-platform` is currently hosted in the `Cloud-3-0-EMU` organization. 
[Refer to the prefect-dataplatform repo here](https://github.com/Cloud-3-0-EMU/prefect-data-platform/)

### Workpools & queues

Workpools and queues provides a flexible way to mange your workflow execution and priorities. Based on the workload, you can create multiple workpools and queues to manage the execution of your workflows.

