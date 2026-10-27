---
layout: ../layouts/PageLayout.astro
title: "Stack & Wire"
description: "My homelab, the network behind it, and what I'm learning along the way."
---

I'm a self-taught developer who likes building servers, running cables, and figuring out how everything connects. Alongside other self-hosted software, I run two applications I've written: a work-hours tracker and a local notification forwarder for AI agents. I host them in a container within Proxmox.

Networking has become a career I'd like to pursue. I enjoy having a larger plan to work toward while making all the small decisions that go into wiring and maintaining a network. Security and cryptography are particular interests of mine.

## What's running

**Hyperion** is my main Proxmox server, built around an i9-12900K. It runs my NAS, Minecraft servers, and other VMs and containers. **Saturn** is a separate Proxmox host running OPNsense and a Tailscale container.

Everything sits in a 42U rack. I've also collected used 10GbE adapters and have about 900 feet of Cat6a left for cabling work.

[The lab](/lab/) has the hardware and current setup.

## Project notes

- [Moving the router off Hyperion](/projects/virtualized-opnsense/). Why I gave routing its own host, switched from pfSense to OPNsense, and kept the router virtualized.
- [Remote access and Minecraft hosting](/projects/remote-access/). How I use Headscale and Tailscale, host games for friends, and share administration with a friend who also homelabs.
- [Tools I run locally](/lab/#tools-i-run). My work-hours tracker and AI-agent notification forwarder.

## What I want to change

My next priorities are VLANs for different device groups, a separate Wi-Fi network for IoT, and setting up useful 10GbE connections for my development PC and NAS. I have some of the hardware already; the network still needs work.

I also plan to get a [second home internet line](/projects/remote-access/#what-i-want-to-change) to keep the homelab and public-facing Minecraft servers separate from the household network.

I'm studying through NetworkChuck's Summer of CCNA alongside this work. [Learning & Plans](/learning/) covers where I am and what I want to try next.

## Open to opportunities

I'm always open to internships and entry-level roles in networking and IT. I'd love to get more hands-on experience and learn from people working in the field.

[Find me on GitHub](https://github.com/PandaGamerPlayzz).
