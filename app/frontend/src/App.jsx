import { useState } from "react";
import { incidents } from "./data/mockIncidents";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import IncidentDetails from "./components/IncidentDetails";
import LLMPanel from "./components/LLMPanel"
import "./styles/main.css"

function App() {
  const [selectedIncident, setSelectedIncident] = useState(incidents[0]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar
          incidents={incidents}
          onSelect={setSelectedIncident}
        />
        <IncidentDetails incident={selectedIncident} />
        <LLMPanel incident={selectedIncident} />
      </div>
    </div>
  );
}

export default App;
