import React, { useEffect, useRef } from 'react';
import type { ChartData } from '../../types/dashboard';

interface ChartProps {
  data: ChartData;
  type: 'line' | 'bar' | 'pie' | 'area';
  title: string;
}

export default function Chart({ data, type, title }: ChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // In a real implementation, we would use Chart.js here
    // For now, we'll show a placeholder
  }, [data, type]);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="aspect-[16/9] bg-gray-50 rounded flex items-center justify-center">
        <p className="text-gray-500">Chart visualization would render here</p>
      </div>
    </div>
  );
}