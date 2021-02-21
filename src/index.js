import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
// import { typeDefs, resolvers } from './schema';
import { typeDefs } from './typeDefs';
import { resolvers } from "./resolvers";
import mongoose  from 'mongoose';


const startServer = async () => {
    const app = express();
    
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    
    server.applyMiddleware({ app });
    
    app.use((req, res) => {
      res.status(200);
      res.send('Hello!');
      res.end();
    });

    // // http://teldrassil.pedrocarmo.pt:9093/ EXPRESS
    await mongoose.connect('mongodb://teldrassil.pedrocarmo.pt:9092/tyme_core', {useNewUrlParser: true});


    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

startServer();