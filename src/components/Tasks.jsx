import React, { useState } from "react";
import { CheckCircle2, Clock, AlertCircle, Tag, Users } from "lucide-react";

function Tasks() {
  const [filter, setFilter] = useState("all");

  const tasks = [
    {
      id: 1,
      title: "Update user authentication flow",
      description:
        "Implement new security measures and improve login experience",
      status: "in_progress",
      priority: "high",
      assignee: "Krushna Rathod",
      dueDate: "2024-03-25",
      tags: ["frontend", "security"],
    },
    {
      id: 2,
      title: "Design system documentation",
      description:
        "Create comprehensive documentation for our design system components",
      status: "todo",
      priority: "medium",
      assignee: "Prasad Hiwarkhede",
      dueDate: "2024-03-30",
      tags: ["documentation", "design"],
    },
    {
      id: 3,
      title: "API optimization",
      description: "Optimize API endpoints for better performance",
      status: "completed",
      priority: "high",
      assignee: "Yash Thakre",
      dueDate: "2024-03-20",
      tags: ["backend", "performance"],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "todo":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "medium":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "low":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Task Controls */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Task
          </button>
          <div className="flex border rounded-lg overflow-hidden">
            <button
              className={`px-4 py-2 ${
                filter === "all" ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 ${
                filter === "my_tasks" ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
              onClick={() => setFilter("my_tasks")}
            >
              My Tasks
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border rounded-lg px-3 py-2">
            <option>Sort by Priority</option>
            <option>Sort by Due Date</option>
            <option>Sort by Status</option>
          </select>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <div key={task.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      {task.title}
                    </h3>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        task.status
                      )}`}
                    >
                      {task.status.replace("_", " ")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">
                    {task.description}
                  </p>
                  <div className="mt-4 flex items-center space-x-6">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">
                        {task.assignee}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-500">
                        Due {new Date(task.dueDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag className="h-5 w-5 text-gray-400" />
                      {task.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex items-center space-x-4">
                  {getPriorityIcon(task.priority)}
                  <button className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Options</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
