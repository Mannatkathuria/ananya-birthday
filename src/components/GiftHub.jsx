import Credits from "./Credits";

export default function GiftHub({ open, visited }) {
  return (
    <div className="hub">
      <h2>Pick your gifts 💝</h2>

      <div className="gift-row">
        <img src="/anaya-birthday/g1.png" onClick={() => open("gift1")} />
        <img src="/anaya-birthday/g2.png" onClick={() => open("gift2")} />
        <img src="/anaya-birthday/g3.png" onClick={() => open("gift3")} />
      </div>

      {visited.length === 3 && <Credits />}
    </div>
  );
}
