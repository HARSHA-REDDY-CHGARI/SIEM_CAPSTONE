

export default function LLMPanel({ incident }) {
  const { llm } = incident;

  return (
    <section className="llm-panel">
      <h2>LLM Reasoning</h2>
      <p><b>Attack Intent:</b> {llm.intent}</p>
      <p><b>Confidence:</b> {llm.confidence}</p>
      <p><b>Explanation:</b> {llm.explanation}</p>

      <h3>Recommended Actions</h3>
      <ul>
        {llm.actions.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </section>
  );
}
