---
layout: ../../layouts/PageLayout.astro
title: "Diagnosing a network connectivity problem"
description: "An evidence-first case-study template for a real LAN or remote-access incident."
kicker: "Project / 02"
---

<!-- TODO: owner review. All first-person prose is a starter draft; verify and rewrite before sharing. -->


## Context

My experience includes troubleshooting LAN and remote connectivity, including Tailscale. **TODO: replace this template with one actual incident and its evidence.** This page does not claim a particular command was run, cause was found, or fix succeeded.

## Goal

State the expected connection in one sentence: which source should reach which destination, using what service? TODO: record the actual symptom, scope, and approximate incident date using verified details.

## Setup

- Source: TODO: device category and relevant network role.
- Destination: TODO: service and expected connection path.
- Environment: TODO: LAN, virtual networking, Tailscale, or a combination.
- Recent changes: TODO: what changed, or state that this is unknown.

## Investigation method

Start with the smallest observable failure and work outward. The sequence below is a method to adapt, not an account of the incident.

| Question | Evidence to collect | What it can narrow down |
| --- | --- | --- |
| Is the local link available? | Interface state and connection information | Local attachment or interface problems |
| Is addressing as expected? | Address, prefix, DHCP information | Addressing or lease assumptions |
| Is the intended path selected? | Route information and next-hop reachability | Path and routing assumptions |
| Is a policy affecting access? | Relevant firewall rules and logs | Traffic filtering, if supported by evidence |
| Is name resolution involved? | Compare name lookup with direct address access | DNS versus other connectivity problems |
| What reaches the destination? | Authorized packet capture or service logs | Where observed traffic stops |

Tools such as ping, traceroute, and packet capture can help, but each observation has limits. For example, a missing ping reply alone does not prove a host is unavailable; ICMP may be filtered. Record the actual command and context only if you used it.

## Evidence

Use a small table for the real investigation. Keep failed hypotheses when they explain why the next check mattered.

| Check | Actual observation | Interpretation / uncertainty |
| --- | --- | --- |
| TODO: first check | TODO: real output or screenshot | TODO: what it establishes |
| TODO: next check | TODO: real output or screenshot | TODO: why you continued |

> TODO: replace with actual incident evidence. Do not fill this section with plausible-looking generated terminal output.

## Result and current status

**Unrecorded.** TODO: state the supported root cause, the change made, and how the original symptom was retested. If unresolved, say so and list what you ruled out.

## Lessons learned

TODO: explain one wrong assumption, one useful check, and one limitation of the available evidence. Distinguish correlation from a confirmed cause.

## Next steps

TODO: describe a prevention or documentation improvement justified by the incident. Add a redacted diagram if the connection path was important.

