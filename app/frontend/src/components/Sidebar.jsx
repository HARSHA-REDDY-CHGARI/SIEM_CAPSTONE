

import IncidentList from "./IncidentList";

export default function Sidebar({ incidents, onSelect }) {
  return (
    <aside className="sidebar">
      <h2>Incidents</h2>
      <IncidentList incidents={incidents} onSelect={onSelect} />
    </aside>
  );
}
