import React from 'react';
import { MapPin, User } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AreaInfoCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Area Information</h3>
      
      {/* Parking Image */}
      <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 h-48">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80"
          alt="Parking Area"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Parking Info */}
      <div className="space-y-4">
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Connaught Place Central Parking</h4>
          <div className="flex items-start space-x-2 text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
            <span className="text-sm">Block A, Connaught Place, New Delhi, Delhi 110001</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <span className="text-sm text-gray-600">Current Status</span>
          <StatusBadge status="normal" />
        </div>

        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <span className="text-sm text-gray-600">Owner</span>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-900">Rajesh Kumar</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <span className="text-sm text-gray-600">Operating Hours</span>
          <span className="text-sm font-medium text-gray-900">24/7</span>
        </div>

        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <span className="text-sm text-gray-600">Rate per Hour</span>
          <span className="text-sm font-medium text-gray-900">₹50</span>
        </div>
      </div>
    </div>
  );
}
