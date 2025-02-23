import React from 'react';
import {
  BarChart3,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';

function Dashboard() {
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      progress: 75,
      team: ['John D.', 'Sarah M.', 'Mike R.'],
      status: 'In Progress',
      deadline: '2024-04-15',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      progress: 40,
      team: ['Emma S.', 'David L.'],
      status: 'On Track',
      deadline: '2024-05-20',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Projects</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
            <BarChart3 className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Team Members</p>
              <p className="text-2xl font-semibold">24</p>
            </div>
            <Users className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Hours Logged</p>
              <p className="text-2xl font-semibold">164</p>
            </div>
            <Clock className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tasks Completed</p>
              <p className="text-2xl font-semibold">45</p>
            </div>
            <CheckCircle2 className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Active Projects</h2>
        </div>
        <div className="divide-y">
          {projects.map((project) => (
            <div key={project.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">{project.name}</h3>
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800">
                  {project.status}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex -space-x-2">
                  {project.team.map((member, idx) => (
                    <div
                      key={idx}
                      className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center"
                      title={member}
                    >
                      {member.charAt(0)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  Due: {new Date(project.deadline).toLocaleDateString()}
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;