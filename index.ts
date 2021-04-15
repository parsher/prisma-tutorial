import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/* async function select() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)

  const filteredPosts = await prisma.post.findMany({
  where: {
    OR: [{ title: { contains: 'hello' } }, { content: { contains: 'hello' } }],
  },
})
console.log(filteredPosts);

// retrieve the post records of a user by traversing the relations.
const posts = await prisma.profile
  .findUnique({
    where: { id: 1 },
  })
  .user()
  .posts();

  console.log(posts);


}
 */
/* async function insert() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      posts: {
        create: { title: "Hello World" },
      },
      profile: {
        create: { bio: "I like turtles" },
      },
    },
  });

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });


  const post = await prisma.post.create({
  data: {
    title: 'Join us for Prisma Day 2020',
    author: {
      connect: { email: 'alice@prisma.io' },
    },
  },
})

const allPosts = await prisma.post.findMany({
    include: {
      author: true
    },
  });
  console.dir(allPosts, { depth: null });

} */

/* async function delete() {
    const deletedUser = await prisma.user.delete({
        where: { email: 'sarah@prisma.io' },
      });
      console.log(deletedUser);
} */

async function main() {
  // update published to true
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  });
  console.log(post);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
