import { useState } from "react";
// import "./GiftTwo.css"; // make sure CSS is in separate file or in your main CSS

const cardsData = [
  { img: "src/11.jpeg", text: "Badmitontoh khel hi aaye the atlest 😂" },
  { img: "src/10.jpeg", text: "Bin baat ki holi .🥲" },
  { img: "src/9.jpeg", text: "Excpected se zyada hi acha perform kra 😂" },
  { img: "src/8.jpeg", text: "Almost kaand krdiya 😭" },
  { img: "src/7.jpeg", text: "Finally river pe to ja hi aaye 💖" },
  { img: "src/4.jpeg", text: "Upar se Annanu Mandir bhi ja aaye 😂" },
  { img: "src/6.jpeg", text: "BTW it was truly one of my best days of life 🌸" },
  { img: "src/5.jpeg", text: "Sorry uss din tumahre jaw pe boht gnda maara 🥲" },
  { img: "src/12.jpeg", text: "Pehli baar kisi me kuch jeete 🥲" },
  { img: "src/3.jpeg", text: "That bekaar si anchoring 😂" },
  { img: "src/2.jpeg", text: "Finally cats mil gyi 🥹" },
  { img: "src/1.jpeg", text: "Heels me naachna tough nhi tha? 😂" }
];

export default function GiftTwo({ back }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flying, setFlying] = useState(false);

  const flipCard = () => {
    setFlying(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % cardsData.length);
      setFlying(false);
    }, 600); // match animation duration
  };

  const currentCard = cardsData[currentIndex];
  const nextCard = cardsData[(currentIndex + 1) % cardsData.length];

  return (
    <div className="card-container">
      {/* Next card behind */}
      <div className="card next">
        <img src={nextCard.img} alt="" />
        <p>{nextCard.text}</p>
      </div>

      {/* Current card */}
      <div className={`card ${flying ? "fly" : ""}`} onClick={flipCard}>
        <img src={currentCard.img} alt="" />
        <p>{currentCard.text}</p>
      </div>

      <button className="close1" onClick={back}>✕</button>
    </div>
  );
}
