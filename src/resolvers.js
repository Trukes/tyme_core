import { Cat } from "./models/Cat";
import { User } from "./models";
import { userController } from "./controllers";

export const resolvers = {
    Query: {
        hello: () => "hello",
        cats: () => Cat.find(),
        users: () => userController.allUsers(),
        findUser: (_, args) => userController.getUser(args),

        // findUser: ({id}) => {
        //     console.log(id);
        //     return userController.getUser({id});
        // }
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({ name });
            // kitty.save().then(() => console.log('meow'));
            await kitty.save();
            return kitty;
        },
        createUser: async (_, { name, email, password }) => {


            let resUser =  await userController.createUser({name, email, password});

            // const person = new User({ name, email, password });
            // // kitty.save().then(() => console.log('meow'));
            // await person.save();
            // return person;
            return resUser;
        },        
    }
};