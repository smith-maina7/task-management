const { PrismaClient } = require("@prisma/client");
const { timestamp } = require("drizzle-orm/mysql-core");

const prisma = new PrismaClient();

async function main() {
  try {
    const newTask = await prisma.tasks.create({
      data: {
        title: "Homework",
        Description: "Finish math homework", // Corrected typo in property name
        date: timestamp,
        status: "Completed",
      },
    });
    console.log(newTask);
    const allTasks = await prisma.tasks.findMany();
    console.log("All Tasks:", allTasks);
  } catch (createError) {
    console.error("Error creating task:", createError);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (disconnectError) => {
    console.error(disconnectError);
    await prisma.$disconnect();
    process.exit(1);
  });
