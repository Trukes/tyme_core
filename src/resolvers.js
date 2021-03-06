import { Cat } from './models/Cat'

export const resolvers = {
    Query: {
        hello: () => "hello",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({ name });
            // kitty.save().then(() => console.log('meow'));
            await kitty.save();
            return kitty;

        }
    }
}