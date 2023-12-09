import "./App.css";
import { useState, useEffect } from "react";
import requests from "./data";
import Row from "./Row";
import Hero from "./Hero";
import img1 from "./Netflix-avatar.png";

function App() {
  const [headerBg, setHeaderBg] = useState(false);
  const [loading, setLoading] = useState(true);

  const headerScorll = () => {
    if (window.scrollY > 140) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) with a timeout
    const fetchData = async () => {
      // Simulate fetching data for 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Set loading to false once the data is fetched
      setLoading(false);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", headerScorll);

    // Fetch data (or perform other asynchronous tasks)
    fetchData();

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", headerScorll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

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
          <header className={`${headerBg ? 'header__bg' : ''}`}>
            <h2>Netflix</h2>
            <div className="image_loader_header">
              <img src={img1} alt="img_user" />
            </div>
          </header>
          <Hero />
          <div className="container__rows">{AllData}</div>
        </>
      )}
    </>
  );
}

export default App;
