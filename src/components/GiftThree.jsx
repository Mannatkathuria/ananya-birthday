import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { logAnswer } from "../logAnswer";

const questions = [
  {
    q: "Who is most annoying?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: "😈 hehe"
  },
  {
    q: "Who is most talkative?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: "🗣️ nonstop!"
  },
  {
    q: "Who is most crazy?",
    options: ["Anushka", "Bhoomika", "Mannat", "Amam"],
    reaction: "🤪 absolutely"
  },
  {
    q: "Who is cutest?",
    options: ["You", "You only", "Obviously You", "Of course You"],
    reaction: "💖 correct answer"
  }
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
    logAnswer({
      question: questions[index].q,
      answer: answer
    });

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
    }, 100); // reaction visible for 0.8s
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

          <button className="back-btn" onClick={back}>
            Back to Gifts 🎁
          </button>
        </>
      )}
    </div>
  );
}
