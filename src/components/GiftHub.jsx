import Credits from "./Credits";

export default function GiftHub({ open, visited }) {
  return (
    <div className="hub">
      <h2>Pick your gifts 💝</h2>

      <div className="gift-row">
        <img src= {`/ananya-birthday/assets/g1.png`} onClick={() => open("gift1")} />
        <img src={`/ananya-birthday/assets/g2.png`} onClick={() => open("gift2")} />
        <img src={`/ananya-birthday/assets/g3.png`} onClick={() => open("gift3")} />
      </div>

      {visited.length === 3 && <Credits />}
    </div>
  );
}
