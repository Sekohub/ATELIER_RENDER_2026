import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://atelier-render-2026-3zq1.onrender.com/")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>React + Flask + PostgreSQL 🚀</h1>
      <p>{message}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
