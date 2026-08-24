# HENTAI PARADISE TOKYO
# MASTER HANDOFF PACK v1.2

**DATE:** 2026-08-24  
**STATUS:** OPERATIONAL HANDOFF DOCUMENT  
**PURPOSE:** Allow another ChatGPT session, Claude, Cursor agent, AI system, or human developer to safely continue the HENTAI PARADISE TOKYO landing-page project.

---

## 1. READ THIS FIRST — AUTHORITY HIERARCHY

This Handoff Pack does **NOT** supersede the Master Freeze.

When sources conflict, use this order:

1. **Latest approved MASTER FREEZE** (`docs/MASTER_FREEZE.md`)
2. **Current production code / verified implementation**
3. **HANDOFF PACK** (this document)
4. **Latest COMPLETE WORK LOG** (if one exists outside the repo)
5. **Older Work Logs**
6. **Previous AI conversations / temporary notes**

**If this Handoff Pack conflicts with the latest Master Freeze: MASTER FREEZE WINS.**

Always verify against Git and live code before editing. Do not rely on memory or old Tokyo Confidential assumptions.

---

## 2. PROJECT IDENTITY

| Role | Name |
|---|---|
| **Service / website / customer-facing brand** | **HENTAI PARADISE TOKYO** |
| **Company / Operator** | **XOZE Inc.** |
| **Authoritative Master Freeze** | **V3.2** |

**Important:** XOZE Inc. legal / company-name / trademark availability has **NOT** yet been fully verified. That remains a separate future verification task. **Do not claim legal clearance.**

**Internal-only names (do not treat as customer-facing brand):**
- Repository folder: `tokyo-confidential`
- `package.json` name: `tokyo-confidential`
- GitHub remote: `blackswan369/tokyo-confidential`

---

## 3. CURRENT PRODUCTION STATUS

- Single-page Next.js landing page (LP) for **HENTAI PARADISE TOKYO**
- All major LP sections are implemented and frozen per Master Freeze V3.2
- Service branding (Header logos, Hero, metadata) uses **HENTAI PARADISE TOKYO**
- Footer company/operator identification uses **XOZE Inc.**
- Pricing section is **not** implemented (on hold)
- WhatsApp / LINE / Telegram contact destinations are **not** yet frozen
- MEET THIS COMPANION remains disabled on companion cards

---

## 4. CURRENT SAVE POINT

Verified from Git at handoff creation time:

| Item | Value |
|---|---|
| **Branch** | `main` |
| **Local HEAD** | `5671939b451f68856c0d51beaf29f43b2af6fbca` |
| **Short hash** | `5671939` |
| **Latest commit message** | `Update AI Project Rules to v3.0` |
| **origin/main** | `5671939b451f68856c0d51beaf29f43b2af6fbca` |
| **HEAD equals origin/main** | **Yes** |
| **Working tree** | Clean |
| **Remote** | `https://github.com/blackswan369/tokyo-confidential.git` |

### Vercel / Production context

- Standard workflow: push to `origin main` → Vercel Production deployment
- **Exact Production URL is not stored in this repository.** Verify in the Vercel dashboard or project-owner records before citing a live URL.
- After any push, confirm Vercel Production shows **Ready**, then verify the live site manually.

### External archival reference

- Desktop PDF export of Master Freeze V3.2 may exist separately: `MASTER FREEZE V3.2 - HENTAI PARADISE TOKYO.pdf` (outside repo; not authoritative over Git)

---

## 5. CURRENT INFORMATION ARCHITECTURE

Approved page order (matches `app/page.tsx`):

1. **Hero + Header** (Header overlays Hero)
2. **Why Choose Us**
3. **Featured Companions**
4. **How It Works**
5. **Personal Concierge**
6. **Reviews**
7. **FAQ**
8. **Footer**

### Section IDs / anchors

| Section | ID |
|---|---|
| Featured Companions | `#companions` |
| How It Works | `#how-it-works` |
| Personal Concierge | `#find-your-match` |
| Reviews | `#reviews` |
| FAQ | `#faq` |

Header navigation items link to: `#companions`, `#how-it-works`, `#reviews`, `#faq`.

---

## 6. HEADER CURRENT STATE

**File:** `components/Header.tsx`  
**Responsive breakpoint:** `xl` (1280px) — mobile layout below 1280px

### Mobile header bar (visible order)

1. Hamburger  
2. Call Now  
3. HENTAI PARADISE TOKYO logo (mobile PNG)

- Mobile header height: **58px**
- Logo asset: `/images/hentai-paradise-tokyo-logo-mobile.png`
- Alt / aria-label: **HENTAI PARADISE TOKYO**

### Desktop header bar

1. Logo (left)  
2. Navigation (center): Companions, How It Works, Reviews, FAQ  
3. Call Now + Find Your Match (right)

- Desktop header height: **96px** (`xl:h-[96px]`)
- Logo asset: `/images/hentai-paradise-tokyo-logo.png`
- Find Your Match → `#companions`

### Header scroll behavior

- Initial: transparent (mobile uses gradient overlay when not scrolled)
- After scroll: solid `#0B0B0B`
- Mobile scroll threshold: 40px; desktop: 0px

---

## 7. MOBILE MENU BEHAVIOR

