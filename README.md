# Midnight Academy

A step-by-step learning platform for building privacy-preserving apps on [Midnight](https://midnight.network) — the ZK/selective-disclosure blockchain built on the Polkadot SDK, using the Compact contract language.

**Live site:** [midnight-academy-nine.vercel.app](https://midnight-academy-nine.vercel.app)

## Why this exists

Midnight already has excellent official docs (docs.midnight.network) and a certification-focused Academy. This project isn't trying to replace them. It exists to cover what official docs usually don't: real errors, dead ends, and the exact fixes — content written *while* actually building the thing it teaches, not after the fact with the mess edited out.

Module 04, for example, documents a real Windows setup that hit BIOS-level virtualization issues, a WSL1/WSL2 mismatch, and antivirus-corrupted installs — problems a from-memory tutorial would never surface, but that real learners on real machines actually hit.

## What's live

- **Home** — hero, intro to what Midnight is
- **Curriculum** — 5 complete modules:
  1. What is Midnight?
  2. Blockchain Basics
  3. Development Environment
  4. Your First Project (real Compact contract, compiled and deployed to a local devnet)
  5. Understanding the Folder Structure
- **Videos** — embedded official Midnight content
- **About** — project philosophy and positioning

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Deployed on Vercel, auto-deploying from `main`

## Local development

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit `http://localhost:3000`.

## Roadmap

- [x] Fundamentals (Modules 01–05)
- [ ] Mini-projects (Counter, Todo, Voting, Messaging, Identity)
- [ ] Intermediate architecture topics
- [ ] Advanced tutorials
- [ ] Community contribution flow

## Contributing

Not open yet — will open once the mini-project tier is live and the content approach has been validated further. Found an error already? Open an issue anyway.

## License

Content: CC BY-SA 4.0. Code: MIT.
