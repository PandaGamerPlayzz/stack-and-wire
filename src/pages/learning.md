---
layout: ../layouts/PageLayout.astro
title: "Learning & Plans"
description: "CCNA study, better network separation, and the local 10GbE connections I want to put to use."
---

## What I’m learning

I like working with my hands and thinking on my feet. Networking gives me both: a larger plan to work toward, with lots of small decisions and revisions while connecting equipment. Network security and cryptography are particular interests, and I want to understand those subjects more deeply.

I paid for NetworkChuck’s Summer of CCNA in May. I’m still early in the material. The scheduled course has ended, but I retain access for a year from its start date. I want to finish it and take the CCNA exam when I’m ready. I haven’t taken the exam or earned the certification.

## The next networking project

I haven’t configured the VLAN separation I want yet. My next project is to decide which devices belong together, what they need to reach, and how I’ll check those boundaries.

I’m planning to add managed copper and SFP+ 10GbE switching, VLAN-capable access points, and a UPS for the network. I’ll reuse the adapters, Cat6a, and termination tools I already own.

I want to work through it in stages:

1. Map the active connections and plan device groups and access rules.
2. Configure a small VLAN setup and map wireless SSIDs to it, including a separate place for IoT devices. Test both permitted and blocked connections.
3. Set up useful 10GbE paths for the development PC and Hyperion’s virtualized NAS, then record actual link speeds and transfer observations.

I previously used 10GbE for NAS access and OpenSpeedTest, but haven’t restored that configuration since reinstalling Proxmox.

## Further ahead

A [separate internet connection for hosting](/projects/remote-access/#what-i-want-to-change) is also part of the longer-term plan.

I also want to build a dedicated NAS using a 9900K, followed by a server for automated backups.

[Current lab](/lab/) · [Project notes](/projects/)
