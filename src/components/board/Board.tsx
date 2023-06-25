// components
import MainLayout from "../../layouts/main-layout/MainLayout";

// logic
import { useLogic } from "./Board.logic";

// styles
import "./Board.css";

// animation
import Lottie from "react-lottie";
import celebrate from "../../assets/lottie/98537-celebrate.json";
import gameOver from "../../assets/lottie/55341-gameover.json";

const Board: React.FC = () => {
  const { 
    winner, 
    restartGame, 
    handleMove, 
    currentPlayer, 
    board,
    setHoveredColumn,
    hoveredColumn,
    names
} = useLogic();

  return (
    <MainLayout onRestartClick={restartGame} showRestart={!!winner}>
      <div className="main">
        <div className="header">
          <div className="header">
            {winner ? (
              <div>
                {winner && (
                  <div className="celebrate">
                    <Lottie
                      isClickToPauseDisabled
                      options={{
                        animationData: winner === 'Tie' ? gameOver : celebrate,
                      }}
                    />
                  </div>
                )}
                <div className="winner">
                  <h1>
                    {winner === 'Tie' ? 'Game over!' : 'The winner is'}
                  </h1>
                  <h1
                    style={{
                      fontSize: "50px",
                      color: winner === "O" ? "#f2da78" : "#f27878",
                    }}
                  >
                    {winner === "O" && names.yellowPlayer}
                    {winner === "X" && names.redPlayer}
                    {winner === 'Tie' && "It's a tie!"}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="current-player">
                <h1>Current Player</h1>
                <h1
                  style={{
                    color: currentPlayer === "O" ? "#f2da78" : "#f27878",
                  }}
                >
                  {currentPlayer === "O" ? names.yellowPlayer : names.redPlayer}
                </h1>
              </div>
            )}
          </div>
        </div>
          <div className="board">
            {board[0].map((_, colIndex) => (
              <div
                key={colIndex}
                className={`column ${colIndex === hoveredColumn ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredColumn(colIndex)}
                onMouseLeave={() => setHoveredColumn(null)}
              >
                {board.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="cell"
                    onClick={() => handleMove(colIndex)}
                  >
                    <span className={`${row[colIndex] || ""}`}></span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Board;
