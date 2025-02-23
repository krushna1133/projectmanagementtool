import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import AdminPortal from "./components/AdminPortal";
import Timeline from "./components/Timeline";
import Tasks from "./components/Tasks";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import { Users, Bell } from "lucide-react";
import image from "./images/profile.jpg";
function App() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [notifications] = useState([
    { id: 1, text: "New task assigned", time: "5m ago" },
    { id: 2, text: "Project deadline updated", time: "1h ago" },
  ]);

  const renderView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "timeline":
        return <Timeline />;
      case "tasks":
        return <Tasks />;
      case "admin":
        return <AdminPortal />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-800">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
                <Users className="h-6 w-6" />
                <span>Team</span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src={image}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">{renderView()}</main>
      </div>
    </div>
  );
}

export default App;
