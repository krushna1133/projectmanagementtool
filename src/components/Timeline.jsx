import React from "react";
import { Calendar, Clock, Users, Tag } from "lucide-react";

function Timeline() {
  const timelineEvents = [
    {
      id: 1,
      title: "Website Redesign - Phase 1 Complete",
      date: "2024-03-15",
      type: "milestone",
      team: ["Krushna Rathod", "Prasad Hiwarkhede"],
      description:
        "Successfully completed the initial phase of website redesign including new homepage and navigation.",
    },
    {
      id: 2,
      title: "Mobile App Development Sprint",
      date: "2024-03-20",
      type: "sprint",
      team: ["Prasad Hiwarkhede", "Krushna Rathod"],
      description:
        "Two-week sprint focusing on core functionality and user authentication.",
    },
    {
      id: 3,
      title: "Client Meeting - Project Review",
      date: "2024-03-25",
      type: "meeting",
      team: ["Prasad HIwarkhede", "Krushna Rathod"],
      description: "Quarterly review meeting with client stakeholders.",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Timeline Controls */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Event
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Filter
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <select className="border rounded-lg px-3 py-2">
            <option>Week</option>
            <option>Month</option>
            <option>Quarter</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Today
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="space-y-8">
            {timelineEvents.map((event) => (
              <div key={event.id} className="flex">
                <div className="flex-shrink-0 w-16 text-sm text-gray-600">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="ml-4">
                  <div className="relative pb-8">
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                    <div className="relative flex items-start space-x-3">
                      <div className="relative">
                        <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                          {event.type === "milestone" && (
                            <Tag className="h-5 w-5 text-white" />
                          )}
                          {event.type === "sprint" && (
                            <Clock className="h-5 w-5 text-white" />
                          )}
                          {event.type === "meeting" && (
                            <Calendar className="h-5 w-5 text-white" />
                          )}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-lg font-medium text-gray-900">
                            {event.title}
                          </div>
                          <p className="mt-1 text-sm text-gray-600">
                            {event.description}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center space-x-4">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-500">
                              {event.team.join(", ")}
                            </span>
                          </div>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 self-center">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
