// Generated by Wrangler
// by running `wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts`

interface CloudflareEnv {
  DB: D1Database;
}

// Add D1Database to the global process.env
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB: D1Database;
    }
  }
}
