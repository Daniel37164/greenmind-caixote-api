import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  console.log("USEEFFECT EXECUTOU");

  fetch("https://greenmind-caixote-api-1.onrender.com/status")
    .then((res) => {
      console.log("STATUS:", res.status);
      return res.json();
    })
    .then((data) => {
      console.log("DATA RECEBIDA:", data);
      setData(data);
      setLoading(false);
    })
    .catch((err) => {
      console.log("ERRO FETCH:", err);
      setLoading(false);
    });
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