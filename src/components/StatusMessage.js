import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `${winner} wins!!!`}
      {!winner &&
        !noMovesLeft &&
        `It is Player ${current.isXNext ? 'X' : 'O'}'s turn.`}
      {!winner && noMovesLeft && `Game ends in a draw.  No winner.`}
    </h2>
  );
};

export default StatusMessage;
