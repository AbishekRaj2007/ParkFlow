import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface UtilizationChartProps {
  available: number;
  reserved: number;
  occupied: number;
}

export function UtilizationChart({ available, reserved, occupied }: UtilizationChartProps) {
  const data = [
    { name: 'Available', value: available, color: '#10B981' },
    { name: 'Reserved', value: reserved, color: '#3B82F6' },
    { name: 'Occupied', value: occupied, color: '#F97316' },
  ];

  const total = available + reserved + occupied;
  const utilizationRate = Math.round(((reserved + occupied) / total) * 100);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Slot Utilization</h3>
      
      <div className="h-64 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{utilizationRate}%</div>
            <div className="text-xs text-gray-600 mt-1">Utilized</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {data.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="text-xs text-gray-600">{item.name}</span>
            </div>
            <div className="text-lg font-bold text-gray-900">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
