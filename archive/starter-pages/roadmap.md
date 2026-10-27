---
layout: ../layouts/PageLayout.astro
title: "Putting the adapters to work"
description: "A proposed path from owned enterprise NICs to practical switching and segmentation exercises."
kicker: "Planning / Next steps"
---

<!-- TODO: owner review. All first-person prose is a starter draft; verify and rewrite before sharing. -->


## The switching gap

I already own multiple used enterprise 10GbE network adapters, including SFP+ or related enterprise equipment. What I lack is affordable managed switching infrastructure to connect and use them as intended. TODO: verify every adapter model, connection type, and compatibility requirement before choosing equipment.

## Work I can start with existing materials

I own a roll of UTP Cat6a cable with approximately 900 of its original 1,000 feet remaining, plus termination tools. A practical next exercise is to plan and terminate a small test connection, record the parts and process, and check the result with whatever test equipment is actually available. This is a planned exercise, not a completed installation.

The copper cable supports a separate set of cabling experiments; SFP+ adapter connections still depend on verified device and media compatibility. TODO: confirm connectors, termination method, and test equipment. Basic continuity or link checks should be described as those checks rather than as cable certification.

## What I want to learn

- Configure and manage a switch, with a documented way to recover access.
- Separate test traffic with VLANs and understand where routing occurs.
- Test expected and restricted traffic flows between segments.
- Observe traffic and practice troubleshooting with real evidence.
- Reinforce CCNA study with repeatable, bounded exercises.

These are planned outcomes, not results already achieved. Owning 10GbE adapters does not establish end-to-end 10GbE performance.

## Proposed topology

![Proposed managed switch with a router and separate lab and service segments.](/assets/diagrams/proposed-topology-placeholder.svg)

*Proposed / subject to change. [Open the editable diagram](/assets/diagrams/proposed-topology-placeholder.svg). This does not describe the current network.*

## Equipment and skills needed

This is an **editable illustrative planning table**, not a purchase list or quote.

| Item or skill | Purpose | Still to confirm |
| --- | --- | --- |
| Managed 10GbE SFP+ switching | Connect compatible owned adapters and practice segmentation | Port needs, features, noise, power, cost |
| Owned UTP Cat6a and termination tools | Practice copper terminations and document test connections | Roughly 900 ft available; compatible parts and test tools to confirm |
| DAC cables or transceivers | Physical compatibility between adapters and switch | Supported parts, distance, media |
| RJ45 connectivity, if needed | Attach devices that need copper Ethernet | Actual device requirements and supported options |
| Routing and firewall practice | Define and test traffic between segments | Router capacity, policy, recovery plan |
| Testing and study resources | Record predictions, observations, and lessons | Exercise scope and available tools |

## Milestones

| Stage | Milestone | Status |
| --- | --- | --- |
| 01 | Verify owned adapter inventory and compatibility | Planned |
| 01a | Plan a Cat6a termination exercise and document actual checks | Planned |
| 02 | Define switching requirements and equipment options | Planned |
| 03 | Build a small test segment with recovery access | Planned |
| 04 | Exercise VLANs, routing, and traffic policy | Planned |
| 05 | Document observations and revisit the design | Planned |
| Later | Explore Headscale if it serves a real need | Idea |

TODO: change a status to In progress or Done only when supported by actual work. Add evidence links as milestones are completed.

## Grant context

External equipment funding could help close the switching gap and make the existing adapters useful for practical learning. The portfolio is intended to show the work, the constraints, and the learning plan. No funding or award is claimed.

