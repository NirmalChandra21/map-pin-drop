import React, { useState } from "react";
import "./PinForm.css";

function PinForm({ position, address, setSelectedPosition, setPins, pins }) {
    const [remarks, setRemarks] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const { lat, lng } = position;

        const newPin = {
            lat,
            lng,
            remarks,
            address, // Use the fetched address
        };

        const updatedPins = [...pins, newPin];
        setPins(updatedPins);
        localStorage.setItem("pins", JSON.stringify(updatedPins)); // Optional: Save to localStorage
        setSelectedPosition(null); // Close the popup
    };

    return (
        <form onSubmit={handleSubmit} className="pin-form">
            <label>
                Remarks:
                <input
                    type="text"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    required
                />
            </label>
            <label>
                Address:
                <input
                    type="text"
                    value={address}
                    readOnly // Display the fetched address as read-only
                />
            </label>
            <button type="submit">Save Pin</button>
        </form>
    );
}

export default PinForm;
