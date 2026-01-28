import React from 'react';
import { Search, Bell } from 'lucide-react';

interface TopbarProps {
  activePage: string;
}

export function Topbar({ activePage }: TopbarProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left: Breadcrumb and Title */}
      <div className="flex items-center space-x-2">
        <nav className="flex items-center space-x-2 text-sm">
          <span className="text-gray-900 font-medium">{activePage}</span>
        </nav>
      </div>

      {/* Right: Search, Notifications, Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Avatar */}
        <button className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-white">AS</span>
          </div>
          <div className="text-left hidden md:block">
            <div className="text-sm font-medium text-gray-900">Abishek Raj</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
        </button>
      </div>
    </header>
  );
}
