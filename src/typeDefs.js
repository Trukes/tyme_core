import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query{
        hello: String!
        cats: [Cat!]!
        users: [User!]!
        findUser(id: String!): User!
    }

    type Cat {
        id: ID!,
        name: String!
    }

    type User {
        id: ID!,
        name: String!,
        email: String!,
        password: String!,
        status: Boolean!
    }

    type Mutation {
        createCat(name: String!): Cat!
        createUser(name: String!, email: String!, password: String!): User!
    }
`;