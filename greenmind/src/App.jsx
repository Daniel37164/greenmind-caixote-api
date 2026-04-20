import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadData() {
    try {
      const res = await fetch("https://greenmind-caixote-api-1.onrender.com/status");
      const json = await res.json();
      console.log("API DATA:", json);
      setData(json);
    } catch (err) {
      console.log("ERRO API:", err);
    }
  }

  loadData();
}, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🗑️ Caixote Inteligente</h1>

      {loading && <p>A carregar dados...</p>}

      {data && (
        <div>
          <p><b>Lixo:</b> {data.lixo}</p>
          <p><b>Ação:</b> {data.acao}</p>
        </div>
      )}
    </div>
  );
}

export default App;