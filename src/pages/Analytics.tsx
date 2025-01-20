import React, { useState } from 'react';
import Chart from '../components/dashboard/Chart';
import { motion } from 'framer-motion';

const analyticsData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Page Views',
      data: [1200, 1900, 1500, 1700, 2100, 1800, 1600],
      backgroundColor: '#3B82F6',
    },
  ],
};

export default function Analytics() {
  const [currentView, setCurrentView] = useState<'reports' | 'statistics'>('reports');

  const renderReports = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Weekly Report</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">+12.5%</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">↑ Growth rate</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Monthly Revenue</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">$45,678</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">↑ 8% from last month</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">User Engagement</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">78%</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">↑ 5% improvement</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Chart
          data={analyticsData}
          type="line"
          title="Weekly Traffic Report"
        />
        <Chart
          data={{
            ...analyticsData,
            datasets: [{
              ...analyticsData.datasets[0],
              label: 'Conversion Rate Report'
            }]
          }}
          type="bar"
          title="Conversion Trends"
        />
      </motion.div>
    </div>
  );

  const renderStatistics = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Active Users</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">2,345</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Real-time users</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Page Load</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">0.8s</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Average speed</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Error Rate</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">0.12%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Last 24 hours</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Uptime</h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Monthly average</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Chart
          data={analyticsData}
          type="area"
          title="Server Load Statistics"
        />
        <Chart
          data={{
            ...analyticsData,
            datasets: [{
              ...analyticsData.datasets[0],
              label: 'Error Distribution'
            }]
          }}
          type="pie"
          title="Error Distribution"
        />
      </motion.div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Analytics Overview</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentView('reports')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              currentView === 'reports'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            Reports
          </button>
          <button
            onClick={() => setCurrentView('statistics')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              currentView === 'statistics'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            Statistics
          </button>
        </div>
      </div>

      {currentView === 'reports' ? renderReports() : renderStatistics()}
    </div>
  );
}