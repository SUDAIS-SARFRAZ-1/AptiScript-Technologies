# React Query & Zustand — State Management Standards

Version 3.0 — September 22, 2026 — Status: Active.

## What changed in 3.0

Replaces the previous version, which was written for an e-commerce platform with a cart, orders, auth tokens, and 3D scenes. None of that exists on this project. This version covers the much smaller footprint an informational/lead-gen marketing site actually needs.

## Purpose

This site (`prd.md`) is mostly static content: Home, Services, Tech Stack, Portfolio, About, Process. It has exactly one meaningfully "stateful" interaction — the Contact form (FR-1) — plus a handful of small UI toggles. This document says what (little) state management is needed and, just as importantly, where **not** to add it.

## 1. Default: no state management library at all

Most pages on this site should be built with zero client state. Content is passed in as props/static data and rendered. If you find yourself reaching for `useState`, `useEffect`, React Query, or Zustand on a page that just displays content (Services, Tech Stack, About, Process, a Portfolio listing), stop and ask whether the page actually needs it — it usually doesn't.

## 2. React Query — for the one real async flow: the contact form

The contact form submission is the only place on the site with a genuine request/loading/error/success lifecycle worth managing with React Query.

```tsx
// features/contact/useSubmitContactForm.ts
import { useMutation } from '@tanstack/react-query';
import { contactFormSchema, type ContactFormInput } from './schema';

async function submitContactForm(data: ContactFormInput) {
  const res = await fetch('/contact/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.error?.message ?? 'Something went wrong. Please try again.');
  }
  return res.json();
}

export function useSubmitContactForm() {
  return useMutation({ mutationFn: submitContactForm });
}
```

```tsx
// app/contact/ContactForm.tsx
'use client';
import { useSubmitContactForm } from '@/features/contact/useSubmitContactForm';

export function ContactForm() {
  const { mutate, isPending, isSuccess, error } = useSubmitContactForm();
  // render fields, call mutate(formValues) on submit,
  // show isPending as a disabled/loading button state,
  // show isSuccess as a thank-you message,
  // show error.message if the submission failed.
}
```

- Validate with the same Zod schema on the client (for instant feedback) and the server (as the actual source of truth — see `rules.md` §5–6).
- Don't add `staleTime`/caching considerations here — a mutation like this has nothing to cache; it's a one-shot action.
- If a booking widget (Calendly) or newsletter signup is added later (`prd.md` §6.7, §14), the same pattern applies: wrap the async action in a `useMutation`, don't hand-roll `useState` + manual fetch + manual loading flags.

### Do you even need a `QueryClientProvider`?

Only if React Query is used anywhere on the site. If the contact form is the only consumer, a single top-level provider in `app/providers.tsx` wrapping the whole app is enough — there's no per-request server prefetching or hydration concern here, because this site has no personalized or frequently-changing server data to prefetch.

## 3. Zustand — for small, cross-component UI toggles only

Reach for Zustand (or, in most cases, just `useState`/`useContext`) only when a piece of UI state is genuinely shared across components that don't have a parent-child relationship. Realistic candidates on this site:

- Mobile navigation menu open/closed (`Header` toggles it, an overlay component reads it).
- Whether the persistent WhatsApp CTA is currently visible (e.g. hidden while the footer contact form is in view).

```ts
// stores/mobileNavStore.ts
import { create } from 'zustand';

type MobileNavState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export const useMobileNavStore = create<MobileNavState>()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
}));
```

**Before adding a new store, ask:** could this just be `useState` in the nearest common parent, passed down as props? On a site this size, that's usually sufficient and simpler. Only promote to Zustand if prop-drilling genuinely becomes awkward (three or more levels deep, or needed in unrelated parts of the tree).

## 4. What this project does not have (so don't build for it)

- No auth tokens, sessions, or logged-in state — there are no user accounts in v1 (`prd.md` §5.2).
- No cart, orders, or any server-owned entity that changes over time and needs cache invalidation.
- No personalization — every visitor sees the same content, so there's no per-user data-fetching pattern to design around.
- No 3D/animation frame state.

If any of these get added in a future version, that's a new state-management design conversation, not an extension of the patterns here.

## 5. Quick Checklist for New Code

- Does this page need any client state at all? If it's pure content, the answer is no.
- Is this an async action with a request/loading/error/success lifecycle? Use React Query's `useMutation`, not hand-rolled `useState` + `fetch`.
- Is this UI state shared across unrelated components? Only then does it warrant a Zustand store — otherwise keep it local.
- Nothing sensitive is being stored anywhere (there's currently nothing sensitive to store — no tokens, no PII persisted client-side beyond what's actively in the contact form before submission).
