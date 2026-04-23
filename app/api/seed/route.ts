import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

// Initialize Prisma Client with Neon connection string
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/baltas_dvaras?schema=public";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function GET() {
  try {
    console.log('Start seeding from API route...');

    // 1. Site Settings (Hero Text, Contact Info, etc.)
    const settings = [
      { key: 'hero_title_1', value: 'Čia gali būti kuo esi.' },
      { key: 'hero_subtitle_1', value: 'Tai atsivėrimas. Tiesa.' },
      { key: 'hero_title_2', value: 'Čia dėmesys tau.' },
      { key: 'hero_subtitle_2', value: 'Tai esmė. Meilė.' },
      { key: 'hero_title_3', value: 'Čia susitinka dvasia ir materija.' },
      { key: 'hero_subtitle_3', value: 'Tai darna. Evoliucija.' },
      { key: 'hero_badge', value: 'Sielos spalvų transformacija' },
      { key: 'about_title', value: 'Apie mane' },
      { key: 'about_desc', value: `Remiuosi dviem esminiais poliais: kritiniu mąstymu ir praktiniu sprendimų pritaikymu.
Mano manymu, kiekviena problema, yra tik dar neišspręstas uždavinys, reikalaujantis gilaus
situacijos vertinimo ir priežastinio ryšio aptikimo, o sprendimas, yra išmintinga išvada ir
vykęs planas, pritaikomas būtent jūsų realybei.
Teorija be praktikos, tai sąnaudos be grąžos ir nerealizuotas potencialas. Dirbdami
kartu, sutelksime dėmesį į tai, kas iš tiesų generuoja progresą. Vertinu tiesų ir nuoširdų
bendravimą. Leiskite padėti jums pamatyti tai, kas slepiasi šešėlyje ir paversti tai jūsų
sėkme.
Išsilavinimas – socialinio darbo medicinoje bakalauras, psichosocialinis konsultavimas VDU.` },
      { key: 'journey_title', value: 'Pokyčio kelionė' },
      { key: 'journey_subtitle', value: 'Šešios pakopos į tavo naująjį Aš' },
      { key: 'contact_title', value: 'Susisiekti' },
      { key: 'contact_subtitle', value: 'Atsakome per 24 valandas' },
    ];

    for (const setting of settings) {
      await prisma.siteSetting.upsert({
        where: { key: setting.key },
        update: { value: setting.value },
        create: setting,
      });
    }
    console.log('Seeded Settings');

    // 2. Journey Steps
    const journeySteps = [
      { stepId: '01', title: 'Analizė', desc: 'Sielos veidrodis ir pirminė analizė.', longDesc: 'Šios sesijos metu mes gilinamės į jūsų pasirinktas spalvas, kurios veikia kaip veidrodis jūsų vidiniam pasauliui. Tai pirmas žingsnis suprantant savo esamą būseną ir potencialą.', order: 1 },
      { stepId: '02', title: 'Tikslas', desc: 'Blokų ir baimių transformacija.', longDesc: 'Mes tyrinėjame tai, kas paslėpta. Atpažindami savo šešėlius ir blokuojančias emocijas, mes galime jas transformuoti į kūrybinę energiją ir asmeninę galią.', order: 2 },
      { stepId: '03', title: 'Ritmas', desc: 'Esamų resursų aktyvavimas.', longDesc: 'Susitelkiame į tai, ką turite čia ir dabar. Aktyvuojame jūsų vidinius resursus, kurie padės jums judėti į priekį su pasitikėjimu ir aiškumu.', order: 3 },
      { stepId: '04', title: 'Metodika', desc: 'Ateities potencialo kūrimas.', longDesc: 'Kuriame jūsų ateities viziją. Spalvų pagalba vizualizuojame jūsų tikslus ir svajones, suteikdami jiems energetinį pagrindą realizacijai.', order: 4 },
      { stepId: '05', title: 'Planas', desc: 'Pokyčių užtvirtinimas.', longDesc: 'Šis etapas skirtas visų patirčių sujungimui. Mes užtvirtiname įvykusius pokyčius, kad jie taptų neatsiejama jūsų kasdienybės dalimi.', order: 5 },
      { stepId: '06', title: 'Evoliucija', desc: 'Begalinio augimo ratas.', longDesc: 'Paskutinis žingsnis tampa pirmuoju naujame lygmenyje. Mes integruojame patirtis taip, kad jos taptų nuolatinio evoliucinio proceso varikliu jūsų gyvenime.', order: 6 },
    ];

    for (const step of journeySteps) {
      await prisma.journeyStep.upsert({
        where: { stepId: step.stepId },
        update: step,
        create: step,
      });
    }
    console.log('Seeded Journey Steps');

    // 3. Pricing Plans
    await prisma.pricingPlan.deleteMany({}); // Clear existing to avoid duplicates
    await prisma.pricingPlan.createMany({
      data: [
        {
          title: '"Psichosocialinė asmens konsultacija"',
          description: '60 min. trukmės analizė ir sprendimų paieška',
          price: 'Investicija: 40 €',
          buttonText: 'Užsakyti',
          order: 1,
        },
        {
          title: '"Psichosocialinė poros konsultacija"',
          description: '60 min. trukmės analizė ir sprendimų paieška',
          price: 'Investicija: 40 €',
          buttonText: 'Užsakyti',
          order: 2,
        },
        {
          title: '"Taro konsultacija"',
          description: '60min. trukmės analizė ir sprendimų paieška',
          price: 'Investicija: 40 €',
          buttonText: 'Užsakyti',
          order: 3,
        },
        {
          title: '"Astro konsultacija"',
          description: 'Vienos temos analizė per astrologinę prizmę',
          price: 'Investicija: 40 €',
          buttonText: 'Užsakyti',
          order: 4,
        },
        {
          title: 'Pilna kelionė',
          description: '5 nuoseklios sesijos (rekomenduojama)',
          price: '200€',
          savingsText: 'Sutaupai 50€',
          bonusText: 'Dovana: Aura-Soma produktas',
          isPopular: true,
          buttonText: 'Pradėti transformaciją',
          order: 3,
        }
      ]
    });
    console.log('Seeded Pricing Plans');

    // 4. Gallery Images
    const galleryImages = [
      { src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop', title: 'Pagrindinis fasadas', category: 'Eksterjeras', order: 1 },
      { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop', title: 'Svetainės erdvė', category: 'Interjeras', order: 2 },
      { src: 'https://images.unsplash.com/photo-1600607687940-4e2a09695d51?q=80&w=1000&auto=format&fit=crop', title: 'Valgomojo salė', category: 'Interjeras', order: 3 },
      { src: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=1000&auto=format&fit=crop', title: 'Miegamojo ramybė', category: 'Interjeras', order: 4 },
      { src: 'https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?q=80&w=1000&auto=format&fit=crop', title: 'Dvaro parkas', category: 'Sodas', order: 5 },
      { src: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f?q=80&w=1000&auto=format&fit=crop', title: 'Vakaro apšvietimas', category: 'Eksterjeras', order: 6 },
      { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop', title: 'Terasa', category: 'Eksterjeras', order: 7 },
      { src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop', title: 'Biblioteka', category: 'Interjeras', order: 8 },
      { src: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop', title: 'Laiptų detalė', category: 'Interjeras', order: 9 }
    ];

    await prisma.galleryImage.deleteMany({});
    await prisma.galleryImage.createMany({ data: galleryImages });
    console.log('Seeded Gallery Images');

    // 5. Navigation Items
    await prisma.navItem.deleteMany({});
    
    const aboutNode = await prisma.navItem.create({ data: { label: 'Apie', targetId: 'about', order: 1 } });
    
    const galleryNode = await prisma.navItem.create({ data: { label: 'Galerija', order: 2 } });
    await prisma.navItem.create({ data: { label: 'Dvaras', href: '/dvaras', parentId: galleryNode.id, order: 1 } });
    await prisma.navItem.create({ data: { label: 'Sodas', targetId: 'gallery-sodas', parentId: galleryNode.id, order: 2 } });

    const servicesNode = await prisma.navItem.create({ 
      data: { label: 'Paslaugos', order: 3 } 
    });

    const individualiosNode = await prisma.navItem.create({
      data: { label: 'Konsultacijos', parentId: servicesNode.id, order: 1 }
    });

    await prisma.navItem.createMany({
      data: [
        { label: 'Psichosocialinė asmens', href: '/paslaugos/psichosocialine', parentId: individualiosNode.id, order: 1 },
        { label: 'Spalvų', href: '/paslaugos/spalvu', parentId: individualiosNode.id, order: 2 },
        { label: 'Kvapų', href: '/paslaugos/kvapu', parentId: individualiosNode.id, order: 3 },
        { label: 'Taro', href: '/paslaugos/taro', parentId: individualiosNode.id, order: 4 },
        { label: 'Astro', href: '/paslaugos/astro', parentId: individualiosNode.id, order: 5 },
        { label: 'Psichosocialinė poros', href: '/paslaugos/poru', parentId: individualiosNode.id, order: 6 },
      ]
    });

    const kursaiNode = await prisma.navItem.create({
      data: { label: 'Kursai', parentId: servicesNode.id, order: 2 }
    });

    await prisma.navItem.createMany({
      data: [
        { label: 'Mano namai', href: '/paslaugos/kursai/mano-namai', parentId: kursaiNode.id, order: 1 },
        { label: 'Mano stichijos', href: '/paslaugos/kursai/mano-stichijos', parentId: kursaiNode.id, order: 2 },
        { label: 'Mityba pagal spalvas ir stichijas', href: '/paslaugos/kursai/mityba', parentId: kursaiNode.id, order: 3 },
      ]
    });

    const grupiniaiNode = await prisma.navItem.create({
      data: { label: 'Grupės', parentId: servicesNode.id, order: 3 }
    });

    await prisma.navItem.createMany({
      data: [
        { label: 'Sielos koliažas', href: '/paslaugos/grupiniai/sielos', parentId: grupiniaiNode.id, order: 1 },
        { label: 'Svajonių koliažas', href: '/paslaugos/grupiniai/koliazas', parentId: grupiniaiNode.id, order: 2 },
      ]
    });

    const edukacijosNode = await prisma.navItem.create({
      data: { label: 'Rekreacijos', parentId: servicesNode.id, order: 4 }
    });

    await prisma.navItem.createMany({
      data: [
        { label: 'Mano gyvenimo mitas', href: '/paslaugos/edukacijos/mitas', parentId: edukacijosNode.id, order: 1 },
        { label: 'Deivių archetipai', href: '/paslaugos/edukacijos/archetipai', parentId: edukacijosNode.id, order: 2 },
        { label: 'Aistros kvapas', href: '/paslaugos/edukacijos/kvapas', parentId: edukacijosNode.id, order: 3 },
        { label: 'Zodiakas', href: '/paslaugos/edukacijos/zodiakas', parentId: edukacijosNode.id, order: 4 },
        { label: 'Čakros', href: '/paslaugos/edukacijos/cakros', parentId: edukacijosNode.id, order: 5 },
        { label: 'Stichijos', href: '/paslaugos/edukacijos/stichijos', parentId: edukacijosNode.id, order: 6 },
        { label: 'Paslaptis', href: '/paslaugos/edukacijos/paslaptis', parentId: edukacijosNode.id, order: 7 },
        { label: 'Dūmas', href: '/paslaugos/edukacijos/dumas', parentId: edukacijosNode.id, order: 8 },
      ]
    });

    const seansaiNode = await prisma.navItem.create({
      data: { label: 'Seansai', parentId: servicesNode.id, order: 5 }
    });

    await prisma.navItem.createMany({
      data: [
        { label: 'Psichosomatinis', href: '/paslaugos/seansai/psichosomatinis', parentId: seansaiNode.id, order: 1 },
        { label: 'Hipnozė', href: '/paslaugos/seansai/hipnoze', parentId: seansaiNode.id, order: 2 },
        { label: 'Patalpų energetinis valymas', href: '/paslaugos/seansai/valymas', parentId: seansaiNode.id, order: 3 },
      ]
    });

    const eventsNode = await prisma.navItem.create({ data: { label: 'Renginiai', targetId: 'events', order: 4 } });

    console.log('Seeded Basic Navigation Items');

    await prisma.$disconnect();

    return NextResponse.json({ message: 'Database seeded successfully!' });
  } catch (e: any) {
    console.error('Seeding error:', e);
    await prisma.$disconnect();
    return NextResponse.json({ error: 'Failed to seed database', details: e.message }, { status: 500 });
  }
}
