---
layout: ../../layouts/PageLayout.astro
title: "Virtualizing a router with Proxmox and OPNsense"
description: "A working draft about virtual networking, firewall placement, and the details that need to be verified."
kicker: "Project / 01"
gallery: [{"src":"assets/placeholders/proxmox-screenshot-placeholder.svg","alt":"Placeholder for proxmox overview. No actual photo or screenshot is shown.","caption":"Screenshot placeholder — replace with actual Proxmox evidence and explain the relevant configuration."},{"src":"assets/placeholders/opnsense-screenshot-placeholder.svg","alt":"Placeholder for opnsense configuration. No actual photo or screenshot is shown.","caption":"Screenshot placeholder — replace with actual OPNsense evidence after redaction."}]
---

<!-- TODO: owner review. All first-person prose is a starter draft; verify and rewrite before sharing. -->


## Context

I have experimented with OPNsense as a virtualized router or firewall in Proxmox. This writeup is a structure for that experience. TODO: describe the actual situation and confirm whether the experiment is still in use.

## Goal

Explore how routing and firewalling fit into a virtualized environment. TODO: replace this with the original goal and the specific connections the experiment needed to support.

## Setup

| Item | Detail to record |
| --- | --- |
| Host | TODO: hardware and Proxmox version |
| Router VM | TODO: OPNsense version, resources, interfaces |
| Networking | TODO: bridge names and physical port mapping |
| Recovery access | TODO: how management remained reachable |

![Conceptual virtualized router drawing; not the actual project topology.](/assets/diagrams/current-topology-placeholder.svg)

*Illustrative only. Replace with actual topology, including a safe, redacted explanation of management access.*

## Build steps to verify

The following is a documentation checklist, not a record of actions already completed:

1. Identify upstream, downstream, and management roles before assigning interfaces.
2. Record which physical ports and virtual bridges connect to each role.
3. Describe whether the design uses bridge attachment or hardware passthrough, and why.
4. Explain addressing and DHCP responsibilities without publishing sensitive details.
5. Document how connectivity and management access were checked.
6. Describe a recovery path if the router VM or host becomes unavailable.

## Tradeoffs and pitfalls

A virtual router makes host availability part of the network design. Bridge assignment and interface naming deserve careful documentation because a wrong assumption can change the path of traffic or affect access to management.

TODO: explain the tradeoffs you actually considered. Did you compare a dedicated device, passthrough, or separate management connectivity? Which issue did you actually encounter?

## Evidence

- TODO: redacted Proxmox network view and a description of each relevant bridge.
- TODO: redacted OPNsense interface view, with actual role assignments explained.
- TODO: observations from a real connectivity check, including what those observations do and do not establish.
- TODO: relevant configuration excerpts; remove credentials and identifying values.

No screenshot or terminal output below is real evidence yet.

## Result and current status

**Experiment experience established; exact result and current deployment unconfirmed.** TODO: state what worked, what remained unresolved, and whether this setup is active, retired, or being rebuilt.

## Lessons learned

TODO: add two specific lessons tied to observations. Explain what you would do differently instead of turning this into a generic list of best practices.

## Next steps

Finish the topology, record the recovery approach, and add real evidence. Link any future switching work to the [roadmap](/roadmap/).

