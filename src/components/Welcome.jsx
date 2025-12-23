import { useState } from "react";

export default function Welcome({ next }) {
  const [angry, setAngry] = useState(false);

  return (
    <div className="center">
      <h1>Accept this gift? 🎁</h1>
      <img src={angry ? "src/angry-cat.png" : "src/cute-cat.png"} width="200" />
      {!angry ? (
        <div>
          <button onClick={next}>YES 💖</button>
          <button onClick={() => setAngry(true)}>NO ❌</button>
        </div>
      ) : (
        <button onClick={() => setAngry(false)}>TRY AGAIN 😾</button>
      )}
    </div>
  );
}
