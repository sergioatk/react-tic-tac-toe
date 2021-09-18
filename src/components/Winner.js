import React from 'react'

export const Winner = ({winner, resetGame}) => {
    return (
        <div className="winner-card">
            <p>Player {winner} won the game!</p>
            <button
            onClick={resetGame}
            >Play again!</button>
        </div>
    )
}
