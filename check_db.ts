import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const steps = await prisma.journeyStep.findMany()
  console.log(JSON.stringify(steps, null, 2))
}

main().catch(console.error).finally(() => prisma.$disconnect())
