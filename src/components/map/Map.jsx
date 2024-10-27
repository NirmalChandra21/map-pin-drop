import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MapEvents from "./MapEvents";
import MapPins from "./MapPins";
import "leaflet/dist/leaflet.css";
import "./Map.css";

function Map({
    pins,
    setPins,
    setMapInstance,
    selectedPinIndex,
    setSelectedPosition,
}) {
    // Added setSelectedPosition
    return (
        <div className="map-container">
            <MapContainer
                center={[20, 0]}
                zoom={2}
                style={{ height: "100%", width: "100%" }}
                whenCreated={(map) => setMapInstance(map)}
            >
                <TileLayer
                    attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEvents
                    setPins={setPins}
                    pins={pins}
                    setSelectedPosition={setSelectedPosition}
                />{" "}
                {/* Pass setSelectedPosition */}
                <MapPins pins={pins} selectedPinIndex={selectedPinIndex} />
            </MapContainer>
        </div>
    );
}

export default Map;
