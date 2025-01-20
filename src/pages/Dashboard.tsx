import React from 'react';
import Chart from '../components/dashboard/Chart';
import Table from '../components/dashboard/Table';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowUp, ArrowDown } from 'lucide-react';

const sampleChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      backgroundColor: '#3B82F6',
    },
  ],
};

const sampleTableData = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    role: 'Admin',
    lastActive: '2024-03-10',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'inactive',
    role: 'User',
    lastActive: '2024-03-09',
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    status: 'active',
    role: 'Editor',
    lastActive: '2024-03-11',
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    status: 'active',
    role: 'User',
    lastActive: '2024-03-10',
  },
  {
    id: '5',
    name: 'Tom Brown',
    email: 'tom@example.com',
    status: 'inactive',
    role: 'User',
    lastActive: '2024-03-08',
  }
];

const StatCard = ({ icon: Icon, title, value, change, isPositive }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
  >
    <div className="flex items-center justify-between">
      <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <span className={`flex items-center text-sm ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
        {isPositive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
        {change}
      </span>
    </div>
    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
  </motion.div>
);

export default function Dashboard() {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          icon={DollarSign}
          title="Total Revenue"
          value="$45,231"
          change="12%"
          isPositive={true}
        />
        <StatCard
          icon={Users}
          title="Total Users"
          value="1,234"
          change="8%"
          isPositive={true}
        />
        <StatCard
          icon={ShoppingCart}
          title="Total Orders"
          value="856"
          change="5%"
          isPositive={true}
        />
        <StatCard
          icon={TrendingUp}
          title="Conversion Rate"
          value="2.4%"
          change="1%"
          isPositive={false}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
      >
        <Chart
          data={sampleChartData}
          type="line"
          title="Revenue Overview"
        />
        <Chart
          data={{
            ...sampleChartData,
            datasets: [{
              ...sampleChartData.datasets[0],
              label: 'User Activity'
            }]
          }}
          type="bar"
          title="User Activity"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="overflow-hidden"
      >
        <Table
          data={sampleTableData}
          onExport={() => {}}
        />
      </motion.div>
    </div>
  );
}