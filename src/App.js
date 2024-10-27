import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Map from "./components/map/Map";
import Sidebar from "./components/sidebar/Sidebar";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles/App.css";

function App() {
    const [pins, setPins] = useLocalStorage("pins", []);
    const [mapInstance, setMapInstance] = useState(null);
    const [selectedPinIndex, setSelectedPinIndex] = useState(null);
    const [selectedPosition, setSelectedPosition] = useState(null); // Define selectedPosition state

    return (
        <Layout>
            <div className="app">
                <Map
                    pins={pins}
                    setPins={setPins}
                    setMapInstance={setMapInstance}
                    selectedPinIndex={selectedPinIndex}
                    setSelectedPosition={setSelectedPosition} // Pass down setSelectedPosition
                />
                <Sidebar
                    pins={pins}
                    map={mapInstance}
                    setPins={setPins}
                    selectedPinIndex={selectedPinIndex}
                    setSelectedPinIndex={setSelectedPinIndex}
                />
            </div>
        </Layout>
    );
}

export default App;
