import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const newText = `Remiuosi dviem esminiais poliais: kritiniu mąstymu ir praktiniu sprendimų pritaikymu.
Mano manymu, kiekviena problema, yra tik dar neišspręstas uždavinys, reikalaujantis gilaus
situacijos vertinimo ir priežastinio ryšio aptikimo, o sprendimas, yra išmintinga išvada ir
vykęs planas, pritaikomas būtent jūsų realybei.
Teorija be praktikos, tai sąnaudos be grąžos ir nerealizuotas potencialas. Dirbdami
kartu, sutelksime dėmesį į tai, kas iš tiesų generuoja progresą. Vertinu tiesų ir nuoširdų
bendravimą. Leiskite padėti jums pamatyti tai, kas slepiasi šešėlyje ir paversti tai jūsų
sėkme.
Išsilavinimas – socialinio darbo medicinoje bakalauras, psichosocialinis konsultavimas VDU.`

  console.log('Updating about_desc...')
  const result = await prisma.siteSetting.upsert({
    where: { key: 'about_desc' },
    update: { value: newText },
    create: { key: 'about_desc', value: newText },
  })
  console.log('Successfully updated about_desc:', result)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
