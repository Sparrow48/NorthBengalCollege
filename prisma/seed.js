import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: '$2a$12$JgO/rYiIcRwpgWF.tEu.KOyAZNWc0eNtrSlYXhdgp6o08avQ5w4PG',
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
