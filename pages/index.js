import data from '../data/week-data.json';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>ATS Fallback Dashboard</h1>
      <p>Preseason Model Picks (Static Version)</p>
      <ul>
        {data.map((game, idx) => (
          <li key={idx} style={{ margin: '1rem 0' }}>
            <strong>{game.teams}</strong><br />
            Confidence: {game.confidence}%<br />
            Bet: {game.suggested_bet}<br />
            Chaos Risk: {game.chaos_risk} | Depth Gap: {game.depth_gap}<br />
            CLV Edge: {game.clv_edge}<br />
            Tape Proxy: {game.tape_proxy}<br />
            Blindspot: {game.blindspot_alert ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
}
