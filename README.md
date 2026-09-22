# Nova

Next.js UI for Nova (forked from [Mango V4 UI](https://github.com/blockworks-foundation/mango-v4-ui)). Trading still uses the Mango V4 program and data APIs.

## Quickstart

```bash
git clone git@github.com:tushar-tomar11/Nova.git
cd Nova
corepack yarn setup
```

On Windows, if `postinstall` tar fails, extract vendor charts:

```powershell
tar -xzf vendor\charting_library.tgz -C public
tar -xzf vendor\datafeeds.tgz -C public
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_MAINNET_RPC` to your Helius / QuickNode / Triton URL. Do not commit `.env.local`.

```bash
corepack yarn next dev
```

Open http://localhost:3000

## Deploy (Vercel)

- Node.js 20.x
- Build: `yarn ci && yarn build` (see `vercel.json`)
- Set `NEXT_PUBLIC_MAINNET_RPC` in Project Settings → Environment Variables
