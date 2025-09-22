import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    transactionOptions: {
      timeout: 15000, // 15 seconds - increased from default 5 seconds
      maxWait: 20000, // 20 seconds wait time
      isolationLevel: "ReadCommitted"
    }
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
