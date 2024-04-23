+++
title = "Databricks Compute Guidelines"
+++

For all databricks compute types, please consult the following link:
https://azure.microsoft.com/en-us/pricing/details/databricks/

Here's a general guide for recommending computational resources based on task categories:

| Task Description | CPUs | Memory (GB) | GPU | Storage | Instance Recommendation|
|---------------|-------|-------------|-|----------|---------------|
|General Purpose Tasks (Web browsing, Document editing, etc.)|Any recent multi-core processor. |4GB - 8GB.| |Storage: SSD for faster boot and load times.| D2s_v3 - D4s_v3|
|Software Development|Recent multi-core processor. More cores can benefit parallel builds and multitasking.|8GB - 32GB. |Depending on the complexity and size of the projects.|SSD, with 256GB or more for faster compile times and responsiveness.| D4s_v3 - D8s_v3 |
|Heavy Multimedia Consumption and Light Production (e.g., watching 4K videos, basic video editing)|Mid to high-end multi-core processor.|8GB - 16GB.|Integrated graphics for consumption, dedicated graphics for production.|SSD, possibly with an HDD for additional storage. | NC6s_v3 - NC24s_v3 </br><b> Make sure to keep a close eye on cost!!!</b>|
|Professional Graphics Work and Video Editing|CPU: High-end multi-core processor, possibly workstation-grade.|32GB - 128GB or more. |High-end dedicated graphics or workstation graphics cards.|Storage: Fast NVMe SSDs and possibly RAID configurations for speed and redundancy. | NC6s_v3 - NC24s_v </br><b> Make sure to keep a close eye on cost!!!</b>|
|3D Rendering and Simulation|High-end or workstation-grade CPUs with many cores.|64GB - 256GB or more.|High-end rendering GPUs or GPU clusters, depending on the software used.|High-speed NVMe SSDs, with potential for RAID configurations. | NC6s_v3 - NC24s_v </br><b> Make sure to keep a close eye on cost!!!</b>|
|Machine Learning and Data Analysis|High-end multi-core processor.|Depending on the dataset size, anywhere from 16GB to 1TB or more.|High-end GPUs with a lot of VRAM, or specialized tensor processing units (TPUs) for deep learning tasks.|Fast NVMe SSDs for datasets and RAID for redundancy and speed.| Varies depending on Machine Learning Use Case <br> r4.2xlarge (memory optimized) </br> NC6s_v3 (GPU optimized), Eas_v4 (memory optimized), F4-F16 (compute optimized) |
|Server Workloads (e.g., databases, web servers)|Depending on the workload, multi-core server-grade CPUs.|Varies widely based on workload, but often 32GB or more.||RAID configurations, with a mix of SSDs for speed and HDDs for storage. | Eas_v4 - E16s_v3</b>|
|High-Performance Computing (HPC)|Multiple high-end server-grade processors.|Several hundred GBs to TBs.|Specialized accelerators like TPUs or GPUs based on the application.|High-speed storage networks with parallel file systems. | F4s_v2 - F72s_v2 </br><b> Make sure to keep a close eye on cost!!!</b>|