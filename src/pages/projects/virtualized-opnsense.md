---
layout: ../../layouts/PageLayout.astro
title: "Moving the router off Hyperion"
description: "Why I moved routing to a separate Proxmox host, switched from pfSense to OPNsense, and kept the router virtualized."
gallery: [{"src":"assets/placeholders/proxmox-screenshot-placeholder.svg","alt":"Placeholder for a Proxmox screenshot of the router host. No actual screenshot is shown.","caption":"Screenshot pending: the router host and its virtual networking."},{"src":"assets/placeholders/opnsense-screenshot-placeholder.svg","alt":"Placeholder for an OPNsense screenshot. No actual screenshot is shown.","caption":"Screenshot pending: a selected router view relevant to this account."}]
---

My router originally ran as a pfSense VM on Hyperion, alongside my other services and virtualized NAS. It worked, but putting everything on one server made me cautious about changing it. I wanted to separate routing so I could experiment with the main server without involving the router every time.

In February 2026, I got the appliance I now call Saturn and moved routing there. I also reinstalled Proxmox on Hyperion. Saturn is mostly dedicated to the router, although it still runs Proxmox with OPNsense in a VM.

## From pfSense to OPNsense

I tried pfSense on Saturn first. Getting it installed had been awkward before, and the approach I had used on the old Proxmox installation no longer worked.

I don't remember the errors well enough to reconstruct the problem. I suspect the change between major Proxmox versions contributed, but I never confirmed that. Instead of continuing to fight the installation, I decided to try OPNsense. I've stayed with it since.

## Why I kept Proxmox

I had originally considered running the router software directly on Saturn. Concerns about FreeBSD support for the Marvell 10GbE hardware were one reason I kept Proxmox: the Linux host can handle the physical NICs and present virtual interfaces to OPNsense.

Those 10GbE connections aren't in use at the moment. Hyperion's Marvell interface is disconnected because of reliability concerns, and Saturn's 10GbE card is unplugged too.

## The household connection

The existing Verizon router stays in place, and my lab sits behind it with double NAT and firewall rules. I haven't set up the VLAN separation I want yet.

Longer term, I plan to [give the lab its own internet connection](/projects/remote-access/#what-i-want-to-change).

## Where things stand

Routing is now off Hyperion, but the NAS is still there. I haven't taken full advantage of the freedom to experiment because I'm careful about the data stored on it. Separating the router was one step; storage is still a constraint.

[Current lab](/lab/) · [Remote access and game hosting](/projects/remote-access/) · [Learning & Plans](/learning/)
