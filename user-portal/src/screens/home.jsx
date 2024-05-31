// import image1 from 'image1.webp'
import Property from "../components/property.jsx";

import NavBar from "../components/navBar.jsx";

import { useEffect, useState } from "react";
import { getProperties } from "../services/property";

export default function Home() {
  const [properties, setProperties] = useState("");

  const loadProperties = async () => {
    const result = await getProperties();
    if (result["status"] === "success") {
      setProperties(result["data"]);
    }
  };

  useEffect(() => {
    loadProperties();
    console.log(loadProperties);
  }, []);

  return (
    <div className="bg-dark" style={{ height: "10000px" }}>
      {/* <div> */}
      <NavBar />
      <div className="row">
        <div className="col-1">
          <div className="video-container"></div>
        </div>

        <div className="col-10">
          <h1 style={{ color: "darkred" }}>Home</h1>
          <div class="d-flex justify-content-center">
          <Property />
          <Property />
          </div>
          
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}
