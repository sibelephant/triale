# Integration Plan

## Project
- Type: Static + API presentation site; no backend service or database planned.
- Frontend: repository root (`/home/sibelephant/triale`)
- Build: `npm run build`
- Dev: `npm run dev`
- Runtime: Vite on the printed localhost port
- API seam: `src/api/index.ts`; replace `mockClient` with a live client only if API-backed behavior is added.
- Mock files: no mock datasets currently exist; retain `src/api/index.ts` as the single client seam.

## Routes
- `GET /` - Studio Home
- `GET /services` - Services
- `GET /work` - Selected Work
- `GET /about` - About
- `GET /contact` - Contact and client-side intake form

## Data and services
- Database: none required; create no migrations and no seed data.
- Azure services: none; static frontend hosting is sufficient.
- Shared types: `src/content/` and `src/api/index.ts`.
- Authentication: none.

## Integration results

- Migrations: not applicable; this is a static frontend with no relational database or backend service.
- Backend smoke test: not applicable; no backend endpoints are defined.
 - Frontend data: all page content is authored in `src/content/`; no API client or mock data layer exists in `src/`.
 - End-to-end verification: the Vite frontend runs independently and all planned routes were verified over HTTP.
- Validation: `npm test` and `npm run build` pass.