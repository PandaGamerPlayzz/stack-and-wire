---
layout: ../layouts/PageLayout.astro
title: "Inside the lab"
description: "The equipment, virtual machines, and networking questions behind the notebook."
kicker: "Lab / Overview"
gallery: [{"src":"assets/placeholders/server-photo-placeholder.svg","alt":"Placeholder for server / rack overview. No actual photo or screenshot is shown.","caption":"Replace with a real server or rack overview. Check visible labels before sharing."},{"src":"assets/placeholders/nic-photo-placeholder.svg","alt":"Placeholder for network interface cards. No actual photo or screenshot is shown.","caption":"Replace with real adapters and their model labels. Redact serial numbers if desired."}]
---

<!-- TODO: owner review. All first-person prose is a starter draft; verify and rewrite before sharing. -->


The lab is a place to explore virtualization and networking through hands-on work. This page is the starting point for an accurate inventory; device models, active services, and physical wiring still need verification.

## Hardware inventory

| Reference | Category | Model / connections | Status |
| --- | --- | --- | --- |
| SERVER_A | Lab compute hardware | TODO: model, CPU, RAM, storage | Hardware category established; inventory needed |
| NIC_A | Used enterprise 10GbE adapter | TODO: vendor, model, ports, connector | Owned; exact details to confirm |
| NIC_B | Additional used enterprise adapter | TODO: inventory; do not infer quantity from these rows | Owned category; replace rows with real inventory |
| CABLE_A | UTP Cat6a bulk cable | Approximately 900 ft remaining from a 1,000 ft roll; owner-reported | Owned |
| TOOLS_A | Cable termination tools | Tools available; TODO: list types and models if useful | Owned |
| SWITCH_A | Managed switching | TODO: desired ports and compatibility | Planned; not a confirmed owned device |

These are inventory prompts, not an exact list of devices. Add or remove rows to match the real hardware.

## Software and services

| Software | Role | Honest status |
| --- | --- | --- |
| Proxmox VE | Virtualization | Hands-on use; TODO: document current setup |
| OPNsense | Virtual router / firewall experiments | Experimented with; TODO: confirm current deployment |
| Tailscale | Remote connectivity | Hands-on use; TODO: confirm current configuration |
| Headscale | Possible self-hosted control plane | Idea / considered; no completed deployment claimed |

## Current topology

The diagram below is a **conceptual example — replace with actual topology**. It does not assert which ports, bridges, or devices are currently connected.

![Illustrative upstream connection through an OPNsense VM and LAN bridge to example clients.](/assets/diagrams/current-topology-placeholder.svg)

*Conceptual example — replace with actual topology. [Open the editable SVG](/assets/diagrams/current-topology-placeholder.svg).*

## What works

There is established hands-on experience with virtualization, LAN configuration, DHCP, remote connectivity, and access troubleshooting. TODO: replace this overview with specific verified capabilities and evidence links. Do not treat past experiments as proof that a service is running now.

## Limitations

I own used enterprise 10GbE adapters, but lack the affordable managed switching infrastructure to use them as intended. Exact compatibility requirements still need to be recorded. The current documentation also needs actual inventory and redacted configuration evidence.

## Cabling experiments

I have roughly 900 feet of UTP Cat6a cable remaining from a 1,000-foot roll, along with the tools for terminating it. That gives me material to practice terminations, document the process, and build useful connections while the managed-switching plan develops.

TODO: record the actual cable specification, compatible termination parts, and available test tools. No completed runs, verified category performance, or certification results are claimed here.

## Next improvements

1. Record hardware models, interfaces, and current service status.
2. Draw the actual topology and identify safe recovery access.
3. Capture one real project or troubleshooting incident.
4. Plan switching and segmentation exercises from the [roadmap](/roadmap/).

