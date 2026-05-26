import { Fragment } from "react";
import HealthCard from "./HealthCard";
import { useState, useEffect } from "react";

export default function Navbar() {

    const [health, setHealth] = useState(null)


    async function fetchHealth() {


        const response = await fetch(
            `https://moz-demog-api.vercel.app/health`);

        const result = await response.json();
        setHealth(result);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            fetchHealth();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    if (!health) return <p>Loading...</p>
    return (
        <Fragment>
            <HealthCard 
            status={health.status}
            uptime={health.uptime}
            timestamp={health.timestamp}

            />
        </Fragment>
    )
}