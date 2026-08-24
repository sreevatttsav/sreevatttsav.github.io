# Deferred items — revisit on next site update

Pinned 2026-08-24 after the security review.

- [ ] **Upgrade Astro 5 → 7** (breaking major upgrade; clears the 3 npm audit
      findings — esbuild dev-server advisory + sharp/libvips CVEs. Both are
      build-time only, no runtime exposure on the static site.)
      How: `npm audit fix --force` installs astro@7 — migrate content config,
      run a full build, and visually verify all sheets before deploying.
- [ ] **Enable branch protection on `main`** (blocks force-pushes; free for
      public repos). GitHub → Settings → Branches → Add branch rule, or via
      `gh api repos/sreevatttsav/sreevatttsav.github.io/branches/main/protection`.

Done 2026-08-24: CSP + referrer policy, SHA-pinned workflow actions, Dependabot
(npm + actions, weekly).
