import React from 'react';
import { LayoutDashboard, MapPin, Calendar, Car, Clock, CreditCard, Settings, HelpCircle } from 'lucide-react';

interface ClientSidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: MapPin, label: 'Find Parking' },
  { icon: Calendar, label: 'My Bookings' },
  { icon: Car, label: 'My Vehicles' },
  { icon: Clock, label: 'Parking History' },
  { icon: CreditCard, label: 'Payments' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help & Support' },
];

export function ClientSidebar({ activePage, onNavigate }: ClientSidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
            <Car className="w-5 h-5 text-white" />
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
                      ? 'bg-green-50 text-green-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-green-600' : 'text-gray-500'}`} />
                  <span className={`text-sm font-medium ${isActive ? 'text-green-600' : ''}`}>
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
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-green-600">U</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">User</div>
            <div className="text-xs text-gray-500 truncate">user@parksmart.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
