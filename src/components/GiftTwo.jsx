import { useState } from "react";
// import "./GiftTwo.css"; // make sure CSS is in separate file or in your main CSS

const cardsData = [
  { img: "/ananya-birthday/assets/11.jpeg", text: "Badmiton khel hi aaye the atlest 😂" },
  { img: `/ananya-birthday/assets/10.jpeg`, text: "Bin baat ki holi .🥲" },
  { img: `/ananya-birthday/assets/17.jpeg`, text: "Roomies first meet 😉" },
  { img: `/ananya-birthday/assets/9.jpeg`, text: "Excpected se zyada hi acha perform kra 😂" },
  { video: `/ananya-birthday/assets/14.mp4`, text: "Guard aunty ne bhga diya 😂" },
  { img: `/ananya-birthday/assets/8.jpeg`, text: "Almost kaand krdiya 😭" },
  { img: `/ananya-birthday/assets/7.jpeg`, text: "Finally river pe to ja hi aaye 💖" },
  { img: `/ananya-birthday/assets/4.jpeg`, text: "Upar se Annanu Mandir bhi ja aaye 😂" },
  { img: `/ananya-birthday/assets/6.jpeg`, text: "BTW it was truly one of my best days of life 🌸" },
  { img: `/ananya-birthday/assets/5.jpeg`, text: "Sorry uss din tumahre jaw pe boht gnda maara 🥲" },
  { img: `/ananya-birthday/assets/12.jpeg`, text: "Pehli baar kisi me kuch jeete 🥲" },
  { img: `/ananya-birthday/assets/16.jpeg`, text: "Nadi paar dusri baar 😂" },
  { img: `/ananya-birthday/assets/3.jpeg`, text: "That bekaar si anchoring 😂" },
  { img: `/ananya-birthday/assets/2.jpeg`, text: "Finally cats mil gyi 🥹" },
  { img: `/ananya-birthday/assets/1.jpeg`, text: "Heels me naachna tough nhi tha? 😂" },
  { img: `/ananya-birthday/assets/15.jpeg`, text: "Eshu ko telugu gang se khich liya 😂" },
  { video: "/ananya-birthday/assets/13.mp4", text: "asli miss fresher toh tum hi thi 😉"}
];

export default function GiftTwo({ back, mark }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flying, setFlying] = useState(false);

  mark();

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

    {/* Next card (behind) */}
    <div className="card next">
      {nextCard.img && (
        <img src={nextCard.img} alt="next memory" />
      )}

      {nextCard.video && (
        <video
          src={nextCard.video}
          muted
          loop
          autoPlay
          playsInline
        />
      )}

      <p>{nextCard.text}</p>
    </div>

    {/* Hint */}
    <p className="hint">Click card for next 💫</p>

    {/* Current card */}
    <div
      className={`card ${flying ? "fly" : ""}`}
      onClick={flipCard}
    >
      {currentCard.img && (
        <img src={currentCard.img} alt="current memory" />
      )}

      {currentCard.video && (
        <video
          src={currentCard.video}
          muted
          loop
          autoPlay
          playsInline
        />
      )}

      <p>{currentCard.text}</p>
    </div>

    {/* Close */}
    <button className="close1" onClick={back}>✕</button>

  </div>
);
}