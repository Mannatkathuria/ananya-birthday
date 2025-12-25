import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { logAnswer } from "../logAnswer.js";

const questions = [
  {
    q: "Who is most annoying?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: ""
  },
  {
    q: "Who is most talkative?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: ""
  },
  {
    q: "Who is most nerdy?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: ""
  },
  {
    q: "Who is least nerdy?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: ""
  },
  {
    q: "Who do you trust the most?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: ""
  },
  {
    q: "Who is most crazy?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: ""
  },
  {
    q: "Who is most caring?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: ""
  },
  {
    q: "Who puts everyone in trouble?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: ""
  },
  {
    q: "Who is cutest?",
    options: ["You", "You only", "Obviously You", "Ofcourse You"],
    reaction: ""
  },
];

export default function GiftThree({ back, mark }) {
  const [index, setIndex] = useState(0);
  const [showReaction, setShowReaction] = useState(false);
  const [locked, setLocked] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    mark();
  }, []);

  const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleAnswer = (answer) => {
    if (locked) return;

    setLocked(true);

    // 🔥 LOG ANSWER
    logAnswer( index+1, questions[index].q, answer);

    // Show reaction briefly
    // setShowReaction(true);

    setTimeout(() => {
      // setShowReaction(false);

      if (index < questions.length - 1) {
        setIndex((prev) => prev + 1);
        setLocked(false);
      } else {
        setFinished(true);
        fireConfetti();
      }
    }, 100);
  };

  return (
    <div className="overlay">
      {/* Progress */}
      <div className="progress">
        {finished ? questions.length : index + 1}/{questions.length}
      </div>

      {/* Reaction */}
      {showReaction && (
        <div className="reaction">
          {questions[index].reaction}
        </div>
      )}

      {/* Question */}
      {!showReaction && !finished && (
        <>
        <p> This is all anonymous, no one will know what you've choosen, its just to count your score and give you prize accordingly</p>
          <h2>{questions[index].q}</h2>

          <div className="options">
            {questions[index].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                disabled={locked}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Finish Screen */}
      {finished && (
        <>
          <h2>All done 😄🎉</h2>
          <p>You survived the interrogation 💖</p>
          <h3>You won a <h2>LOLIPOP</h2></h3>
          <img className="lolipop" src="/ananya-birthday/assets/lolipop.png" alt="lolipop" />

          <button className="back-btn" onClick={back}>
            Back to Gifts 🎁
          </button>
        </>
      )}
    </div>
  );
}
