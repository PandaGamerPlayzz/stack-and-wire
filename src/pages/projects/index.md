---
layout: ../../layouts/PageLayout.astro
title: "Project notes"
description: "The router, remote access, and the network changes I want to make next."
---

These are notes on how my lab got to its current setup, including the parts I still want to change.

## Moving the router off Hyperion

**In use · moved in February 2026**

My router used to be a pfSense VM on the same server as my NAS and other services. I moved it to a separate Proxmox host so I could work on the main server more freely. Trouble installing pfSense during that move led me to try OPNsense.

[Read about the move to Saturn](/projects/virtualized-opnsense/).

## Remote access and Minecraft hosting

**In use**

I use Headscale and Tailscale for remote access and playing with friends. A friend also helps administer the lab, especially the Minecraft servers. Public game access goes through a proxy or tunnel, while management access uses Tailscale.

[Read about remote access and hosting](/projects/remote-access/).

## Locally hosted tools

**In use**

I've written an application for tracking my work hours and another for forwarding notifications from AI agents. I host them locally in a container within Proxmox, alongside the other software in the lab.

[See the tools in the lab overview](/lab/#tools-i-run).

## VLANs and local 10GbE

**Planned**

I want to separate device groups, move IoT off the household Wi-Fi, and get my development PC and NAS connected over 10GbE. I've collected both copper and SFP+ adapters, and I want to put more of them to use with managed switching.

[See the learning goals and next steps](/learning/).
