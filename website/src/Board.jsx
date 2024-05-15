import { useState, useEffect } from "react";

import Card from "./Components/VesselCard";

import VesselDB from "./Services/Vessels";

function Board() {
  const [vessels, setVessels] = useState([]);

  useEffect(() => {
    async function Job() {
      const dataVessel = await VesselDB();
      setVessels(dataVessel);

    }
    Job();
    
    setInterval(Job, 2 * 60 * 1000)
    
    }, []);

  return (
    <div className="vessel-card-container">
      {
        vessels.map((vessel, i) => <Card key={"vessel-" + i} data={vessel} />)
      }
    </div>
  );
}

export default Board;
