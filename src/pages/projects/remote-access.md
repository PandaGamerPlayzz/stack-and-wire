---
layout: ../../layouts/PageLayout.astro
title: "Remote access and game hosting with friends"
description: "Headscale, Tailscale, and Minecraft servers for friends."
---

I host Minecraft servers for friends and friends of friends. A friend who also homelabs is a co-administrator, and I often leave new game-server setup to him. Tailscale lets him reach the management web pages he uses to do that work.

## Headscale and remote access

I run Headscale on a Linode VPS that costs me $5 a month. When I need to add a client, I SSH into the VPS to manage it. Saturn also runs a Tailscale container alongside the OPNsense router VM.

A few friends use the arrangement for their own services and for LAN-style gameplay. It has become part of how we use the lab together, both for playing games and for managing the machines behind them.

## Publicly reachable games

Separately, I have a Minecraft server that is reachable from the public internet through a proxy or tunneling service. I still think of it as a server for friends and, at most, friends of friends. I haven't had random people from the internet join, but it is publicly reachable.

That matters to how I want to organize the network. The lab currently uses the household internet connection behind the existing Verizon router. I have double NAT and firewall rules, but haven't built the VLAN separation I want.

## What I want to change

I plan to get a second home internet line for the homelab and the publicly reachable Minecraft hosting, so those services can be kept separate from the household network. Any links I retain between the networks will still need deliberate access rules.

I also want clearer separation between management, hosted services, and IoT devices. That work is still ahead of me. For now, Headscale and Tailscale provide the remote access we use, while the larger network design needs more attention.

[Router migration](/projects/virtualized-opnsense/) · [Current lab](/lab/) · [Learning & Plans](/learning/)
