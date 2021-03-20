import { ProjectFactory, TaskFactory } from "../factory";

exports.createTask = async (args) => {
  // taskowner shoud get from auth
  let resTask = await TaskFactory.create(args);
  await ProjectFactory.addTaskToProject(args.project, resTask._id);
  resTask = TaskFactory.findTask(resTask._id);
  return resTask;
};

exports.allTasks = async () => {
  const resTask = await TaskFactory.getAllTasks();
  return resTask;
};

exports.allTasksByProject = async () => {};

exports.findTask = async (id) => {
  let resTask = await TaskFactory.findTask(id);
  return resTask;
};

exports.updateTask = async (args) => {
  let resTask = await TaskFactory.updateTask(args.id, args);
  return resTask;
};

exports.deleteTask = async (id) => {
  let resTask = await TaskFactory.deleteTask(id);
  return resTask;
};