- Hamburger toggles menu open/closed
- **Menu-item tap** closes menu and continues navigation
- **Find Your Match** in open menu closes menu and navigates to `#companions`
- **Outside tap close:** fixed transparent backdrop button below the 58px header (`fixed inset-0 top-[58px]`, `z-40`); menu panel stays above backdrop (`z-50`)
- No document-level click listener
- No body scroll lock
- Open menu contains nav links + full-width Find Your Match CTA

---

## 8. PHONE CONFIGURATION

| Context | Value |
|---|---|
| **Display number (approved)** | `03-6265-9181` |
| **tel URI** | `tel:0362659181` |

Used in:
- Header Call Now (mobile + desktop)
- Personal Concierge PHONE button

The number does not need to be visibly printed in the Header beyond the Call Now CTA label.

---

## 9. HERO APPROVED STATE

**File:** `components/Hero.tsx`

| Item | Value |
|---|---|
| **Desktop height** | `100vh` |
| **Mobile height** | `92vh` |
| **Headline** | Experience Tokyo Like Never Before |
| **Subheadline** | Discover the real Tokyo with trusted local companions |
| **Primary CTA** | Find Your Match → `#companions` |
| **Secondary CTA** | How It Works → `#how-it-works` |
| **Desktop background** | `/images/hero-background.png` |
| **Mobile background** | `/images/hero-background-mobile.png` |
| **Copy max width** | 560px |

Hero scene: Tokyo luxury rooftop at night with illuminated skyline / Tokyo Tower (per Master Freeze V3.x).

---

## 10. WHY CHOOSE US

**File:** `components/WhyChooseUs.tsx`

- Section title: **WHY CHOOSE US**
- **Desktop:** 5-column grid (all 5 features in one row)
- **Mobile:** single-column stack
- Five frozen features (order preserved):
  1. PROFESSIONALLY SCREENED
  2. IDENTITY VERIFIED
  3. TRANSPARENT PRICING *(trust copy only — not a pricing section)*
  4. NO HIDDEN FEES
  5. PROFESSIONALLY AND LEGALLY OPERATED

---

## 11. FEATURED COMPANIONS

**Files:** `components/FeaturedCompanions.tsx`, `components/FeaturedCompanionsMarquee.tsx`, `data/companions.ts`

- Section title: **FEATURED COMPANIONS**
- Section ID: `#companions`
- Cards show: portrait photo, name, age, availability badge, area badge
- **Short introduction text is NOT rendered** on cards
- **MEET THIS COMPANION** button: present but **disabled** (`aria-disabled`, `cursor-not-allowed`, reduced opacity)
- Companion data/images in `data/companions.ts` and `public/images/` (akari, haruka, mina, miyu, sayaka)

---

## 12. FEATURED COMPANIONS — DESKTOP BEHAVIOR

- Horizontal auto-scrolling showcase via `InteractiveCompanionMarquee`
- Continuous right-to-left auto-scroll at very slow premium pace (~150s loop)
- Seamless loop (duplicated slide set)
- Pause on hover/focus within showcase
- Manual horizontal drag supported
- `prefers-reduced-motion`: auto-scroll disabled; manual horizontal scroll only
- Approximately 3 cards visible in track (`w-[calc((100cqw-2rem)/3)]`)

---

## 13. FEATURED COMPANIONS — MOBILE BEHAVIOR

- **Separate mobile implementation** (`MobileCompanionMarquee`) — not the desktop auto-scroll path
- **Native horizontal scrolling** (`overflow-x-auto`)
- **Manual swipe only** — **no autoplay**
- **No transform-based auto-scrolling track** on mobile
- Approximately **2 cards** visible with partial next card at right edge (`w-[calc((100cqw-1rem)/2.15)]`)
- **Vertical page scroll must remain possible** while touching companion cards (no `touch-action: pan-x` restriction on mobile path)
- Full-bleed mobile showcase (`w-screen`, `md:hidden`)

---

## 14. HOW IT WORKS

**File:** `components/HowItWorks.tsx`  
**Section ID:** `#how-it-works`

Four approved steps:
1. **CONTACT US** — REACH OUT VIA WHATSAPP, LINE, OR PHONE.
2. **CHOOSE YOUR COMPANION**
3. **CONFIRM YOUR BOOKING**
4. **ENJOY YOUR EXPERIENCE**

---

## 15. PERSONAL CONCIERGE

**File:** `components/PersonalConcierge.tsx`  
**Section ID:** `#find-your-match`

Four contact methods in 2×2 desktop grid / single column mobile:

| Method | Current implementation |
|---|---|
| **WHATSAPP** | Button only — **no href** (destination not frozen) |
| **LINE** | Button only — **no href** (destination not frozen) |
| **PHONE** | `href="tel:0362659181"` |
| **TELEGRAM** | Button only — **no href** (destination not frozen) |

WhatsApp / LINE / Telegram destination behavior is **not yet frozen** in Master Freeze V3.2.

---

## 16. REVIEWS

**Files:** `components/Reviews.tsx`, `data/reviews.ts`  
**Section ID:** `#reviews`

- Horizontal carousel (`overflow-x-auto`, snap scrolling)
- **No autoplay**
- Manual swipe/scroll supported
- Prev/Next arrow buttons (disabled at ends)
- **Desktop:** ~3 cards visible (`md:w-[calc((100%-4rem)/3)]`)
- **Mobile:** 1 card per viewport width
- Wheel horizontal scroll handled at carousel boundaries

