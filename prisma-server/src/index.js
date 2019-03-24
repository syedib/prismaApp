const { GraphQLServer } = require('graphql-yoga')
import { resolvers } from './resolvers';
import prisma from './Prisma'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request){
    return{
      prisma,
      request
    }
  }
})

const options = {
	port: 8000
}

server.start(options, ({port}) => console.log(`The server is running on http://localhost:${port}`))