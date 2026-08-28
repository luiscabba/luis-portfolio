# luis-portfolio

Next.js (App Router) portfolio, deployed on Vercel.

## Routes

| Route               | File                          | Purpose                          |
| ------------------- | ----------------------------- | -------------------------------- |
| `/`                 | `app/page.tsx`                | Home / landing                    |
| `/tech-portfolio`   | `app/tech-portfolio/page.tsx` | Tech / AI / Data Analytics hub    |
| `/design-portfolio` | `app/design-portfolio/page.tsx` | UI / UX / Marketing / Design hub |
| `/[project-slug]`   | `app/[slug]/page.tsx`         | Universal project detail template |

All project content lives in `content/projects.ts`. Adding an entry there
creates its detail page and lists it in the matching hub — no new files needed.

`dynamicParams = false` means only slugs defined in that file resolve;
everything else 404s. Static route segments always win over the catch-all,
so `/tech-portfolio` can never be shadowed by a project slug. `RESERVED_SLUGS`
documents the names to avoid.

## Local dev

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # what Vercel runs
```

## Deploys

Pushing to `main` deploys to production. Every other branch and PR gets its
own preview URL.
