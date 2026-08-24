# HENTAI PARADISE TOKYO
# MASTER HANDOFF PACK v1.0

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
| **Local HEAD** | `cc8d84ba0504f2b272287d777f4676a11d6cd743` |
| **Short hash** | `cc8d84b` |
| **Latest commit message** | `Update company operator to XOZE Inc.` |
| **origin/main** | `cc8d84ba0504f2b272287d777f4676a11d6cd743` |
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
| `docs/AI_PROJECT_RULES.md` | AI implementation rules (secondary to Master Freeze) |
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

## 37. TERMINOLOGY

| Term | Meaning |
|---|---|
| **MASTER FREEZE** | Authoritative frozen specification document |
| **FROZEN** | Approved and locked until explicit revision |
| **HANDOFF PACK** | This operational continuity document |
| **INVESTIGATE ONLY** | Read/search/diagnose without code changes |
| **MINIMAL FIX** | Smallest correct diff for the approved scope |
| **COMPANION** | Featured companion profile on the LP |
| **PERSONAL CONCIERGE** | Contact / concierge section (`#find-your-match`) |
| **FIND YOUR MATCH** | Primary CTA label → companions discovery flow |
| **SERVICE BRAND** | HENTAI PARADISE TOKYO (customer-facing) |
| **COMPANY / OPERATOR** | XOZE Inc. (legal/operator contexts, e.g. Footer) |
| **PRODUCTION PASS** | Verified on live Production after Vercel Ready |

---

## 38. NEW AGENT / DEVELOPER STARTUP CHECKLIST

- [ ] Read `docs/MASTER_FREEZE.md` **V3.2** in full (or relevant sections for your task)
- [ ] Read this `docs/HANDOFF_PACK.md`
- [ ] Run `git status` and confirm clean/sync state
- [ ] Note current HEAD: `cc8d84b` (verify — do not assume if later commits exist)
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
2. docs/HANDOFF_PACK.md — operational handoff (secondary to Master Freeze).
3. Git state and current production code — verify HEAD, branch, and working tree before changing anything.

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

**END OF MASTER HANDOFF PACK v1.0**
