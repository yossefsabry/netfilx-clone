import "../App.css";
import { useState, useEffect } from "react";

import requests from "../data/data";
import Row from "../components/Row";
import Hero from "../components/Hero";

function Home() {

    const AllData = requests.map((row) => {

        return (
            <Row key={row.id} name={row.title} url={row.fetchUrl} isLargeRow={row.isLargeRow} />
        )
    });

    return (

            <>
                <Hero />
                <div className="container__rows">{AllData}</div>
            </>
    );
}

export default Home;