---

## 17. FAQ

**File:** `components/FAQ.tsx`  
**Section ID:** `#faq`

- Accordion-style expandable Q&A
- Frozen FAQ copy in component (7 items)
- Topics include: Japanese language, booking, payment, companion choice, cancellation, legal operation

---

## 18. FOOTER

**File:** `components/Footer.tsx`

| Item | Approved value |
|---|---|
| **Company / Operator label** | **XOZE Inc.** |
| **Copyright** | **© XOZE INC. ALL RIGHTS RESERVED.** |
| **Layout** | 4-column desktop grid; single-column mobile stack |

Footer company/operator text uses **XOZE Inc.**, not the service brand **HENTAI PARADISE TOKYO**.

Footer links:
- FAQ → `#faq`
- COMPANIONS → `#companions`
- CONTACT → `#find-your-match`

`TokyoTowerAccent` component used beside company label (internal component name; not the operator brand).

---

## 19. PAGE METADATA

**File:** `app/layout.tsx`

| Field | Value |
|---|---|
| **title** | HENTAI PARADISE TOKYO |
| **description** | Experience Tokyo Like Never Before. |

Customer-facing metadata must **not** use Tokyo Confidential or XOZE Inc. as the service brand.

---

## 20. PRICING

**Status: ON HOLD / NOT FROZEN**

- No pricing section on the LP
- No placeholder prices (60 / 90 / 120 minute, nomination fee, etc.)
- Trust copy **TRANSPARENT PRICING** and **NO HIDDEN FEES** in Why Choose Us **remains frozen** — this is not a pricing table

Do not add pricing without explicit future Master Freeze approval.

---

## 21. TECH STACK

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15.5.20 (App Router) |
| **React** | 19.1.0 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Fonts** | Cormorant Garamond (headings), Inter (body) via `next/font` |
| **Dev server** | `next dev --turbopack` |
| **Build** | `next build --turbopack` |
| **Lint** | ESLint (`eslint-config-next`) |
| **Deployment** | Vercel (Production from `main`) |

---

## 22. IMPORTANT PROJECT FILES

| Path | Role |
|---|---|
| `docs/MASTER_FREEZE.md` | **Authoritative design SSOT** (V3.2) |
| `docs/HANDOFF_PACK.md` | This operational handoff document |
| `docs/AI_PROJECT_RULES.md` | **AI Project Rules v3.0** — concise mandatory AI behavior guardrails; subordinate to Master Freeze and Handoff Pack |
| `app/page.tsx` | Page section order |
| `app/layout.tsx` | Metadata + fonts |
| `app/globals.css` | Global styles / Tailwind |
| `components/Header.tsx` | Header + mobile menu |
| `components/Hero.tsx` | Hero section |
| `components/WhyChooseUs.tsx` | Why Choose Us |
| `components/FeaturedCompanions.tsx` | Featured Companions cards |
| `components/FeaturedCompanionsMarquee.tsx` | Desktop auto-scroll + mobile native scroll |
| `components/HowItWorks.tsx` | How It Works |
| `components/PersonalConcierge.tsx` | Personal Concierge contact methods |
| `components/Reviews.tsx` | Reviews carousel |
| `components/FAQ.tsx` | FAQ accordion |
| `components/Footer.tsx` | Footer |
| `components/TokyoTowerAccent.tsx` | Footer accent graphic |
| `data/companions.ts` | Companion data |
| `data/reviews.ts` | Review data |
| `public/images/` | Logos, hero backgrounds, companion portraits |

---

## 23. MASTER FREEZE GOVERNANCE

- Master Freeze is the **highest design authority**
- Frozen specifications remain unchanged until **explicitly approved**
- Approved changes must:
  - Update only affected sections
  - Preserve unrelated frozen content
  - Increment version number
  - Record change in revision history
- Never reinterpret, redesign, or silently drift from frozen decisions
- V3.2 key change: Company / Operator → **XOZE Inc.**; service brand remains **HENTAI PARADISE TOKYO**

---

## 24. STANDARD LP WORKFLOW — MANDATORY

Every technical change must follow this sequence:

**STEP 1 — Cursor: INVESTIGATE ONLY. DO NOT MODIFY.**

**STEP 2 — Review investigation findings** against actual code and current state.

**STEP 3 — Approve exact intended change** (scope, files, strings, behavior).

**STEP 4 — Minimal implementation only** (smallest correct diff).

**STEP 5 — localhost verification** (`http://localhost:3000`).

**STEP 6 — Real iPhone verification** when mobile / responsive / touch behavior is affected.

**STEP 7 — Commit only after verification.**

**STEP 8 — Push to `origin main`.**

**STEP 9 — Verify Vercel Production READY.**

**STEP 10 — Verify actual Production website.**

Only then mark the task complete.

---

## 25. INSPECT / DEVTOOLS RULE

- Cursor static-code investigation normally comes **first**
- Use Browser Inspect / DevTools when runtime, computed-style, or actual-browser-state evidence is required
- **Do not guess CSS or layout values** — read code or measure in browser

---

## 26. NO-LOOP TROUBLESHOOTING RULE

For every troubleshooting attempt, track:

1. **Action** — what was tried  
2. **Result** — what happened  
3. **Current state** — what the system looks like now  

Do **not** repeat failed actions without a new reason or new evidence.

