import { prisma } from '../src/utils/prisma'
import { posts } from './data/posts'
import { users } from './data/user'

async function main(){
  try {
    //await prisma.user.createMany({ data: users })
    await prisma.post.createMany({ data: posts })
  } catch (error) {
    console.log(error)
  }
}

main().then( async () => {
  await prisma.$disconnect()
}).catch( async (e:any) => {
  console.log(e);
  await prisma.$disconnect()
  process.exit(1)
})