import bcrypt from 'bcrypt';

async function createUser(parent, args, { prisma }, info){
    if(args.data.password.length < 8){
        throw new Error('Password should be 8 or more character length');
    }

    const hashedPassword = await bcrypt.hash(args.data.password, 10);

    const user = prisma.mutation.createUser({
            data:{
            ...args.data,
            password: hashedPassword
        }
    })

    return user;
}

async function deleteUser(parent, args, {prisma}, info){
    return prisma.mutation.deleteUser({
        where:{
            id: args.id
        }
    })
}

export {
    createUser,
    deleteUser
}