---

## 27. LOCAL DEVELOPMENT

| Item | Value |
|---|---|
| **Typical Mac URL** | `http://localhost:3000` |
| **Previously used LAN IP** | `192.168.10.134` *(may change)* |
| **Dev command** | `npm run dev -- --hostname 0.0.0.0` |

Use LAN IP + port 3000 for real iPhone testing on the same network when needed.

---

## 28. KNOWN NEXT.JS DEV ISSUE

**Internal Server Error / ENOENT** involving:

`.next/static/development/_buildManifest...`

Observed after running `npm run build` while the dev server was still running.

---

## 29. CONFIRMED DEV RECOVERY

```
Control + C
↓
rm -rf .next
↓
npm run dev -- --hostname 0.0.0.0
↓
Ready
↓
Reload
```

---

## 30. BUILD SAFETY RULE

**DO NOT run `npm run build` while the dev server is running.**

---

## 31. PORT 3000 RECOVERY

1. Stop any Cursor auto-respawn task first  
2. Inspect: `lsof -i :3000`  
3. Terminate occupying process **only when required**  
4. Do not blindly start additional dev servers  

---

## 32. GIT SAFETY

**Before commit:**
```
git status
```
- Only intended files should be staged/modified

**After push:**
- Local HEAD must equal `origin/main`
- Working tree should be clean

**Do not** force-push to `main` without explicit owner approval.

---

## 33. VERCEL DEPLOYMENT

```
Push
↓
Vercel Production Ready
↓
Production verification
```

Confirm deployment status in Vercel before declaring a release complete.

---

## 34. IMAGE / ASSET RULES

- Do **not** generate or replace images unless explicitly requested
- If a required asset is missing, **stop and report** — do not use unapproved placeholders
- Current logo assets: `hentai-paradise-tokyo-logo.png`, `hentai-paradise-tokyo-logo-mobile.png`

---

## 35. DO NOT TOUCH WITHOUT APPROVAL

Major frozen areas requiring explicit approval before change:

- Service brand (**HENTAI PARADISE TOKYO**)
- Company / Operator (**XOZE Inc.**)
- Hero (copy, imagery, layout, CTAs)
- Header structure and mobile menu behavior
- Phone number / tel links
- Section order
- Featured Companions behavior (desktop auto-scroll vs mobile native scroll)
- Reviews carousel behavior
- FAQ copy
- Pricing (currently excluded)
- Logo / brand assets
- Master Freeze version or frozen rules

---

## 36. OPEN / UNRESOLVED ITEMS

| Item | Status |
|---|---|
| **PRICING** | On hold — not frozen; no LP pricing section |
| **WHATSAPP destination** | Not frozen — button has no href |
| **LINE destination** | Not frozen — button has no href |
| **TELEGRAM destination** | Not frozen — button has no href |
| **MEET THIS COMPANION destination** | Disabled — future booking/profile system not approved |
| **XOZE Inc. legal / company-name / trademark verification** | Future task — do not claim clearance |
| **Future profile / booking system** | Not implemented |
| **Future CMS / admin possibility** | Not implemented |
| **Exact Vercel Production URL** | Not stored in repo — verify externally |
| **Complete Work Log file in repo** | Not present at handoff time |

Mark items as unresolved rather than inventing details.

---

## 37. PROJECT TERMINOLOGY & SHARED LANGUAGE

This section defines project-specific operational language. The goal is **behavior transfer**: a new agent or developer should know what to do, what not to assume, and when a task is actually complete.

---

### TIER 1 — CRITICAL

Misunderstanding these terms can cause production damage, frozen-spec violations, or false completion reports.

---

#### MASTER FREEZE

| | |
|---|---|
| **Plain meaning** | A locked specification document |
| **Project-specific meaning** | Highest approved **product/design specification** (`docs/MASTER_FREEZE.md`). Current authoritative version: **V3.2**. Governs brand, IA, section behavior, copy, footer rules, and other frozen decisions. |
| **Agent must** | Read relevant Master Freeze sections first. Stop and report conflicts. Do not silently override. |
| **Must not assume** | Handoff Pack, Complete Work Log, AI memory, old conversations, or implementation convenience can override it. |
| **Example** | Footer operator is **XOZE Inc.** per V3.2 — do not revert to Tokyo Confidential without a new approved Master Freeze revision. |

---

#### SSOT

| | |
|---|---|
| **Plain meaning** | Single Source of Truth — the one authoritative document for a domain |
| **Project-specific meaning** | **MASTER FREEZE is the SSOT for frozen product/design decisions.** Other sources serve different roles (see below). |
| **Agent must** | Treat Master Freeze as SSOT for *what should be true* for frozen specs. Verify *what is* in Git and current code separately. |
| **Must not assume** | Handoff Pack, Work Log, or AI memory are design SSOT. |
| **Clarification** | **MASTER FREEZE** = what SHOULD be true (frozen product/design). **Current code / verified implementation** = what IS implemented. **HANDOFF PACK** = HOW to work + current operational context. **COMPLETE WORK LOG** = historical record. If these conflict: **do not silently reconcile — report the conflict.** |
| **Example** | Mobile Featured Companions = native manual scroll (V3.0+) — Master Freeze wins over old conversation memory citing V2.4 auto-scroll. |

---

#### FROZEN

