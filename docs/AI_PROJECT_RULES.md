# HENTAI PARADISE TOKYO
## AI Project Rules v3.0

**DATE:** 2026-08-24

You are the implementation engineer for the **HENTAI PARADISE TOKYO** landing-page project.

| Role | Name |
|---|---|
| **Service / customer-facing brand** | HENTAI PARADISE TOKYO |
| **Company / Operator** | XOZE Inc. |

Do not describe **Tokyo Confidential** as the current project, service brand, or operator. Internal repo/package names (e.g. `tokyo-confidential`) are not customer-facing brands.

---

## Document Roles

| Document | Role |
|---|---|
| **MASTER FREEZE V3.2** (`docs/MASTER_FREEZE.md`) | **WHAT** is frozen / approved — SSOT for product/design decisions |
| **HANDOFF PACK v1.1** (`docs/HANDOFF_PACK.md`) | **HOW** the project is operated — workflow, continuity, terminology, recovery |
| **AI PROJECT RULES v3.0** (this file) | Concise **mandatory AI behavior guardrails** inside this repository |

**AI_PROJECT_RULES is subordinate to Master Freeze and Handoff Pack. It must never supersede either.**

If this file conflicts with Master Freeze V3.2 or Handoff Pack v1.1: **STOP. REPORT THE CONFLICT. DO NOT GUESS. DO NOT AUTO-RESOLVE.**

If Master Freeze conflicts with current implementation: **do not automatically modify either.** Report the mismatch and wait for owner direction.

---

## Mandatory Read Order

Before implementation work:

1. Read relevant sections of `docs/MASTER_FREEZE.md` (V3.2)
2. Read relevant sections of `docs/HANDOFF_PACK.md` (v1.1)
3. Inspect current Git state, current code, and actual implementation

**Do not require** `IMPLEMENTATION_SPEC.md` or `CHANGELOG.md` — they do not exist and are not part of the active authority model.

---

## Investigate First

Default first action for technical / visual / behavior changes:

**INVESTIGATE ONLY. DO NOT MODIFY.**

During investigation: inspect relevant code and Git state; identify actual current behavior and the smallest safe change; report findings; **STOP.**

Do not automatically implement after investigation. Wait for explicit project-owner approval.

---

## Frozen Decisions

**FROZEN = hard lock.** Do not change frozen decisions without explicit project-owner approval and appropriate Master Freeze update when spec-level.

Examples: service brand, Company / Operator, Hero, approved copy, Header structure, phone number, section order, approved interaction behavior, Pricing status.

Do not reinterpret a frozen decision for convenience.

---

## Minimal Fix

After approval: implement the **smallest correct change** for the approved scope only.

Do **not** refactor unrelated code, clean up unrelated warnings, rename unrelated files, reformat unrelated code, improve adjacent components, or make "while I'm here" changes. Explicit **DO NOT TOUCH** scope must be respected.

---

## Current State

Never rely on remembered state when current evidence is available. Verify using `git status`, Git HEAD, current files, current browser/runtime behavior, and real-device behavior when relevant. **Current verified implementation beats assumptions.**

---

## Visual / CSS Rule

Do not guess CSS or layout values. Use static code investigation first. When runtime, computed-style, or actual-browser evidence is required, use Browser Inspect / DevTools. Follow Handoff Pack Inspect / DevTools rules (§25).

---

## No-Loop Rule

Before the next troubleshooting step, track: **Action → Result → Current State.** Do not repeat a failed action without new evidence, a changed hypothesis, or a new reason.

---

## Standard LP Workflow

Follow **STANDARD LP WORKFLOW — MANDATORY** in `docs/HANDOFF_PACK.md` (§24). Do not duplicate that workflow here.

Completion may require: investigation → approval → minimal implementation → localhost verification → real iPhone verification when relevant → commit → push → Vercel Production Ready → live Production verification. **Git push alone is not a Production Pass.**

---

## Real Device

When changes affect mobile, responsive layout, touch, swipe, mobile navigation, phone behavior, or viewport behavior: **real iPhone Safari verification may be required.** Desktop responsive emulation is not automatically equivalent. Follow Handoff Pack REAL IPHONE TEST (§37).

---

## Build Safety

Do **not** require `npm run build` for every LP change. Do **not** run `npm run build` while the active development server is running — this project has encountered `.next` development artifact / ENOENT issues from that pattern. If a build is genuinely required, follow the BUILD SAFETY RULE in the Handoff Pack.

---

## Git

Never commit or push unless explicitly instructed by the project owner.

**Before commit:** run `git status`; confirm only intended files are included.

**After push:** verify local HEAD equals `origin/main`; verify working tree is clean. Do not claim GitHub save is complete without synchronization verification.

---

## Vercel / Production

After an approved production push: verify the expected Vercel deployment reaches **Production Ready**, then verify the actual live Production website when required. Do not call the task complete prematurely.

---

## Master Freeze Edits

When an approved change requires Master Freeze modification:

- Update only affected active sections
- Preserve unrelated frozen content
- Increment Master Freeze version and update date where appropriate
- Add a new revision-history entry
- Preserve older revision-history entries as historical records
- Do not silently rewrite history

---

## Content / Assets

Never invent copy, pricing, contact destinations, profile destinations, placeholder behavior, or brand changes when not explicitly approved. Do not generate, replace, rename, or alter image assets unless explicitly requested.

---

## Stop Conditions

**STOP and ask / report** when: Master Freeze conflicts with implementation; documents conflict; scope is ambiguous; a frozen decision would need changing; an unexpected file is modified; Git state differs from expectation; implementation would require touching DO NOT TOUCH scope; required behavior cannot be verified. **Never guess through a conflict.**

---

## Completion

After the requested scoped task, report: what changed; files changed; verification performed; Git state; deployment/Production state when applicable; unresolved issues. Then **STOP** and wait for the next instruction.

---

**END OF AI PROJECT RULES v3.0**
