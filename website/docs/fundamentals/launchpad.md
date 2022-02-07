---
id: lz-launchpad
sidebar_position: 4
---

# What is launchpad

The launchpad is a special landing zone and is the first landing zone you will create for your environment (**level 0**).
This landing zone acts as your toolbox to deploy the resources that in turn helps manage the fundamentals of a full landing zone deployment:

A level0 landing zone is the foundation of account and subscription management. As such it is responsible for:

* Defining how to store and retrieve the Terraform state.
* Defining the core of secrets protection for the Terraform state.
* Defining the management of the principals or identities for a complex environment.
* Defining how to access/partition the different subscriptions.
* Defining the DevOps foundations.
* Defining initial blueprints