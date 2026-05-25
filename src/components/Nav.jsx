import { Fragment } from "react";
import HealthCard from "./HealthCard";
import { useState, useEffect } from "react";

export default function Navbar() {

    const [health, setHealth] = useState(null)


    async function fetchHealth() {


        const response = await fetch(
            `http://localhost:3000/health`);


        console.log(response)
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