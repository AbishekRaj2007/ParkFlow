import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { StatCard } from './components/StatCard';
import { AreaInfoCard } from './components/AreaInfoCard';
import { RevenueChart } from './components/RevenueChart';
import { UtilizationChart } from './components/UtilizationChart';
import { MapView } from './components/MapView';
import { Eye, Calendar, LogIn, CircleDot } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const stats = [
    {
      icon: Eye,
      value: '2,847',
      label: 'Total Parking Views',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Calendar,
      value: '1,234',
      label: 'Total Bookings',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: LogIn,
      value: '89',
      label: 'Check-ins Today',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: CircleDot,
      value: '156',
      label: 'Active Slots',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const parkingDetails = {
    totalSlots: 250,
    availableSlots: 156,
    reservedSlots: 67,
    occupiedSlots: 27,
    vehicleTypes: [
      { type: 'Sedan', count: 45 },
      { type: 'SUV', count: 32 },
      { type: 'Motorcycle', count: 18 },
      { type: 'Truck', count: 12 },
    ],
  };

  const finesSummary = [
    { violation: 'Overtime Parking', count: 12, amount: '₹4,800' },
    { violation: 'Unauthorized Access', count: 5, amount: '₹3,500' },
    { violation: 'Wrong Slot Parking', count: 8, amount: '₹2,400' },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard':
        return (
          <div className="max-w-[1600px] mx-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>

            {/* Main Content - Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                <AreaInfoCard />
                <RevenueChart />
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Parking Details Card */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Parking Details</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-gray-900">{parkingDetails.totalSlots}</div>
                      <div className="text-sm text-gray-600 mt-1">Total Slots</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-green-600">{parkingDetails.availableSlots}</div>
                      <div className="text-sm text-gray-600 mt-1">Available</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-blue-600">{parkingDetails.reservedSlots}</div>
                      <div className="text-sm text-gray-600 mt-1">Reserved</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-orange-600">{parkingDetails.occupiedSlots}</div>
                      <div className="text-sm text-gray-600 mt-1">Occupied</div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Vehicle Types</h4>
                    <div className="space-y-2">
                      {parkingDetails.vehicleTypes.map((vehicle, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{vehicle.type}</span>
                          <span className="text-sm font-semibold text-gray-900">{vehicle.count} vehicles</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Utilization Chart */}
                <UtilizationChart 
                  available={parkingDetails.availableSlots}
                  reserved={parkingDetails.reservedSlots}
                  occupied={parkingDetails.occupiedSlots}
                />

                {/* Fines/Violations Card */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Violations & Fines</h3>
                  <div className="space-y-3">
                    {finesSummary.map((fine, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{fine.violation}</div>
                          <div className="text-xs text-gray-500 mt-1">{fine.count} incidents</div>
                        </div>
                        <div className="text-sm font-semibold text-red-600">{fine.amount}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Total Fines</span>
                    <span className="text-lg font-bold text-gray-900">₹10,700</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Parking Areas':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Parking Areas</h2>
            <div className="grid gap-6">
              {/* Map View */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Parking Locations Map</h3>
                <MapView />
              </div>
              
              {/* List View */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">All Parking Locations</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">Connaught Place Central Parking</h4>
                        <p className="text-sm text-gray-600 mt-1">Block A, Connaught Place, New Delhi</p>
                        <div className="flex gap-4 mt-2">
                          <span className="text-sm text-green-600">156 Available</span>
                          <span className="text-sm text-gray-600">250 Total</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-600">Active</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">Bandra West Parking Hub</h4>
                        <p className="text-sm text-gray-600 mt-1">Linking Road, Bandra West, Mumbai</p>
                        <div className="flex gap-4 mt-2">
                          <span className="text-sm text-green-600">89 Available</span>
                          <span className="text-sm text-gray-600">180 Total</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-600">Active</span>
                    </div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-900">Koramangala Parking Zone</h4>
                        <p className="text-sm text-gray-600 mt-1">5th Block, Koramangala, Bangalore</p>
                        <div className="flex gap-4 mt-2">
                          <span className="text-sm text-green-600">45 Available</span>
                          <span className="text-sm text-gray-600">120 Total</span>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-blue-600">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Parking Slots':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Parking Slots Management</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="grid grid-cols-5 gap-3">
                {Array.from({ length: 50 }, (_, i) => (
                  <div key={i} className={`p-4 border-2 rounded-lg text-center cursor-pointer ${
                    i % 3 === 0 ? 'border-green-500 bg-green-50' : 
                    i % 5 === 0 ? 'border-orange-500 bg-orange-50' : 
                    'border-blue-500 bg-blue-50'
                  }`}>
                    <div className="text-sm font-semibold">{String(i + 1).padStart(3, '0')}</div>
                    <div className="text-xs mt-1">
                      {i % 3 === 0 ? 'Available' : i % 5 === 0 ? 'Occupied' : 'Reserved'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'Bookings':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Bookings & Reservations</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Booking ID</th>
                    <th className="text-left py-3 px-4">Customer</th>
                    <th className="text-left py-3 px-4">Slot</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">#BK-001</td>
                    <td className="py-3 px-4">Rahul Sharma</td>
                    <td className="py-3 px-4">A-023</td>
                    <td className="py-3 px-4">Jan 28, 2026</td>
                    <td className="py-3 px-4">₹150</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Active</span></td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">#BK-002</td>
                    <td className="py-3 px-4">Priya Patel</td>
                    <td className="py-3 px-4">B-015</td>
                    <td className="py-3 px-4">Jan 28, 2026</td>
                    <td className="py-3 px-4">₹200</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Reserved</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'Customers':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Management</h2>
            <div className="grid gap-4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-700">RS</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Rahul Sharma</h3>
                    <p className="text-sm text-gray-600">rahul.sharma@email.com</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-sm text-gray-600">Total Bookings</div>
                    <div className="font-semibold">24</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-green-700">PP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Priya Patel</h3>
                    <p className="text-sm text-gray-600">priya.p@email.com</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-sm text-gray-600">Total Bookings</div>
                    <div className="font-semibold">18</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Owners':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Parking Area Owners</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">Rajesh Kumar</h3>
                      <p className="text-sm text-gray-600">rajesh.kumar@email.com | +91 98765 43210</p>
                      <div className="mt-2">
                        <span className="text-sm text-gray-700">Properties: </span>
                        <span className="text-sm font-medium">3 Parking Areas</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Total Revenue</div>
                      <div className="text-lg font-bold text-green-600">₹2,45,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Analytics':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics & Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-sm text-gray-600 mb-2">Peak Hour</div>
                <div className="text-2xl font-bold">6:00 PM - 8:00 PM</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-sm text-gray-600 mb-2">Avg. Duration</div>
                <div className="text-2xl font-bold">2.5 Hours</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-sm text-gray-600 mb-2">Occupancy Rate</div>
                <div className="text-2xl font-bold text-green-600">78%</div>
              </div>
            </div>
          </div>
        );
      
      case 'Reports':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reports</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-3">
                <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Monthly Revenue Report</h3>
                      <p className="text-sm text-gray-600">January 2026</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Download</button>
                  </div>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Usage Statistics Report</h3>
                      <p className="text-sm text-gray-600">January 2026</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Download</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'Settings':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">General Settings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Notifications</span>
                      <button className="px-4 py-1 bg-blue-100 text-blue-700 rounded">Enabled</button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Auto-approve bookings</span>
                      <button className="px-4 py-1 bg-gray-100 text-gray-700 rounded">Disabled</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar activePage={activePage} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
