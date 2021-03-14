import { Project } from "../models";

exports.createProject = async (args) => {
  console.log(args);
  const project = new Project(args);
  await project.save();
  return project;
};

exports.findProject = async () => {};

exports.updateProject = async () => {};

exports.deleteProject = async () => {};