| | |
|---|---|
| **Plain meaning** | Prefer not to change |
| **Project-specific meaning** | **Hard lock.** No change without explicit project-owner approval. If the change affects a frozen specification, Master Freeze must be appropriately versioned/updated. |
| **Agent must** | Stop. Request approval. Update Master Freeze when the change is spec-level. |
| **Must not assume** | FROZEN means "prefer not to change," or that small fixes/cleanup/improvements are allowed. |
| **Example** | Hero copy, phone number, section order, service brand, company/operator, approved interaction behavior — all frozen until explicitly approved and documented. |

---

#### INVESTIGATE ONLY

| | |
|---|---|
| **Plain meaning** | Look into something |
| **Project-specific meaning** | **Inspect and report only.** No file modification. No automatic fix. No refactor. Wait for approval. Read-only commands and analysis are allowed. |
| **Agent must** | Read code, Git, and docs. Run read-only investigation. Produce findings. Stop before implementing. |
| **Must not assume** | Investigation implies permission to implement. |
| **Example** | "Investigate footer overflow" → report cause and recommended fix scope; do not patch until approved. |

---

#### DO NOT MODIFY

| | |
|---|---|
| **Plain meaning** | Leave files alone |
| **Project-specific meaning** | **Hard scope boundary** for the current task. No edits to named files or areas, even for cleanup. |
| **Agent must** | Touch only files explicitly approved for the task. |
| **Must not assume** | "Do not modify" applies only to the main change — unrelated files in scope are still off limits. |
| **Example** | During Handoff Pack work with "do not modify production code," do not fix Header.tsx even if a linter warning is visible. |

---

#### DO NOT TOUCH

| | |
|---|---|
| **Plain meaning** | Do not change |
| **Project-specific meaning** | **Hard scope boundary** (see also §35). Agent must not edit, refactor, clean up, rename, reformat, fix warnings, or make adjacent improvements inside excluded scope. |
| **Agent must** | Treat listed frozen areas and explicitly excluded files as completely off limits for the task. |
| **Must not assume** | Cleanup, lint fixes, or "while I'm here" improvements are harmless. |
| **Example** | If Header.tsx is DO NOT TOUCH during Footer work, an unused Header variable must remain untouched. |

---

#### PRODUCTION PASS

| | |
|---|---|
| **Plain meaning** | Deploy succeeded |
| **Project-specific meaning** | **Full applicable verification chain completed.** Does NOT mean Git push succeeded alone. |
| **Agent must** | Confirm each applicable step before marking complete: local verification → real iPhone when relevant → commit → push → Vercel Production Ready → actual live Production verification. |
| **Must not assume** | Push alone, or Vercel Ready alone without live site check, equals PRODUCTION PASS. |
| **Example** | XOZE Inc. footer update required Mac localhost + real iPhone pass before commit; push and live verification still required for full PRODUCTION PASS. |

---

#### APPROVED

| | |
|---|---|
| **Plain meaning** | Someone said yes |
| **Project-specific meaning** | **Explicit project-owner approval** for a scoped change, often after INVESTIGATE ONLY. Master Freeze revisions are marked APPROVED with version/date. |
| **Agent must** | Wait for explicit approval before implementing spec or production changes. |
| **Must not assume** | AI suggestion, investigation recommendation, or implementation convenience equals approval. |
| **Example** | Terminology audit recommendations are not approval to implement Handoff Pack v1.1 until the owner explicitly approves. |

---

#### AUTHORITY ORDER / MASTER FREEZE WINS

| | |
|---|---|
| **Plain meaning** | Which document wins in a conflict |
| **Project-specific meaning** | Fixed hierarchy (see §1): (1) Latest approved MASTER FREEZE → (2) Current production code / verified implementation → (3) HANDOFF PACK → (4) Latest COMPLETE WORK LOG → (5) Older Work Logs → (6) Previous AI conversations / temporary notes. **If Master Freeze conflicts with Handoff Pack: MASTER FREEZE WINS.** If Master Freeze conflicts with current implementation: **do not automatically change either** — report mismatch and wait for owner direction. |
| **Agent must** | On any contradiction: **STOP. REPORT. DO NOT GUESS. DO NOT AUTO-RESOLVE.** |
| **Must not assume** | Newest chat message, AI memory, or stale docs override Master Freeze. |
| **Example** | Handoff Pack v1.0 listed HEAD `cc8d84b`; if Git has moved, verify current HEAD — but Master Freeze V3.2 still governs frozen design. |

---

### TIER 2 — WORKFLOW

Important for reproducing the project's working method.

---

#### MINIMAL FIX

| | |
|---|---|
| **Plain meaning** | Small change |
| **Project-specific meaning** | Smallest correct diff for the **approved scope only**. No unrelated refactor. No adjacent improvements. No "while I'm here" changes. |
| **Agent must** | Change only what was approved. Match existing conventions. |
| **Must not assume** | Nearby code should be improved in the same pass. |
| **Example** | Footer operator rename = two text strings only in `Footer.tsx`. |

---

#### CURRENT STATE / ACTUAL STATE

| | |
|---|---|
| **Plain meaning** | How things are now |
| **Project-specific meaning** | Verified **NOW** using Git HEAD, `git status`, current files, current browser/runtime behavior, and current device behavior where relevant. Takes precedence over remembered assumptions. |
| **Agent must** | Re-verify at task start. Cite current HEAD when reporting save points. |
| **Must not assume** | A HEAD hash written in an older Handoff Pack is still current. |
| **Example** | §4 documents a save point — always run `git rev-parse HEAD` before citing it. |

