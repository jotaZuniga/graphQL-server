import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import server from './server';
import express from 'express';
import { DBConnection } from './db/database';
import schema from './schema';

dotenv.config();
server.use(morgan("common"));

server.use(cors({
    origin: ['*'],
    credentials: true,  // Allow cookies to be sent with requests
}));

server.use(helmet({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false,
}));

server.use(express.json());

// DB CONNECTION
if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL environment variable is not defined");
}

const dbConnect = new DBConnection(process.env.MONGODB_URL);
dbConnect.initMongoose();


server.use("/graphql", graphqlHTTP(
    {
        schema,
        graphiql: true
    }
));

const PORT = process.env.PORT || 8500;
server.listen(PORT, () => {
    console.log('Server up and running...')
});

export default server;