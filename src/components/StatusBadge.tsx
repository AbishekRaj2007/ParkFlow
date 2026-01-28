import React from 'react';

interface StatusBadgeProps {
  status: 'normal' | 'busy' | 'full';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    normal: {
      label: 'Normal',
      color: 'bg-green-100 text-green-700',
      dot: 'bg-green-500',
    },
    busy: {
      label: 'Busy',
      color: 'bg-orange-100 text-orange-700',
      dot: 'bg-orange-500',
    },
    full: {
      label: 'Full',
      color: 'bg-red-100 text-red-700',
      dot: 'bg-red-500',
    },
  };

  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`}></span>
      <span>{config.label}</span>
    </span>
  );
}