---

#### NO-LOOP

| | |
|---|---|
| **Plain meaning** | Don't repeat failed attempts |
| **Project-specific meaning** | Before the next troubleshooting step, track: **Action → Result → Current State.** Do not repeat a failed action without new evidence, changed hypothesis, or new reason. |
| **Agent must** | Document what was tried and what changed before retrying. |
| **Must not assume** | Running the same fix again will work without new diagnosis. |
| **Example** | If mobile marquee RAF approach failed, do not retry identically — inspect runtime evidence first (see §25). |

---

#### REAL IPHONE TEST

| | |
|---|---|
| **Plain meaning** | Test on a phone |
| **Project-specific meaning** | **Actual iPhone Safari / real-device verification.** Desktop responsive emulation is NOT automatically equivalent. |
| **Agent must** | Use when change affects mobile, responsive layout, touch, swipe, mobile navigation, phone behavior, or viewport behavior. Use LAN dev server (`npm run dev -- --hostname 0.0.0.0`; IP may change). |
| **Must not assume** | Chrome DevTools mobile emulation substitutes for real iPhone. |
| **Example** | Footer text change required real iPhone localhost verification before commit. |

---

#### LOCALHOST CHECK

| | |
|---|---|
| **Plain meaning** | Verify on local dev server |
| **Project-specific meaning** | Manual verification of affected behavior at `http://localhost:3000` before commit. |
| **Agent must** | Confirm affected sections work as expected locally. |
| **Must not assume** | Code review alone satisfies this step. |
| **Example** | After Footer change, scroll full page on Mac localhost before commit. |

---

#### VISUAL CHECK

| | |
|---|---|
| **Plain meaning** | Look at the UI |
| **Project-specific meaning** | Manual inspection of affected appearance/layout on localhost (or device). |
| **Agent must** | Visually confirm UI when the task is visual or layout-related. |
| **Must not assume** | Lint or build success replaces visual verification for UI tasks. |
| **Example** | Confirm Footer company label and copyright render without overflow. |

---

#### VERCEL READY

| | |
|---|---|
| **Plain meaning** | Deployment finished |
| **Project-specific meaning** | Expected **Production deployment has successfully reached Ready** in Vercel. |
| **Agent must** | Confirm Vercel Production status after push. |
| **Must not assume** | VERCEL READY alone completes PRODUCTION PASS without live site check. |
| **Example** | After push to `origin main`, confirm Production deployment shows Ready in Vercel dashboard. |

---

#### PRODUCTION CHECK

| | |
|---|---|
| **Plain meaning** | Check the live site |
| **Project-specific meaning** | **Manually verify the actual live Production website** (URL may require Vercel dashboard or owner records — not stored in repo). |
| **Agent must** | Open live site and confirm affected behavior after VERCEL READY. |
| **Must not assume** | Successful push or VERCEL READY means live site is verified. |
| **Example** | Confirm Footer shows XOZE Inc. on the live Production URL. |

---

#### GIT CLEAN

| | |
|---|---|
| **Plain meaning** | No stray changes |
| **Project-specific meaning** | **Before commit:** only intended files modified/staged. **After push:** working tree clean; local HEAD equals `origin/main`. |
| **Agent must** | Run `git status` pre-commit and post-push. |
| **Must not assume** | Unrelated modified files can be included "since we're committing anyway." |
| **Example** | Handoff Pack commit should include only `docs/HANDOFF_PACK.md`. |

---

#### RECOVERY POINT

| | |
|---|---|
| **Plain meaning** | Safe rollback state |
| **Project-specific meaning** | Known verified Git/project state safe to return to (specific commit on `main`, verified and synced). |
| **Agent must** | Record commit hash after verified saves. Use Git restore/revert to known good commits when directed. |
| **Must not assume** | Any old commit is safe without verification context. |
| **Example** | `8a564f6` after Handoff Pack v1.0 push — verify HEAD before treating as current recovery point. |

---

#### CURRENT SAVE POINT

| | |
|---|---|
| **Plain meaning** | Latest checkpoint |
| **Project-specific meaning** | Latest verified checkpoint: commit hash, branch, sync with `origin/main`, working tree state, and relevant production verification when applicable. Documented in §4. |
| **Agent must** | Re-verify Git state; do not copy stale hashes from old docs without checking. |
| **Must not assume** | CURRENT SAVE POINT is the same as DEV RECOVERY (`.next` restart). |
| **Example** | §4 CURRENT SAVE POINT vs §29 `.next` deletion — different recovery types. |

---

#### COMPLETE WORK LOG

| | |
|---|---|
| **Plain meaning** | Project diary |
| **Project-specific meaning** | Historical record of completed work. Useful for context and timeline. **NOT design SSOT.** Not present in repo at v1.0 handoff time. |
| **Agent must** | Use for background only. Verify against Master Freeze + Git if conflict. |
| **Must not assume** | Work Log overrides Master Freeze. |
| **Example** | If Work Log mentions Tokyo Confidential as operator, Master Freeze V3.2 (XOZE Inc.) wins. |

---

#### HANDOFF PACK

