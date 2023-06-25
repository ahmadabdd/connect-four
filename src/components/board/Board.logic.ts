import { useState } from "react";

// cookies
import { useCookies } from "react-cookie";

// types
import { Token } from "./Board.types";

export const useLogic = () => {
  const ROWS = 6;
  const COLS = 7;

  const initialBoard: Token[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => null)
  );

  const [board, setBoard] = useState<Token[][]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Token>("X");
  const [winner, setWinner] = useState<Token | null>(null);
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
  const [cookie] = useCookies(["names"]);

  const handleMove = (col: number) => {
    if (winner || board[0][col]) return;

    const updatedBoard = [...board];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!updatedBoard[row][col]) {
        updatedBoard[row][col] = currentPlayer;
        break;
      }
    }

    setBoard(updatedBoard);
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    checkForWin(updatedBoard);
  };

  const checkForWin = (currentBoard: Token[][]) => {
    const directions: [number, number][] = [
      [0, 1], // horizontal
      [1, 0], // vertical
      [1, 1], // diagonal /
      [1, -1], // diagonal \
    ];

    const isFull = currentBoard[0].every((cell) => cell !== null);

    if (isFull) {
      setWinner("Tie");
      return;
    }

    const checkDirection = (
      row: number,
      col: number,
      direction: [number, number]
    ): boolean => {
      const [dRow, dCol] = direction;
      const token = currentBoard[row][col];

      for (let i = 1; i < 4; i++) {
        const newRow = row + i * dRow;
        const newCol = col + i * dCol;
        if (
          newRow < 0 ||
          newRow >= ROWS ||
          newCol < 0 ||
          newCol >= COLS ||
          currentBoard[newRow][newCol] !== token
        ) {
          return false;
        }
      }
      return true;
    };

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        for (const direction of directions) {
          if (currentBoard[row][col] && checkDirection(row, col, direction)) {
            setWinner(currentBoard[row][col]);
            return;
          }
        }
      }
    }
  };

  const restartGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  return {
    winner,
    restartGame,
    handleMove,
    currentPlayer,
    board,
    hoveredColumn,
    setHoveredColumn,
    names: cookie.names,
  };
};
