import { Project } from "../models";

class ProjectFactory {
  constructor() {
    // this.project = new Project();
  }

  async create(args) {
    const project = new Project(args);
    await project.save();
    return project;
  }

  async getAllProjects() {
    //   TODO:: get projects that user has acess
    const project = await Project.find().populate("tasks");
    return project;
  }

  async findProject(id) {
    const project = await Project.findOne({ _id: id });
    return project;
  }

  async updateProject(id, args) {
    let resProject = await Project.findOneAndUpdate(
      { _id: id },
      { $set: args },
      { new: true, runValidators: true }
    );
    return resProject;
  }

  async addTaskToProject(idProject, idTask) {
    let resProject = await Project.findOneAndUpdate(
      { _id: idProject },
      { $push: { tasks: idTask } },
      { new: true, useFindAndModify: false }
    );
    return resProject;
  }

  async deleteTaskFromProject(idProject, idTask) {
    let resProject = await Project.findOneAndUpdate(
      { _id: idProject },
      { $pop: { tasks: idTask } },
      { new: true, useFindAndModify: false }
    );
    return resProject;
  }

  async deleteProject(id) {
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
  }
}

module.exports = new ProjectFactory();
