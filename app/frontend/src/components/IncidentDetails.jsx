
export default function IncidentDetails({ incident }) {
  return (
    <section className="incident-details">
      <h2>Incident Details</h2>
      <p><b>User:</b> {incident.user}</p>
      <p><b>Severity:</b> {incident.severity}</p>
      <p>
        <b>Anomaly Score:</b>{" "}
        <span className="score">{incident.anomalyScore}</span>
      </p>
      <p><b>Summary:</b> {incident.summary}</p>
    </section>
  );
}
