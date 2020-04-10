require('dotenv').config()
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
  /*
  await prisma.user.create({
    data: {
      name: 'Barry Low',
      email: 'barry@studiobear.co',
      profile: {
        create: {
          companyName: 'Studiobear Design',
          phone: { create: { type: 'WORK', number: '7079274658' } },
        },
      },
    },
  })

  await prisma.collection.create({
    data: {
      name: 'Default',
      works: {
        create: [
          {
            title: 'Floral Still Life with Fruit',
            medium: 'Oil and Acrylic on Canvas',
            dimensions: '36 x 36 inches',
            catalogId: 20001,
            published: true,
            price: 6500,
            category: 'FLORAL',
          },
        ],
      },
    },
  })
  */

  const allUsers = await prisma.user.findMany()
  const allCollections = await prisma.collection.findMany()
  const allWorks = await prisma.work.findMany()
  console.log(allUsers, allCollections, allWorks)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })
