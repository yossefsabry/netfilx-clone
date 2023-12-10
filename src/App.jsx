import "./App.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import { Routes, Route, useParams } from "react-router-dom"
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Simulate an asynchronous task (e.g., fetching data)
    const fetchData = async () => {
      try {
        // Perform your asynchronous tasks here
        // For example, fetching data from an API
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();

        // Set the data and mark loading as complete
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:');
        setLoading(false);
      }
    };

    fetchData(); // Call the function to initiate the loading process
  }, []);

  return (
    <>
      <Header />
      {loading ? (<Loader />) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":userId" element={<Product />} />
          </Routes>
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
