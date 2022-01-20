# Getting started

## Deploy your first platform landingzones

In this tutorial you are going to learn how to build the Azure Platform Landingzones with the Cloud Adoption Framework (CAF) for Azure Terraform Landingzones. It is a framework that requires to have both **advanced knowledge of Terraform and Azure services**. 

It is assumed the reader has already deep knowledge of the CAF (https://aka.ms/caf).
It is recommended to be certified to the Azure Architecture track.

This tutorial will guide you on how to deploy the Platform Landingzones and includes:
- Azure Remote State management (launchpad)
- Enterprise Scale for management groups, policy definitions, policy assignments and RBAC
- Identity services (Azure Active Directory Services, extend your on-premise Active Directory Domain Services...)
- Monitoring services 
- Connectivity services (virtual WAN, private DNS zones, egress firewall...)


Based on your configuration you can select the following deployment guide:

|Microsoft Billing Account | Scenario | Link|
|--------------------------|----------|-----|
| Enterprise Agreement | Deploy on existing Azure subscriptions | [Getting started](./platform/org-setup.mdx)

## Introducing the CAF Terraform framework

The CAF Terraform framework has been designed to minimise the Terraform code you need write in favour of writting an object model that describes your infrastructure services. This data model or configuration is processed by a heavy tested Terraform module to deploy those services.
The main goal of the CAF Terraform framework is to leverage Infrastructure-as-Data (IaD) instead of Infrastructure-as-Code (IaC) in order to help our enterprise customers to lower their adoption to automation as code by using an open-source, community-driven tested framework they can use by only writting configuration files in yaml or tfvars.

As an open source framework, we welcome PR from Terraform contributor to augment the depth and breath of the CAF module to build richer infrastructure solutions as code.