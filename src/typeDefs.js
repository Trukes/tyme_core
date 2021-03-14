import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    users: [User!]!
    findUser(id: String!): User!
    loginUser(email: String!, password: String!): Authentication!

    projects: [Project!]!
    findProject(id: String!): Project!
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String!): User!
    updateUser(id: String!, name: String): User!
    deleteUser(id: String!): User!
    createProject(name: String!, description: String): Project!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    status: Boolean!
  }

  type Authentication {
    userId: ID!
    token: String!
  }

  type Project {
    id: ID!
    name: String!
    description: String
    created_at: String
    updated_at: String
  }
`;
