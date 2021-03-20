import { Task } from "../models";

class TaskFactory {
  constructor() {}

  async create(args) {
    let resTask = new Task(args);
    await resTask.save();

    resTask = await resTask.populate("task_owner").execPopulate();
    // resTask = await resTask.populate("task_owner").execPopulate();
    return resTask;
  }

  async getAllTasks() {
    const resTask = await Task.find().populate("task_owner");
    return resTask;
  }

  async findTask(id) {
    let resTask = await Task.findOne({ _id: id })
      .populate("task_owner")
      .populate("project");
    return resTask;
  }

  async updateTask(id, args) {
    let resTask = await Task.findOneAndUpdate(
      { _id: id },
      { $set: args },
      { new: true, runValidators: true }
    );
    return resTask;
  }

  async deleteTask(id) {
    let resTask = await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          status: false,
        },
      },
      { new: true, runValidators: true }
    );
    return resTask;
  }
}

module.exports = new TaskFactory();
