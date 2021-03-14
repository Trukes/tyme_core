import { userController, projectController } from "./controllers";

export const resolvers = {
  Query: {
    // users
    users: () => userController.allUsers(),
    findUser: (_, args) => userController.getUser(args),
    loginUser: (_, args) => userController.logInUser(args),

    // projects
    projects: () => projectController.allProjects(),
    findProject: (_, args) => projectController.findProject(args),
  },
  Mutation: {
    registerUser: async (_, { name, email, password }) => {
      let resUser = await userController.createUser({ name, email, password });
      return resUser;
    },
    updateUser: async (_, args) => {
      let resUser = await userController.updateUser(args.id, args);
      return resUser;
    },
    deleteUser: async (_, args) => {
      let resUser = await userController.deleteUser(args.id);
      return resUser;
    },

    createProject: async (_, args) => {
      let resProject = await projectController.createProject(args);
      return resProject;
    },
  },
};
