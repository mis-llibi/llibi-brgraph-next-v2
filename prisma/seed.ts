import { PrismaClient, Prisma } from "@prisma/client";
import { hashPassword } from "../src/lib/hash";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const adminEmail = "admin@example.com";
  const hashedPassword = await hashPassword("admin123");

  const adminData: Prisma.UserCreateInput[] = [
    {
      name: "Admin User",
      email: adminEmail,
      admin: true,
      canUpload: true,
      canCreate: true,
      canViewDeck: true,
      canUploadDeck: true,
      canAdd: true,
      canRemove: true,
      canEdit: true,
      superAdmin: true,
      password: hashedPassword,
    },
  ];

  const insurersData: Prisma.InsurersCreateInput[] = [
    {
      name: "Intellicare",
    },
  ];

  console.log("🚧 Creating Super Admin user...");

  for (const u of adminData) {
    await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: u,
    });
  }
  console.log("✅ Admin user created!");

  console.log("🚧 Creating Insurers...");
  for (const i of insurersData) {
    await prisma.insurers.upsert({
      where: { name: i.name },
      update: {},
      create: i,
    });
  }
  console.log("✅ Insurers created!");

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
