import "../App.css";
import { useState, useEffect } from "react";

import requests from "../data/data";
import Row from "../components/Row";
import Hero from "../components/Hero";

function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous operation (e.g., fetching data) with a timeout
        const fetchData = async () => {
            // Simulate fetching data for 2 seconds
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Set loading to false once the data is fetched
            setLoading(false);
        }

        // Call fetchData to initiate the asynchronous operation
        fetchData();
    }, [])

    // Return all data
    const AllData = requests.map((row) => {
        return <Row key={row.id} name={row.title} url={row.fetchUrl} isLargeRow={row.isLargeRow} />;
    });

    return (
        <>
            {loading ? (
                // Render loading spinner or placeholder while data is loading
                <div className="loading-spinner">
                    <div className="spann"></div>
                </div>
            ) : (
                // Render content once data is loaded
                <>
                    <Hero />
                    <div className="container__rows">{AllData}</div>
                </>
            )}
        </>
    );
}

export default Home;
