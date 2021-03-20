import { ProjectFactory } from "../factory";

exports.createProject = async (args) => {
  //   const project = new Project(args);
  //   await project.save();
  //   return project;
  const project = await ProjectFactory.create(args);
  //   await project.save();
  return project;
};

exports.allProjects = async () => {
  //   TODO:: get projects that user has acess
  const project = await ProjectFactory.getAllProjects();
  return project;
};

exports.findProject = async (args) => {
  const project = await ProjectFactory.findProject(args.id);
  return project;
};

exports.updateProject = async (id, args) => {
  const project = await ProjectFactory.updateProject(id, args);
  return project;
};

exports.deleteProject = async (id) => {
  const project = await ProjectFactory.deleteProject(id);
  return project;
};
