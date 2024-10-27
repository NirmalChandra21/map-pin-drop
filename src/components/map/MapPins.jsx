import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import "./MapPins.css";

function MapPins({ pins, selectedPinIndex }) {
    const getIcon = (isSelected) =>
        L.divIcon({
            html: `<img src="${markerIconPng}" class="${
                isSelected ? "red-marker-icon" : ""
            }" alt="marker icon" />`,
            className: "",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
        });

    return (
        <>
            {pins.map((pin, idx) => (
                <Marker
                    key={idx}
                    position={[pin.lat, pin.lng]}
                    icon={getIcon(idx === selectedPinIndex)}
                >
                    <Popup>
                        <strong>Remarks:</strong> {pin.remarks}
                        <br />
                        <strong>Address:</strong> {pin.address}
                    </Popup>
                </Marker>
            ))}
        </>
    );
}

export default MapPins;
