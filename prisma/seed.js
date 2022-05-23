const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    // const woopa = await prisma.explorer.upsert({
    //   where: { name: 'Woopa' },
    //   update: {},
    //   create: {
    //     name: 'Woopa',
		// 		username: 'ajolonauta',
		// 		mission: 'Node'
    //   },
    // });

    // const woopa1 = await prisma.explorer.upsert({
    //   where: { name: 'Woopa1' },
    //   update: {},
    //   create: {
    //     name: 'Woopa1',
		// 		username: 'ajolonauta1',
		// 		mission: 'Node'
    //   },
    // });

    // const woopa2 = await prisma.explorer.upsert({
    //   where: { name: 'Woopa 2' },
    //   update: {},
    //   create: {
    //     name: 'Woopa 2',
		// 		username: 'ajolonauta2',
		// 		mission: 'Java'
    //   },
    // });

    // const woopa3 = await prisma.explorer.upsert({
    //   where: { name: 'Woopa 3' },
    //   update: {},
    //   create: {
    //     name: 'Woopa 3',
		// 		username: 'ajolonauta3',
		// 		mission: 'Node'
    //   },
    // });

    // const woopa4 = await prisma.explorer.upsert({
    //   where: { name: 'Woopa 4' },
    //   update: {},
    //   create: {
    //     name: 'Woopa 4',
		// 		username: 'ajolonauta4',
		// 		mission: 'Node'
    //   },
    // });

    const missionComader1 = await prisma.missionComander.upsert({
      where: { name: 'Carlo' },
      update: {},
      create: {
        name: 'Carlo Gilmar',
				username: 'Carlogilmar',
				mainStack: 'Node'
      },
    });

    const missionComader2 = await prisma.missionComander.upsert({
      where: { name: 'Rodrigo' },
      update: {},
      create: {
        name: 'Rodrigo',
				username: 'rodrigo',
				mainStack: 'JavaScript'
      },
    });

    const missionComader3 = await prisma.missionComander.upsert({
      where: { name: 'Fernanda' },
      update: {},
      create: {
        name: 'Fernanda',
				username: 'fernanda',
				mainStack: 'Java'
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();