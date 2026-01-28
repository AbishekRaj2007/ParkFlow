import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
  bgColor: string;
}

export function StatCard({ icon: Icon, value, label, color, bgColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className={`inline-flex p-3 rounded-lg ${bgColor} mb-3`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
}
