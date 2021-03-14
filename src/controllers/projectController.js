import { Project } from "../models";

exports.createProject = async (args) => {
  const project = new Project(args);
  await project.save();
  return project;
};

exports.allProjects = async () => {
  //   TODO:: get projects that user has acess
  const project = await Project.find();
  return project;
};

exports.findProject = async (args) => {
  const project = await Project.findOne({ _id: args.id });
  return project;
};

exports.updateProject = async (id, args) => {
  let resProject = await Project.findOneAndUpdate(
    { _id: id },
    { $set: args },
    { new: true, runValidators: true }
  );
  return resProject;
};

exports.deleteProject = async (id) => {
  let resProject = await Project.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        status: false,
      },
    },
    { new: true, runValidators: true }
  );
  return resProject;
};
