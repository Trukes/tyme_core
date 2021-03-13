import { User } from "../models";

exports.createUser = async ({ name, email, password }) => {
  const person = new User({ name, email, password });
  // kitty.save().then(() => console.log('meow'));
  await person.save();
  return person;
};

exports.logInUser = async (args) => {
  const user = await User.findOne({ email: args.email });

  if (!user) throw new Error("Invalid user credentials");

  let validatePassword = await user.checkPassword(args.password);
  if (!validatePassword) throw new Error("Invalid credentials");

  let token = user.generateToken();

  return { userId: user._id, token: token };
};

exports.allUsers = () => {
  return User.find();
};

exports.getUser = async (args) => {
  return await User.findOne({ _id: args.id });
};

exports.updateUser = async (id, args) => {
  let resUser = await User.findOneAndUpdate(
    { _id: id },
    { $set: args },
    { new: true, runValidators: true }
  );
  return resUser;
};

exports.deleteUser = async (id) => {
  let resUser = await User.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        status: false,
      },
    },
    { new: true, runValidators: true }
  );
  return resUser;
};
