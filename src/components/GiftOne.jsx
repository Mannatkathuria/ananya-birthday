import { useEffect, useState } from "react";

const text = `Dear Ananya 💖
You are warmth, chaos, kindness, and laughter,
all wrapped into one beautiful soul.
This is just a reminder that you are loved
more than words can ever say ✨`;

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
