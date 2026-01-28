import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet using CDN URLs
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface ParkingLocation {
  id: number;
  name: string;
  address: string;
  position: [number, number];
  available: number;
  total: number;
}

const parkingLocations: ParkingLocation[] = [
  {
    id: 1,
    name: 'Connaught Place Central Parking',
    address: 'Block A, Connaught Place, New Delhi',
    position: [28.6315, 77.2167],
    available: 156,
    total: 250,
  },
  {
    id: 2,
    name: 'Bandra West Parking Hub',
    address: 'Linking Road, Bandra West, Mumbai',
    position: [19.0596, 72.8295],
    available: 89,
    total: 180,
  },
  {
    id: 3,
    name: 'Koramangala Parking Zone',
    address: '5th Block, Koramangala, Bangalore',
    position: [12.9352, 77.6245],
    available: 45,
    total: 120,
  },
];

export function MapView() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Delete existing icon to prevent caching issues
    delete (L.Icon.Default.prototype as any)._getIconUrl;
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-200" style={{ zIndex: 0 }}>
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: '500px', width: '100%', zIndex: 0 }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {parkingLocations.map((location) => (
          <Marker key={location.id} position={location.position}>
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-gray-900 mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                <div className="flex gap-3 text-sm">
                  <span className="text-green-600 font-medium">
                    {location.available} Available
                  </span>
                  <span className="text-gray-600">{location.total} Total</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
