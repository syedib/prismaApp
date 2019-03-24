import Mutation from './Mutations';

const Query = {
    users(parent, args, { prisma }, info){
        return prisma.query.users();
    }
}

const resolvers = {
    Query,
    Mutation
}

export {resolvers}