| | |
|---|---|
| **Plain meaning** | Handover document |
| **Project-specific meaning** | **Operational continuity guide** (this document). Explains HOW to work, WHERE the project is, recovery procedures, workflow, terminology, and unresolved items. **Does NOT supersede Master Freeze.** |
| **Agent must** | Read after Master Freeze. Follow STANDARD LP WORKFLOW. |
| **Must not assume** | Handoff Pack overrides frozen product/design specs. |
| **Example** | v1.1 expands terminology only — Master Freeze remains V3.2. |

---

#### STANDARD LP WORKFLOW

| | |
|---|---|
| **Plain meaning** | Required process for LP changes |
| **Project-specific meaning** | Approved operating sequence (full detail in §24): **INVESTIGATE ONLY → Review findings → Approve exact change → Minimal implementation → localhost verification → Real iPhone when relevant → Commit → Push → Vercel Ready → Production verification.** Only then mark task complete. |
| **Agent must** | Follow Steps 1–10 in §24 for technical changes. |
| **Must not assume** | Steps can be skipped when "the change is small." |
| **Example** | Mobile menu behavior change requires Step 6 real iPhone verification. |

---

#### BUILD SAFETY RULE

| | |
|---|---|
| **Plain meaning** | Be careful when building |
| **Project-specific meaning** | **Do NOT run `npm run build` while the active development server is running.** Known reason: potential `.next` development artifact conflict / Internal Server Error pattern (see §28). |
| **Agent must** | Stop dev server before production build, or avoid build during active dev unless explicitly instructed. |
| **Must not assume** | Running build alongside dev is safe. |
| **Example** | ENOENT on `_buildManifest` after build-with-dev-running → use §29 DEV RECOVERY. |

---

### TIER 3 — PRODUCT LANGUAGE

Preserves approved brand and LP vocabulary.

---

#### HENTAI PARADISE TOKYO / SERVICE BRAND

| | |
|---|---|
| **Plain meaning** | The customer-facing website/service name |
| **Project-specific meaning** | **Canonical service / website / customer-facing brand.** |
| **Agent must** | Use in Header logos, page title, metadata, Hero/service identity, and customer-facing service contexts. |
| **Must not assume** | XOZE Inc., Tokyo Confidential, or repo/internal names (`tokyo-confidential`) are interchangeable as service brand. |
| **Example** | `app/layout.tsx` title: HENTAI PARADISE TOKYO. |

---

#### XOZE Inc. / COMPANY / OPERATOR

| | |
|---|---|
| **Plain meaning** | The operating company name |
| **Project-specific meaning** | **Current Company / Operator** (Master Freeze V3.2). Approved in Footer company label and copyright: © XOZE INC. ALL RIGHTS RESERVED. |
| **Agent must** | Use in company/operator contexts only. |
| **Must not assume** | Legal/company-name/trademark verification is complete — do not claim legal clearance. |
| **Must not use for** | Header logo, page title, Hero identity (those use service brand). |
| **Example** | Footer displays **XOZE Inc.** — not HENTAI PARADISE TOKYO. |

---

#### COMPANION

| | |
|---|---|
| **Plain meaning** | A person accompanying someone |
| **Project-specific meaning** | Approved product term. **Featured Companion** cards in `#companions` section represent companions. |
| **Agent must** | Use COMPANION in product/LP context consistently. |
| **Must not assume** | MEET THIS COMPANION is active — it remains **disabled** until a future destination is approved. |
| **Example** | Disabled button on companion cards; do not wire booking URL without approval. |

---

#### PERSONAL CONCIERGE

| | |
|---|---|
| **Plain meaning** | Dedicated support contact |
| **Project-specific meaning** | Approved contact/support section. Current section ID: **`#find-your-match`**. Methods: WhatsApp, LINE, PHONE, Telegram. |
| **Agent must** | Distinguish from FIND YOUR MATCH CTA (navigates to `#companions`). |
| **Must not assume** | All four methods have frozen destinations — **only PHONE** has frozen `tel:` behavior. |
| **Example** | WhatsApp/LINE/Telegram are buttons without href until destinations are frozen. |

---

#### FIND YOUR MATCH

| | |
|---|---|
| **Plain meaning** | Search/match CTA |
| **Project-specific meaning** | **Primary CTA label.** Current intended navigation: **`#companions`**. |
| **Agent must** | Use label consistently in Header and Hero CTAs. |
| **Must not assume** | FIND YOUR MATCH links to `#find-your-match` — that is the Personal Concierge **section ID**, not the CTA destination. |
| **Example** | Header Find Your Match → `#companions`; Personal Concierge section → `#find-your-match`. |

---

#### ON HOLD

| | |
|---|---|
| **Plain meaning** | Waiting for later |
| **Project-specific meaning** | Deliberately excluded pending future approval. No placeholder implementation. |
| **Agent must** | Do not implement ON HOLD items without explicit approval and Master Freeze update. |
| **Must not assume** | ON HOLD means "use temporary placeholders." |
| **Example** | **PRICING** — no pricing section, no placeholder prices. |

---

#### NOT FROZEN

| | |
|---|---|
| **Plain meaning** | Not yet locked |
| **Project-specific meaning** | Something may exist in UI but its final behavior/destination is not yet locked in Master Freeze. |
| **Agent must** | Mark as unresolved. Do not invent behavior or URLs. |
| **Must not assume** | UI presence implies approved destination. |
| **Example** | WhatsApp / LINE / Telegram buttons exist but destinations are NOT FROZEN. |

