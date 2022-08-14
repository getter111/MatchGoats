import React from "react";

export const Scoreboard = (props) => {
  const { bestScore, currentScore } = props;
  return (
    <div className="scoreboard">
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
};
