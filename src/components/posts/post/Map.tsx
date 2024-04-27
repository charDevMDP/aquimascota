'use client'
import { Circle, MapContainer, Marker, Popup, TileLayer, Tooltip, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


const Map = ({ locationmap }:{ locationmap:{ lat:number, lng:number }}) => {

  console.log('LOC ', locationmap)
  return (
    <MapContainer center={[locationmap.lat,locationmap.lng]} zoom={14} scrollWheelZoom={true} className="h-full w-full rounded-md">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    <Circle  center={[locationmap.lat, locationmap.lng]} radius={250} color="#ff8e00" fillColor="#ff8e00">
      <Popup>You are here</Popup>
    </Circle>

    </MapContainer>
  )
}

export default Map