import React from 'react';
import { LayoutDashboard, MapPin, Square, Calendar, Users, UserCircle, BarChart3, FileText, Settings } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: MapPin, label: 'Parking Areas' },
  { icon: Square, label: 'Parking Slots' },
  { icon: Calendar, label: 'Bookings' },
  { icon: Users, label: 'Customers' },
  { icon: UserCircle, label: 'Owners' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: FileText, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
];

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ParkSmart</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activePage === item.label;
            return (
              <li key={index}>
                <button
                  onClick={() => onNavigate(item.label)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span className={`text-sm font-medium ${isActive ? 'text-blue-600' : ''}`}>
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 px-4 py-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-600">AS</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">Abishek Raj</div>
            <div className="text-xs text-gray-500 truncate">admin@parksmart.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
