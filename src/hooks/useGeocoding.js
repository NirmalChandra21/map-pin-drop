import { useState } from "react";
import axios from "axios";

const useGeocoding = () => {
    const [address, setAddress] = useState("");

    const fetchAddress = async (lat, lng) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse`,
                {
                    params: {
                        format: "json",
                        lat,
                        lon: lng,
                    },
                }
            );
            setAddress(response.data.display_name);
        } catch (error) {
            console.error("Error fetching address:", error);
        }
    };

    return { address, fetchAddress };
};

export default useGeocoding;
