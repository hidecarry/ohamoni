import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

/**
 * Creates a Prisma client with D1 adapter for Cloudflare Workers environment
 * @param d1Database The D1 database instance from Cloudflare Workers
 * @returns A Prisma client instance with D1 adapter
 */
export function createPrismaClientWithD1(d1Database: D1Database): PrismaClient {
  // Create a new Prisma client
  const prisma = new PrismaClient();

  // Create a D1 adapter
  const d1Adapter = new PrismaD1(d1Database);

  // Attach the adapter to the Prisma client
  // Note: This is a workaround as TypeScript doesn't recognize the adapter property
  (prisma as any)._engineConfig = {
    ...((prisma as any)._engineConfig || {}),
    adapter: d1Adapter,
  };

  return prisma;
}
