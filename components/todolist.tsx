"use client";

import React, { useState } from "react";

interface Task {
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleTask = (index: number) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteTasks = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">To-Do List</h1>
      <div className="flex space-x-2">
        <input
          className="flex-1 p-2 border border-gray-300 rounded"
          placeholder="Add a new thing to-do..."
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-2 rounded ${
                task.completed ? "bg-green-100" : "bg-gray-100"
              }`}
            >
              <span
                className={`flex-1 cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => handleToggleTask(index)}
              >
                {task.text}
              </span>
              <button
                className="text-red-500 hover:text-red-700 ml-4"
                onClick={() => handleDeleteTasks(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
