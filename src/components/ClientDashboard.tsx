import React, { useState } from 'react';
import { ClientSidebar } from './ClientSidebar';
import { ClientTopbar } from './ClientTopbar';
import { MapView } from './MapView';
import { Car, Calendar, Clock, MapPin, CreditCard, Star, Phone, Mail, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';

interface ClientDashboardProps {
  onSwitchToAdmin: () => void;
  onLogout: () => void;
}

export function ClientDashboard({ onSwitchToAdmin, onLogout }: ClientDashboardProps) {
  const [activePage, setActivePage] = useState('Dashboard');

  const quickStats = [
    { icon: Calendar, value: '0', label: 'Active Bookings', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { icon: Clock, value: '0', label: 'Total Hours Parked', color: 'text-green-600', bgColor: 'bg-green-50' },
    { icon: CreditCard, value: '₹0', label: 'Total Spent', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { icon: Star, value: '0', label: 'Reward Points', color: 'text-orange-600', bgColor: 'bg-orange-50' },
  ];

  const myVehicles = [
    { id: 1, name: 'No vehicles added', number: '--', type: 'Add your first vehicle' },
  ];

  const recentBookings: Array<{ id: string; location: string; date: string; time: string; status: string; amount: string }> = [];

  const nearbyParkings = [
    { id: 1, name: 'Connaught Place Central Parking', distance: '0.5 km', available: 0, rate: '₹50/hr', rating: 4.5 },
    { id: 2, name: 'Bandra West Parking Hub', distance: '1.2 km', available: 0, rate: '₹40/hr', rating: 4.2 },
    { id: 3, name: 'Koramangala Parking Zone', distance: '2.0 km', available: 0, rate: '₹35/hr', rating: 4.0 },
  ];

  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard':
        return (
          <div className="max-w-[1600px] mx-auto">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 mb-6 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-1">Welcome to ParkSmart!</h2>
              <p className="text-green-50 text-sm">Find and book parking spots near you instantly.</p>
              <button 
                onClick={() => setActivePage('Find Parking')}
                className="mt-4 px-6 py-2.5 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-sm"
              >
                Find Parking Now
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className={`inline-flex p-3 rounded-lg ${stat.bgColor} mb-3`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Nearby Parking */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Nearby Parking Spots</h3>
                  <button className="text-sm text-green-600 hover:text-green-700 font-medium">View All</button>
                </div>
                <div className="space-y-3">
                  {nearbyParkings.map((parking) => (
                    <div key={parking.id} className="p-4 border border-gray-200 rounded-lg hover:border-green-500 cursor-pointer transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{parking.name}</h4>
                          <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {parking.distance}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500" /> {parking.rating}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-green-600">{parking.rate}</div>
                          <div className="text-xs text-gray-500 mt-1">{parking.available} spots</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Vehicles */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">My Vehicles</h3>
                  <button className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                    <span>Add Vehicle</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {myVehicles.map((vehicle) => (
                    <div key={vehicle.id} className="p-4 border border-dashed border-gray-300 rounded-lg text-center">
                      <Car className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">{vehicle.name}</p>
                      <p className="text-xs text-gray-400 mt-1">{vehicle.type}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                  <button className="text-sm text-green-600 hover:text-green-700 font-medium">View All</button>
                </div>
                {recentBookings.length === 0 ? (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">No bookings yet</p>
                    <p className="text-sm text-gray-400 mt-1">Your booking history will appear here</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{booking.location}</h4>
                            <p className="text-sm text-gray-600 mt-1">{booking.date} • {booking.time}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              booking.status === 'Completed' ? 'bg-green-100 text-green-700' :
                              booking.status === 'Active' ? 'bg-blue-100 text-blue-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {booking.status}
                            </span>
                            <div className="text-sm font-medium text-gray-900 mt-2">{booking.amount}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-left">
                    <MapPin className="w-6 h-6 text-green-600 mb-2" />
                    <div className="font-medium text-gray-900">Find Parking</div>
                    <div className="text-xs text-gray-500 mt-1">Search nearby spots</div>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-left">
                    <Calendar className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="font-medium text-gray-900">Book in Advance</div>
                    <div className="text-xs text-gray-500 mt-1">Reserve for later</div>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-left">
                    <Car className="w-6 h-6 text-purple-600 mb-2" />
                    <div className="font-medium text-gray-900">Add Vehicle</div>
                    <div className="text-xs text-gray-500 mt-1">Register your car</div>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-left">
                    <CreditCard className="w-6 h-6 text-orange-600 mb-2" />
                    <div className="font-medium text-gray-900">Add Money</div>
                    <div className="text-xs text-gray-500 mt-1">Top up wallet</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Find Parking':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Parking</h2>
            <div className="grid gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter location or search nearby"
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Search
                  </button>
                </div>
                <MapView />
              </div>
            </div>
          </div>
        );

      case 'My Bookings':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Bookings Yet</h3>
                <p className="text-gray-500 mb-4">Start by finding a parking spot near you</p>
                <button 
                  onClick={() => setActivePage('Find Parking')}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Find Parking
                </button>
              </div>
            </div>
          </div>
        );

      case 'My Vehicles':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Vehicles</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Vehicles Added</h3>
                <p className="text-gray-500 mb-4">Add your vehicle to make bookings faster</p>
                <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Add Vehicle
                </button>
              </div>
            </div>
          </div>
        );

      case 'Parking History':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Parking History</h2>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No History Yet</h3>
                <p className="text-gray-500">Your parking history will appear here</p>
              </div>
            </div>
          </div>
        );

      case 'Payments':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payments & Wallet</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
                <div className="text-sm text-green-100 mb-2">Wallet Balance</div>
                <div className="text-4xl font-bold mb-4">₹0</div>
                <button className="px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors">
                  Add Money
                </button>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
                <div className="text-center py-6">
                  <CreditCard className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No payment methods added</p>
                  <button className="mt-3 text-sm text-green-600 font-medium">+ Add Payment Method</button>
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
                  <h3 className="font-semibold mb-3">Account Settings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span>Push Notifications</span>
                      <button className="px-4 py-1 bg-green-100 text-green-700 rounded">Enabled</button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span>Email Notifications</span>
                      <button className="px-4 py-1 bg-green-100 text-green-700 rounded">Enabled</button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span>Location Services</span>
                      <button className="px-4 py-1 bg-green-100 text-green-700 rounded">Enabled</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Help & Support':
        return (
          <div className="max-w-[1600px] mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Phone Support</div>
                      <div className="text-sm text-gray-500">+91 1800-PARK-SMART</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Email Support</div>
                      <div className="text-sm text-gray-500">support@parksmart.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQs</h3>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="font-medium">How to book a parking spot?</div>
                  </div>
                  <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="font-medium">How to cancel a booking?</div>
                  </div>
                  <div className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="font-medium">Payment & Refund Policy</div>
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
      <ClientSidebar activePage={activePage} onNavigate={setActivePage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <ClientTopbar 
          activePage={activePage} 
          onSwitchToAdmin={onSwitchToAdmin}
          onLogout={onLogout}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
