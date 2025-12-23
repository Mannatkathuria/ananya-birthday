import { useEffect, useState } from "react";

const text = `Happy Birthday Ananya
here's some mixed opinions about you from everyons:
(we'll add content here)`;

export default function GiftOne({ back, mark }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    mark();
    let i = 0;
    const interval = setInterval(() => {
      setDisplay((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 20); // FAST typing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overlay">
      <pre className="typewriter">{display}</pre>
      <button onClick={back}>Back 🎀</button>
    </div>
  );
}
