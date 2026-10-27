# Interview-based rewrite validation

Validated on October 27, 2026.

## Result

Four main sections and two project articles publish as six static pages: Home, Lab, Projects, Learning & Plans, router migration, and remote access. Original starter pages are retained under archive/starter-pages/ and are not published. The existing restrained dark/light design is preserved.

## Checks completed

- npm run build: passed; six static routes produced.
- npm run verify: passed; 115 local links, heading anchors, images, CSS/font assets checked under /stack-and-wire/.
- Expected-route assertions passed; retired starter routes are absent.
- Publication-exclusion checks passed: no interview log, private inventory, photo checklist, original-photo folder, or cat6a-spool-label file in dist/.
- Source/public assets contain no rejected cat6a-spool-label image. Photo selection is recorded as reference-only in the sibling checklist.
- Browser reviewed desktop Home and all six pages at phone width; document width matched viewport width. Tables remain within their scrollable areas.
- Light toggle checked and persisted across reload. Default remains dark for visitors without a saved choice.
- Browser console check returned no errors or warnings.
- A separate read-only content audit found no meaningful contradictions against the interview/history and inventory.
- git diff --check: passed.

## Content handling

Round 7 records early paid CCNA course progress and a future exam intention. No completed course, certification, deployed VLAN design, measured throughput, or diagnosed pfSense root cause is claimed. Co-administration is credited. The separate NAS and future backup server stay outside the grant project's scope.

Private working documents remain beside the repository. Original interview answers are preserved with dated structured summaries and corrections. The public pages are an AI-assisted interview-based draft for owner review, not a verbatim publication of private interview details.

## Remaining owner work

Review the first-person wording, take/select the remaining rack and project screenshots, replace labelled image placeholders, configure site in astro.config.mjs, enable GitHub Actions under Pages, and push when ready. Verify the deployed URL afterward. No push, hosting-setting changes, grant submission, or publication was performed.

## Content revision — October 27, 2026

All six public pages were rewritten for owner review. The copy now includes the work-hours tracker and locally hosted AI-agent notification forwarder alongside third-party self-hosted software, and records the second home internet line as a firm future plan for separating lab/public Minecraft hosting from the household network. The repeated public interview-draft banner was removed; labelled photo placeholders remain. The existing layout and themes are unchanged.

- Final static build: passed; six routes generated.
- Final build verifier: passed; 122 local links, heading anchors, images, and font/CSS assets checked.
- Read-only factual review: no material blocker; the final wording avoids implying the development PC previously had a 10GbE link.
- No additional browser/layout review was performed for this prose revision; the earlier browser checks above apply to the retained layout.
- Private inventory and interview notes record the new clarifications. Application narrative answers remain unchanged at 80/100, 95/100, and 60/75 words.
- The application budget remains $1,973.95. A small actual overrun may be covered personally, while the submitted estimate remains below $2,000.

The owner still needs to review/rewrite the prose and add selected photos. No push, publication, purchase, or grant submission was performed.