---

### DEPRECATED / INCORRECT SUBSTITUTIONS

| Incorrect | Correct |
|---|---|
| Tokyo Confidential as **service brand** | **HENTAI PARADISE TOKYO** |
| Tokyo Confidential as **current Company / Operator** | **XOZE Inc.** |
| **XOZE Inc.** in Header / page title | **HENTAI PARADISE TOKYO** |
| **HENTAI PARADISE TOKYO** in company copyright | **XOZE INC.** |
| "Transparent Pricing" interpreted as permission to create prices | **Incorrect** — trust copy only; Pricing remains **ON HOLD** |

---

### AI PROJECT RULES v3.0 — CURRENT

`docs/AI_PROJECT_RULES.md` is the **current mandatory AI behavior guardrail document**.

It is aligned with:

- Master Freeze V3.2
- Handoff Pack v1.2 operational workflow

It is **subordinate to both**.

If AI Project Rules conflicts with Master Freeze or Handoff Pack:

**STOP. REPORT THE CONFLICT. DO NOT GUESS. DO NOT AUTO-RESOLVE.**

---

## 38. NEW AGENT / DEVELOPER STARTUP CHECKLIST

- [ ] Read `docs/MASTER_FREEZE.md` **V3.2** in full (or relevant sections for your task)
- [ ] Read this `docs/HANDOFF_PACK.md`
- [ ] Read `docs/AI_PROJECT_RULES.md` — **AI Project Rules v3.0**
- [ ] Read **Section 37 — PROJECT TERMINOLOGY & SHARED LANGUAGE** before editing
- [ ] Run `git status` and confirm clean/sync state
- [ ] Note current HEAD: `5671939` (verify — do not assume if later commits exist)
- [ ] Confirm service brand vs company/operator distinction
- [ ] Inspect affected components before editing
- [ ] If task is technical: start with **INVESTIGATE ONLY**
- [ ] Identify conflicts with Master Freeze before implementing
- [ ] Use mandatory LP workflow (Steps 1–10)
- [ ] Do not commit until localhost + iPhone verification (when applicable)
- [ ] Do not run `npm run build` while dev server is running
- [ ] After push: verify Vercel Production + live site

---

## 39. COPY-READY NEW AGENT FIRST PROMPT

Copy everything inside the block below into a new ChatGPT / Claude / Cursor session:

```
You are continuing the HENTAI PARADISE TOKYO landing-page project.

READ ORDER (mandatory before any edit):
1. docs/MASTER_FREEZE.md — latest approved version (currently V3.2). This is the highest authority.
2. docs/HANDOFF_PACK.md — operational handoff (currently v1.2; secondary to Master Freeze).
3. docs/AI_PROJECT_RULES.md — AI Project Rules v3.0 (mandatory AI behavior guardrails; subordinate to Master Freeze and Handoff Pack).
4. Git state and current production code — verify HEAD, branch, and working tree before changing anything.

PROJECT IDENTITY:
- Service / customer-facing brand: HENTAI PARADISE TOKYO
- Company / Operator: XOZE Inc.
- Do NOT claim XOZE Inc. legal/trademark clearance has been completed.

YOUR FIRST TASK (before editing):
- Summarize current project state: Git HEAD, branch, sync with origin/main, section order, and any files relevant to my request.
- Compare my request against Master Freeze V3.2.
- If anything conflicts with Master Freeze, STOP and report the conflict. Master Freeze wins.

WORKFLOW (mandatory for technical changes):
STEP 1: INVESTIGATE ONLY — do not modify code yet.
STEP 2: Review findings against actual code.
STEP 3: Wait for / confirm exact approved change scope.
STEP 4: Minimal implementation only.
STEP 5: localhost verification.
STEP 6: Real iPhone verification when mobile/responsive/touch is affected.
STEP 7: Commit only after verification.
STEP 8: Push to origin main.
STEP 9: Verify Vercel Production READY.
STEP 10: Verify live Production site.

RULES:
- Never modify frozen decisions (brand, header, hero, phone, section order, companion behavior, reviews, FAQ, pricing status, footer operator identity) without explicit approval.
- Do not guess CSS/layout — inspect code or browser DevTools.
- Do not run npm run build while dev server is running.
- Do not invent unresolved details (WhatsApp/LINE/Telegram URLs, pricing, booking destinations, legal clearance).
- Smallest correct diff only; no drive-by refactors.

Now wait for my specific task. Begin with INVESTIGATE ONLY unless I explicitly approve implementation.
```

---

---

### REVISION HISTORY

**v1.2 — 2026-08-24** — Synchronized Handoff Pack with AI Project Rules v3.0. Removed obsolete AI_PROJECT_RULES stale warning. Documented AI Project Rules v3.0 as current subordinate AI guardrails. Updated current Git save point to 5671939. Updated new-agent/read-order references. No product/design specification changed. Master Freeze remains V3.2. Production code unchanged.

**v1.1 — 2026-08-24** — Expanded project terminology and shared operational language for cross-agent/developer continuity. No product/design specification changed. Master Freeze remains V3.2.

**v1.0 — 2026-08-24** — Initial operational handoff pack.

---

**END OF MASTER HANDOFF PACK v1.2**
