const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const demoUsers = [
    { name: 'Juan Perez', email: 'juan.perez@example.com' },
    { name: 'Maria Lopez', email: 'maria.lopez@example.com' },
    { name: 'Carlos Garcia', email: 'carlos.garcia@example.com' }
];

async function seed() {
    await prisma.user.createMany({ data: demoUsers });
    console.log('✅ Usuarios de demostración creados.');
}

async function reset() {
    await prisma.user.deleteMany();
    console.log('🗑️ Usuarios eliminados.');
}

async function main() {
    const action = process.argv[2];

    if (action === 'seed') {
        await seed();
    } else if (action === 'reset') {
        await reset();
    } else {
        console.log('❌ Acción inválida. Usa: node seed.js [seed|reset]');
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });