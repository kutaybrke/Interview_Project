"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [squares, setSquares] = useState<boolean[]>(Array(9).fill(false));
  const [history, setHistory] = useState<boolean[][]>([]);

  const onBackButtonClick = () => {
    if (history.length > 0) {
      const previousSquares = history[history.length - 1];
      setSquares(previousSquares);
      setHistory(history.slice(0, -1));
    } else {
      alert("Geri alınacak bir hamle yok.");
    }
  };

  const onSquareClick = (index: number) => {
    const newSquares = squares.slice();
    newSquares[index] = !newSquares[index];
    setHistory([...history, squares]);
    setSquares(newSquares);
  };

  return (
    <main className={styles.main}>
      <button className={styles.backButton} onClick={onBackButtonClick}>
        GERİ AL
      </button>
      <div className={styles.squareContainer}>
        {squares.map((isClicked, index) => (
          <div
            key={index}
            className={styles.square}
            onClick={() => onSquareClick(index)}
          >
            {isClicked && <span className={styles.xMark}>X</span>}
          </div>
        ))}
      </div>
    </main>
  );
}
