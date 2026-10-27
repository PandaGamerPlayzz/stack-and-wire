---
layout: ../layouts/PageLayout.astro
title: "The lab"
description: "Two Proxmox hosts, a virtualized NAS, and the networking hardware I've collected."
gallery:
  - src: assets/photos/rack-front.webp
    alt: "Front of my open 42U rack with a console monitor, keyboard, mouse, and server equipment."
    caption: "The front of my 42U rack, with the local console and servers."
    width: 1500
    height: 2000
  - src: assets/photos/rack-rear.webp
    alt: "Rear of the rack showing network switches, a patch panel, and cables running to the servers."
    caption: "The rear of the rack, with switches, the patch panel, and cabling."
    width: 1500
    height: 2000
---

My setup lives in a 42U rack, with servers at the front and switches at the back. There's a small console monitor inside, along with a keyboard, mouse, and four-port VGA KVM for local access.

## Hyperion and Saturn

| Host | CPU | What it runs |
| :--- | :--- | :--- |
| Hyperion | Intel Core i9-12900K | Proxmox VE, my NAS, Minecraft servers, and other VMs and containers |
| Saturn | Intel Core 3 N355 | Proxmox VE, an OPNsense router VM, and a Tailscale container |

Hyperion runs most of the lab. Routing used to live there too, but I moved it to Saturn in February 2026. Having the router on another machine gives me more freedom to work on Hyperion. OPNsense is still virtualized, even though Saturn is mostly dedicated to routing.

A friend helps administer the lab and often sets up new Minecraft servers. He reaches the management pages through Tailscale. I run the Headscale control server separately on a $5/month Linode VPS.

[Router migration](/projects/virtualized-opnsense/) · [Remote access and hosting](/projects/remote-access/)

## Tools I run

Alongside other self-hosted software, I run two applications I've written:

- An application for tracking my work hours.
- A locally hosted tool for forwarding notifications from AI agents.

I host these in a container within Proxmox. It gives me somewhere to run my own software as well as the other services I use.

## Storage

The NAS is a VM on Hyperion. It uses two 8 TB HDDs and two 1 TB NVMe SSDs, with ZFS mirror redundancy. The mirrors aren't a backup.

I'm cautious about experimenting on Hyperion because it holds data I care about. Moving the router helped, but the NAS is still on the same host as my other services. Eventually, I want to move storage to a dedicated machine and build a backup server after that. Both are later projects, outside the current networking work.

## Switches and network cards

| Equipment | Ports / quantity |
| :--- | :--- |
| NICGIGA unmanaged switch | Four 2.5GbE RJ45 ports and two 10GbE SFP+ ports |
| TP-Link TL-SG1024DE Easy Smart switch | 24 Gigabit Ethernet ports, with VLAN and other management features |
| Dell / Intel X520-DA2 adapters | Four cards, each with two 10GbE SFP+ ports |
| HP 530T adapters | Five cards, each with two 10GbE RJ45 ports |

The cards are what I have available; they aren't all installed. I want to use them for connections to my development PC and NAS, with another Hyperion link for speed tests and experiments.

Hyperion's Marvell 10GbE interface is disconnected because of reliability concerns. Saturn's 10GbE card is also unplugged. I previously used 10GbE for NAS access and OpenSpeedTest, but haven't restored that configuration since reinstalling Proxmox.

## The household connection

The lab currently sits behind the household Verizon router, which leaves me with double NAT. I have firewall rules, but haven't set up the VLAN separation I want yet. Moving IoT devices off the household Wi-Fi is one of my priorities.

My [longer-term hosting plan](/projects/remote-access/#what-i-want-to-change) is to move the lab off that shared connection.

## Cabling

I have roughly 900 feet left on a 1,000-foot spool of white New York Cables Cat6a riser cable. I also have termination tools, connectors, and a NOYAFA NF-8209S tester kit, so there's plenty available for more cabling work.

[Learning & Plans](/learning/) covers the network changes I want to make next.
