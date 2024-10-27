import React from "react";
import PinList from "./PinList";
import "./Sidebar.css";

function Sidebar({
    pins,
    map,
    setPins,
    selectedPinIndex,
    setSelectedPinIndex,
}) {
    return (
        <div className="sidebar">
            <PinList
                pins={pins}
                map={map}
                setPins={setPins}
                selectedPinIndex={selectedPinIndex} // Pass selectedPinIndex to PinList
                setSelectedPinIndex={setSelectedPinIndex}
            />
        </div>
    );
}

export default Sidebar;
