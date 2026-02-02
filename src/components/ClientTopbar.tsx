import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, LogOut, UserCog, ChevronDown } from 'lucide-react';

interface ClientTopbarProps {
  activePage: string;
  onSwitchToAdmin: () => void;
  onLogout: () => void;
}

export function ClientTopbar({ activePage, onSwitchToAdmin, onLogout }: ClientTopbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            placeholder="Search parking..."
            className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors"
          >
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-white">U</span>
            </div>
            <div className="text-left hidden md:block">
              <div className="text-sm font-medium text-gray-900">User</div>
              <div className="text-xs text-gray-500">Customer</div>
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <>
              {/* Backdrop */}
              <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
              
              {/* Popup */}
              <div className="absolute right-0 mt-3 mr-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 py-3 z-50" style={{ minWidth: '280px', right: '25px' }}>
                <div className="px-4 py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                      <span className="text-base font-bold text-white">U</span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-base font-semibold text-gray-900 truncate">User</div>
                      <div className="text-xs text-gray-500 truncate">user@parksmart.com</div>
                    </div>
                  </div>
                </div>
                
                <div className="py-2 px-2">
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      onSwitchToAdmin();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCog className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-left min-w-0">
                      <div className="font-medium text-gray-900 text-sm">Switch to Admin</div>
                      <div className="text-xs text-gray-500">Access admin panel</div>
                    </div>
                  </button>
                </div>
                
                <div className="border-t border-gray-100 py-2 px-2">
                  <button
                    onClick={() => {
                      setIsDropdownOpen(false);
                      onLogout();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LogOut className="w-4 h-4 text-red-500" />
                    </div>
                    <div className="text-left min-w-0">
                      <div className="font-medium text-sm">Logout</div>
                      <div className="text-xs text-red-400">Sign out</div>
                    </div>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
