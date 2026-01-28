export default function IncidentList({ incidents, onSelect }) {
  return (
    <>
      {incidents.map((inc) => (
        <div
          key={inc.id}
          className={`incident-item ${inc.severity.toLowerCase()}`}
          onClick={() => onSelect(inc)}
        >
          <strong>{inc.id}</strong>
          <span>{inc.severity}</span>
        </div>
      ))}
    </>
  );
}
