import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>{' '}
          wins!!!
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          It is Player{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
          's turn.
        </>
      )}
      {!winner && noMovesLeft && `Game ends in a draw.  No winner.`}
    </div>
  );
};

export default StatusMessage;
