const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
    // const demoUsers = [
    //     { name: 'Juan Perez', email: 'juan.perez@example.com' },
    //     { name: 'Maria Lopez', email: 'maria.lopez@example.com' },
    //     { name: 'Carlos Garcia', email: 'carlos.garcia@example.com' }
    // ];

    // for (const user of demoUsers) {
    //     await prisma.user.create({
    //         data: user
    //     });
    // }

    // console.log('Usuarios de demostracion creados con exito');

    await prisma.user.deleteMany();
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });