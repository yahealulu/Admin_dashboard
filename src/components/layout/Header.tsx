import React, { useState } from 'react';
import { Bell, Sun, Moon, User, X } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New User Registration",
      message: "A new user has registered to the platform",
      time: "5 minutes ago",
      read: false
    },
    {
      id: 2,
      title: "System Update",
      message: "System maintenance scheduled for tonight",
      time: "1 hour ago",
      read: false
    },
    {
      id: 3,
      title: "Performance Alert",
      message: "Server load has increased by 25%",
      time: "2 hours ago",
      read: true
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 transition-colors duration-200">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search..."
            className="w-64 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg relative transition-colors duration-200"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="w-5 h-5 dark:text-gray-200" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-semibold dark:text-white">Notifications</h3>
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id}
                      className={`p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 ${
                        !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex justify-between">
                        <h4 className="font-medium dark:text-white">{notification.title}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            {isDark ? 
              <Sun className="w-5 h-5 dark:text-gray-200" /> : 
              <Moon className="w-5 h-5" />
            }
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium dark:text-white">Yahya Loulou</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}