import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import HomePageClient from './HomePageClient';

// Ensure the connection URL is passed reliably.
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/baltas_dvaras?schema=public";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const dynamic = 'force-dynamic';

export default async function Page() {
  // Fetch site settings
  const siteSettingsArray = await prisma.siteSetting.findMany();
  const settings: Record<string, string> = {};
  for (const setting of siteSettingsArray) {
    settings[setting.key] = setting.value;
  }

  // Fetch journey steps
  const journeySteps = await prisma.journeyStep.findMany({
    orderBy: { order: 'asc' }
  });

  // Fetch pricing plans
  const pricingPlans = await prisma.pricingPlan.findMany({
    orderBy: { order: 'asc' }
  });

  // Fetch navigation items (root items first)
  const navItemsRaw = await prisma.navItem.findMany({
    where: { parentId: null },
    include: {
      children: {
        orderBy: { label: 'asc' },
        include: {
          children: {
            orderBy: { label: 'asc' }
          }
        }
      }
    },
    orderBy: { order: 'asc' }
  });

  return (
    <HomePageClient 
      settings={settings}
      journeySteps={journeySteps}
      pricingPlans={pricingPlans}
      navItems={navItemsRaw}
    />
  );
}
