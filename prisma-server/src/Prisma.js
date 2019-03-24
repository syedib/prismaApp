import {Prisma} from 'prisma-binding'

const prisma = new Prisma({
     typeDefs:'src/generated/prisma.graphql',
     endpoint:'http://localhost:8866/fonicart/',
     secret: 'dontsaytoanyone'
})

export { prisma as default }
