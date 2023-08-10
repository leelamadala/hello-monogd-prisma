import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const createNull = await prisma.user.create({
        data: {
            email: 'user1@prisma.io',
            name: null,
        },
    })
    console.log(createNull)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })