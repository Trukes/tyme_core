import { userController } from "./controllers";

export const resolvers = {
    Query: {
        hello: () => "hello",
        users: () => userController.allUsers(),
        findUser: (_, args) => userController.getUser(args),
        loginUser: (_, args) => userController.logInUser(args)
        // findUser: ({id}) => {
        //     console.log(id);
        //     return userController.getUser({id});
        // }
    },
    Mutation: {
        registerUser: async (_, { name, email, password }) => {
            let resUser =  await userController.createUser({name, email, password});
            return resUser;
        },  
        updateUser: async (_, args) => { 
            let resUser = await userController.updateUser(args.id, args);
            return resUser;
        },      
        deleteUser: async (_, args) => {
            let resUser = await userController.deleteUser(args.id);
            return resUser;
        }      
    }
};