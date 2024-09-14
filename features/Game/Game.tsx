import React, { useState, useEffect } from "react";
import { flashcards, Flashcard } from "../flashcards";

function scrambleArray(array: any[], value: string) {
  const scrambledArray = [...array];
  const randomIndex = Math.floor(Math.random() * (scrambledArray.length + 1));
  scrambledArray.splice(randomIndex, 0, value);
  return scrambledArray;
}

export const Game: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [seenCards, setSeenCards] = useState<number[]>([]);

  const currentCard: Flashcard = flashcards[currentCardIndex];

  useEffect(() => {
    const shuffled = scrambleArray(
      currentCard["wrong-answers"],
      currentCard["right-answer"][0]
    );
    setShuffledAnswers(shuffled);
  }, [currentCardIndex]); // Reshuffle answers whenever the card changes

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const getNextCardIndex = () => {
    const unseenCards = flashcards
      .map((_, index) => index)
      .filter((index) => !seenCards.includes(index));

    if (unseenCards.length === 0) {
      setSeenCards([]);
      return Math.floor(Math.random() * flashcards.length);
    }

    const randomUnseenIndex =
      unseenCards[Math.floor(Math.random() * unseenCards.length)];

    setSeenCards([...seenCards, randomUnseenIndex]);

    return randomUnseenIndex;
  };

  const handleNextCard = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentCardIndex(getNextCardIndex());
  };

  const isCorrectAnswer = selectedAnswer === currentCard["right-answer"][0];

  function randomEmoji(): string {
    const emojis = ["🔥", "🚀", "🌟", "🎉", "🎊", "🎈", "🎇", "🥳"];

    return emojis[seenCards.length % emojis.length];
  }

  return (
    <div style={{ marginTop: "32px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3 style={{ color: "gray" }}>#{currentCardIndex}</h3>
        <h2 style={{ padding: "0 8px 0 8px" }}>
          {currentCard["question-title"]}
        </h2>
        {shuffledAnswers.map((answer) => (
          <button
            key={answer}
            onClick={() => handleAnswerClick(answer)}
            disabled={showResult}
            style={{
              display: "block",
              margin: "8px auto",
              padding: "10px",
              backgroundColor: showResult
                ? answer === currentCard["right-answer"][0]
                  ? "green"
                  : selectedAnswer === answer
                  ? "red"
                  : "gray"
                : "#242323",
            }}
          >
            {answer}
          </button>
        ))}
        {showResult && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p>{isCorrectAnswer ? "Korrekt!" : "Forkert svar"}</p>
            <button
              style={{
                display: "block",
                margin: "8px auto",
                padding: "10px",
              }}
              onClick={handleNextCard}
            >
              {randomEmoji()} Næste spørgsmål {randomEmoji()}
            </button>
          </div>
        )}
        <div>{seenCards.length + " / " + flashcards.length}</div>
      </div>
    </div>
  );
};
