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
            setSelectedPositionState(e.latlng); // Update local state for rendering the marker
            fetchAddress(lat, lng);
        },
    });

    return selectedPosition ? (
        <Marker
            position={selectedPosition}
            icon={L.divIcon({
                // Use emoji directly here
                html: `<div style="font-size: 24px; color: black;">📍</div>`, // Pin emoji
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
                    setSelectedPosition={setSelectedPosition} // Pass setSelectedPosition to PinForm
                />
            </Popup>
        </Marker>
    ) : null;
}

export default MapEvents;
