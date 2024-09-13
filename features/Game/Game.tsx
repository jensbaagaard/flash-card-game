import React, { useState, useEffect } from "react";
import { flashcards } from "../flashcards";

interface Flashcard {
  "question-title": string;
  "wrong-answers": string[];
  "right-answer": string[];
}

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
    // Get the remaining unseen cards
    const unseenCards = flashcards
      .map((_, index) => index)
      .filter((index) => !seenCards.includes(index));

    // If all cards have been seen, reset the seenCards array
    if (unseenCards.length === 0) {
      setSeenCards([]);
      return Math.floor(Math.random() * flashcards.length);
    }

    // Select a random unseen card
    const randomUnseenIndex =
      unseenCards[Math.floor(Math.random() * unseenCards.length)];

    // Add this card to the seenCards list
    setSeenCards([...seenCards, randomUnseenIndex]);

    return randomUnseenIndex;
  };

  const handleNextCard = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentCardIndex(getNextCardIndex());
  };

  const isCorrectAnswer = selectedAnswer === currentCard["right-answer"][0];

  return (
    <div style={{ marginTop: "32px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>{currentCard["question-title"]}</h2>
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
          <div>
            <p>{isCorrectAnswer ? "Correct!" : "Wrong Answer"}</p>
            <button onClick={handleNextCard}>Next Question</button>
          </div>
        )}
        <div>{seenCards.length + " / " + flashcards.length}</div>
      </div>
    </div>
  );
};
