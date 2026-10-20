"use client";

import { useEffect } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function FitMarkers({ courier, destination }) {
  const map = useMap();

  useEffect(() => {
    map.fitBounds(
      [
        [courier.latitude, courier.longitude],
        [destination.latitude, destination.longitude],
      ],
      { padding: [40, 40] }
    );
  }, [map, courier, destination]);

  return null;
}

const courierIcon = L.divIcon({
  className: "tracking-marker",
  html: '<span style="font-size:26px">🛵</span>',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const destinationIcon = L.divIcon({
  className: "tracking-marker",
  html: '<span style="font-size:26px">📍</span>',
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

export default function DeliveryMap({ courier, destination }) {
  return (
    <MapContainer
      center={[destination.latitude, destination.longitude]}
      zoom={14}
      scrollWheelZoom={false}
      style={{
        height: "380px",
        width: "100%",
        borderRadius: "16px",
        zIndex: 0,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <FitMarkers courier={courier} destination={destination} />

      <Marker
        position={[courier.latitude, courier.longitude]}
        icon={courierIcon}
      >
        <Popup>Demo courier location</Popup>
      </Marker>

      <Marker
        position={[destination.latitude, destination.longitude]}
        icon={destinationIcon}
      >
        <Popup>Delivery destination</Popup>
      </Marker>
    </MapContainer>
  );
}
