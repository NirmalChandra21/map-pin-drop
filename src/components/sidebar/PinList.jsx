import React from "react";
import "./PinList.css";

function PinList({
    pins,
    map,
    setPins,
    selectedPinIndex,
    setSelectedPinIndex,
}) {
    const handlePinClick = (pin, index) => {
        if (map) {
            map.flyTo([pin.lat, pin.lng], 13, {
                duration: 1.5,
            });
        }
        setSelectedPinIndex(index);
    };

    const handleDelete = (index) => {
        const updatedPins = pins.filter((_, i) => i !== index);
        setPins(updatedPins);
        localStorage.setItem("pins", JSON.stringify(updatedPins));
        if (index === selectedPinIndex) {
            setSelectedPinIndex(null);
        }
    };

    return (
        <div className="pin-list">
            <h2>Saved Pins</h2>
            <ul>
                {pins.map((pin, idx) => (
                    <li key={idx} className="pin-item">
                        <div
                            onClick={() => handlePinClick(pin, idx)}
                            className="pin-details"
                        >
                            <strong>Remarks:</strong> {pin.remarks}
                            <br />
                            <strong>Address:</strong> {pin.address}
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(idx);
                            }}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PinList;
