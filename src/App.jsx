import { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import GiftHub from "./components/GiftHub";
import GiftOne from "./components/GiftOne";
import GiftTwo from "./components/GiftTwo";
import GiftThree from "./components/GiftThree";

export default function App() {
  const [page, setPage] = useState("welcome");
  const [visited, setVisited] = useState([]);

  const markVisited = (gift) => {
    if (!visited.includes(gift)) {
      setVisited([...visited, gift]);
    }
  };

  if (page === "welcome") return <Welcome next={() => setPage("hub")} />;

  if (page === "hub")
    return <GiftHub open={setPage} visited={visited} />;

  if (page === "gift1")
    return <GiftOne back={() => setPage("hub")} mark={() => markVisited("gift1")} />;

  if (page === "gift2")
    return <GiftTwo back={() => setPage("hub")} mark={() => markVisited("gift2")} />;

  if (page === "gift3")
    return <GiftThree back={() => setPage("hub")} mark={() => markVisited("gift3")} />;

  return null;
}
