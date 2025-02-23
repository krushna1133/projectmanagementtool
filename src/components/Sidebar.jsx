import React from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  CheckSquare,
  MessageSquare,
  Settings,
  Shield,
} from 'lucide-react';

function Sidebar({ currentView, setCurrentView }) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', view: 'dashboard' },
    { icon: Users, label: 'Team', view: 'team' },
    { icon: Calendar, label: 'Timeline', view: 'timeline' },
    { icon: CheckSquare, label: 'Tasks', view: 'tasks' },
    { icon: MessageSquare, label: 'Messages', view: 'messages' },
    { icon: Shield, label: 'Admin', view: 'admin' },
    { icon: Settings, label: 'Settings', view: 'settings' },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">ProjectHub</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setCurrentView(item.view)}
            className={`w-full flex items-center px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 ${
              currentView === item.view ? 'bg-gray-50 text-blue-600' : ''
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;