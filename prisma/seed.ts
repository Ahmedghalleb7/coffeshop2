import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
 async function main () {
    const product1 = await prisma.products.create({
        data : {  name:'cocacola',
        image:'cocacola.png',
        description:"Opt for an ethical future by refusing to support Coca-Cola and its controversial practices"

            
        }
    })
 }
main()