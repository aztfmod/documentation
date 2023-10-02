---
id: lz-compute
sidebar_position: 2
---

# Compute Nodes

Since many organizations do not desire to share sensitive credentials or privileges on public running agents, most of the time, enterprises will delegate running a landing zone to dedicated compute nodes, running from their private virtual networks. Depending on your Continuous Integration and Continuous Deployment toolset, those compute capabilities could be called self-hosted agents, runners, etc.

Those compute capabilities would need to run containers as the rover and could be implemented in the shape of:

- An **Azure Virtual Machines** for each level in a given environment, each VM can contain a set of runners(container instances), that would be ready to be invoked and run in parallel if required.
- An **Azure Azure Container Instance** for a given environment, a container group will be deployed with a set of container of container runners. Scaling up and down those runners and reliability should be planned by deploying multiple container groups in multiple zones or regions depending on your criteria. 
- An **Azure Kubernetes Services** for a given environment. Each level would be impersonated in a different node pool, and each node pool would use [Azure Active Directory pod identity](https://docs.microsoft.com/azure/aks/use-azure-ad-pod-identity). If there is a need to increase the number of runners for a particular level, this could be achieved using AKS pod autoscaler capability.

Azure Terraform SRE landing zones provide by default a set of DevOps runners for the following platforms: [GitHub Actions](https://github.com/features/actions), [Azure DevOps](https://docs.microsoft.com/azure/devops/pipelines/agents/agents), [Git Lab](https://docs.gitlab.com/runner/), [Terraform Cloud and Terraform Enterprise](https://www.terraform.io/docs/cloud/agents/index.html) and are available on [GitHub](https://github.com/aztfmod/rover/tree/master/agents) for customization.

![Example of DevOps Compute Nodes for the GitOps environment](./pictures/terraform-model-gitops.png)

*Figure 1: Example of DevOps Compute Nodes for the GitOps environment*

## Authentication and authorization

As default methodology, Azure Terraform SRE landing zones use [Azure Managed Identities](https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview) capability for the DevOps compute nodes running on Azure.

Customer can also use Service principals to be used at different levels of the hierarchy, the down-side of using Service Principal is to manage lifecycle of the attached secrets.

The authorization related to either type of principals can be defined as part of the Azure Terraform SRE landing zones configuration syntax.
