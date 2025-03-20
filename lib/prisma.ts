import { PrismaClient } from '@prisma/client';

// Define a type for the global object with prisma
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// For development, use the regular Prisma client
if (!global.prisma) {
  global.prisma = new PrismaClient();
}

const prisma = global.prisma;

export default prisma;

// In production, we'll need to use the D1 adapter
// This will be handled in the API routes or server components
// where we have access to the D1 database
