import { Cat } from "./models/Cat";
import { User } from "./models/User";

export const resolvers = {
    Query: {
        hello: () => "hello",
        cats: () => Cat.find(),
        users: () => User.find()
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({ name });
            // kitty.save().then(() => console.log('meow'));
            await kitty.save();
            return kitty;
        },
        createUser: async (_, { name, email, password }) => {
            const person = new User({ name, email, password });
            // kitty.save().then(() => console.log('meow'));
            await person.save();
            return person;
        },        
    }
};