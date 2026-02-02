import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weekData = [
  { day: 'Mon', revenue: 0 },
  { day: 'Tue', revenue: 0 },
  { day: 'Wed', revenue: 0 },
  { day: 'Thu', revenue: 0 },
  { day: 'Fri', revenue: 0 },
  { day: 'Sat', revenue: 0 },
  { day: 'Sun', revenue: 0 },
];

const monthData = [
  { day: 'Week 1', revenue: 0 },
  { day: 'Week 2', revenue: 0 },
  { day: 'Week 3', revenue: 0 },
  { day: 'Week 4', revenue: 0 },
];

const yearData = [
  { day: 'Jan', revenue: 0 },
  { day: 'Feb', revenue: 0 },
  { day: 'Mar', revenue: 0 },
  { day: 'Apr', revenue: 0 },
  { day: 'May', revenue: 0 },
  { day: 'Jun', revenue: 0 },
  { day: 'Jul', revenue: 0 },
  { day: 'Aug', revenue: 0 },
  { day: 'Sep', revenue: 0 },
  { day: 'Oct', revenue: 0 },
  { day: 'Nov', revenue: 0 },
  { day: 'Dec', revenue: 0 },
];

type TimeRange = 'week' | 'month' | 'year';

export function RevenueChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('week');

  const getData = () => {
    switch (timeRange) {
      case 'week':
        return weekData;
      case 'month':
        return monthData;
      case 'year':
        return yearData;
      default:
        return weekData;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
        
        {/* Time Range Selector */}
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          <button
            onClick={() => setTimeRange('week')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              timeRange === 'week'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setTimeRange('month')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              timeRange === 'month'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setTimeRange('year')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              timeRange === 'year'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Year
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={getData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              tickFormatter={(value) => `₹${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
              formatter={(value) => [`₹${value}`, 'Revenue']}
            />
            <Bar dataKey="revenue" fill="#3B82F6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
        <div>
          <div className="text-xs text-gray-600 mb-1">Total Revenue</div>
          <div className="text-lg font-bold text-gray-900">
            ₹{timeRange === 'week' ? '39,800' : timeRange === 'month' ? '1,24,500' : '16,61,000'}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Average</div>
          <div className="text-lg font-bold text-gray-900">
            ₹{timeRange === 'week' ? '5,686' : timeRange === 'month' ? '31,125' : '1,38,417'}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-600 mb-1">Peak Day</div>
          <div className="text-lg font-bold text-gray-900">
            {timeRange === 'week' ? 'Saturday' : timeRange === 'month' ? 'Week 4' : 'July'}
          </div>
        </div>
      </div>
    </div>
  );
}
