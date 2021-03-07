import { User } from "../models";


exports.createUser = async ({ name, email, password }) => {

    const person = new User({ name, email, password });
    // kitty.save().then(() => console.log('meow'));
    await person.save();
    return person;

}

exports.allUsers = () => {
    return User.find();
}

exports.getUser = async (args) => {
    console.log("teste",args);
    return await User.findOne({_id: args.id});
}

exports.updateUser = () => {

}

exports.deleteUser = () => {

}