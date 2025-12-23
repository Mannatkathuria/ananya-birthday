import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const questions = [
  {
    q: "Who is amazing?",
    options: ["You 💖", "Obviously You 😏", "You 💖", "Obviously You 😏"],
    reaction: "Correct 😌✨",
  },
  {
    q: "Who deserves all the happiness?",
    options: ["You 🌸", "You 💫", "Still You 💖", "Always You 😌"],
    reaction: "Obviously 😄💖",
  },
  {
    q: "Who makes life brighter?",
    options: ["You ☀️", "You ✨", "You 💕", "Only You 😄"],
    reaction: "YESSS 🥹🌈",
  },
];

export default function GiftThree({ back, mark }) {
  const [index, setIndex] = useState(0);
  const [showReaction, setShowReaction] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    mark();
  }, []);

  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleAnswer = () => {
    if (locked) return;

    setLocked(true);
    setShowReaction(true);

    setTimeout(() => {
      setShowReaction(false);

      if (index < questions.length - 1) {
        setIndex(index + 1);
        setLocked(false);
      } else {
        fireConfetti(); // 🎉 FINAL
      }
    }, 1000); // 1 second delay
  };

  return (
    <div className="overlay">
      {/* Progress */}
      <div className="progress">
        {index + 1}/{questions.length}
      </div>

      {/* Reaction overlay */}
      {showReaction && (
        <div className="reaction">
          {questions[index].reaction}
        </div>
      )}

      {/* Question */}
      {!showReaction && (
        <>
          <h2>{questions[index].q}</h2>

          <div className="options">
            {questions[index].options.map((opt, i) => (
              <button key={i} onClick={handleAnswer} disabled={locked}>
                {opt}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Back button */}
      {index === questions.length - 1 && !showReaction && (
        <button className="back-btn" onClick={back}>
          Back to Gifts 🎁
        </button>
      )}
    </div>
  );
}
