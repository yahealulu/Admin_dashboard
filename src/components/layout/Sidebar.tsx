import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronDown,
  ChevronRight,
  BarChart3,
  FileText,
  Menu,
} from 'lucide-react';

interface SidebarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const sidebarItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: 'dashboard',
  },
  {
    title: 'Analytics',
    icon: BarChart3,
    path: 'analytics',
    children: [
      { title: 'Reports', icon: FileText, path: 'analytics/reports' },
      { title: 'Statistics', icon: BarChart3, path: 'analytics/statistics' },
    ],
  },
  {
    title: 'Users',
    icon: Users,
    path: 'users',
  },
  {
    title: 'Settings',
    icon: Settings,
    path: 'settings',
  },
];

export default function Sidebar({ onNavigate, currentPage }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleExpand = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const handleNavigation = (path: string) => {
    onNavigate(path.split('/')[0]);
    setMobileMenuOpen(false);
  };

  const renderSidebarItem = (item: any, depth = 0) => {
    const Icon = item.icon;
    const isExpanded = expandedItems.includes(item.title);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = currentPage === item.path.split('/')[0];

    return (
      <div key={item.title}>
        <button
          className={`w-full flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors ${
            depth > 0 ? 'ml-4' : ''
          } ${isActive ? 'bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.title);
            } else {
              handleNavigation(item.path);
            }
          }}
        >
          {Icon && <Icon className="w-5 h-5 mr-2" />}
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{item.title}</span>
              {hasChildren && (
                <span className="ml-auto">
                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </span>
              )}
            </>
          )}
        </button>
        {hasChildren && isExpanded && !collapsed && (
          <div className="ml-4">
            {item.children?.map((child: any) => renderSidebarItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'w-16' : 'w-64'}`}
      >
        <div className="p-4">
          <button
            className="w-full flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            onClick={() => setCollapsed(!collapsed)}
          >
            <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            {!collapsed && (
              <span className="ml-2 font-semibold text-gray-900 dark:text-white">Admin Panel</span>
            )}
          </button>
        </div>
        <nav className="mt-4">
          {sidebarItems.map(item => renderSidebarItem(item))}
        </nav>
      </div>
    </>
  );
}