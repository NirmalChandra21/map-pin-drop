import React, { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import Leaflet
import PinForm from "./PinForm";
import useGeocoding from "../../hooks/useGeocoding";

function MapEvents({ setPins, pins, setSelectedPosition }) {
    const [selectedPosition, setSelectedPositionState] = useState(null);
    const { address, fetchAddress } = useGeocoding();

    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setSelectedPosition(e.latlng); // Update the selected position
            setSelectedPositionState(e.latlng); 
            fetchAddress(lat, lng);
        },
    });

    return selectedPosition ? (
        <Marker
            position={selectedPosition}
            icon={L.divIcon({

                html: `<div style="font-size: 24px; color: black;">📍</div>`, 
                className: "",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
            })}
        >
            <Popup>
                <PinForm
                    position={selectedPosition}
                    address={address}
                    setPins={setPins}
                    pins={pins}
                    setSelectedPosition={setSelectedPosition} 
                />
            </Popup>
        </Marker>
    ) : null;
}

export default MapEvents;
