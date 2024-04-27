'use client'
import { Circle, MapContainer, Marker, Popup, TileLayer, Tooltip, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useState } from "react"
import { usePostStore } from "@/store"


function LocationMarker() {

  const [position, setPosition] = useState(null)
  const setLocation = usePostStore((state) => state.setLocation)
 
  const map = useMapEvents({
    click(e:any) {
      !position && map.locate()
      console.log(e)
      setPosition(e.latlng);
      map.flyTo(e.latlng,map.getZoom()) 
      setLocation(e.latlng)
    },
    
  })

  return position === null ? null : (
    <Circle center={position} radius={100} color="#ff8e00" fillColor="#ff8e00">
      <Popup>You are here</Popup>
    </Circle>
  )
}

const Map = () => {
  return (
    <MapContainer center={[-38.00042,-57.5562]} zoom={12} scrollWheelZoom={true} className="h-full w-full rounded-md">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" >OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LocationMarker />

    </MapContainer>
  )
}

export default Map