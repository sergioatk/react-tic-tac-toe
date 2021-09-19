import React, { useState } from 'react'
import { Square } from './Square'
import { Winner } from './Winner';
import './styles.css';





export const Board = () => {

    // const [tiles, setTiles] = useState([0,1,2,3,4,5,6,7,8]);
    const [tiles, setTiles] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState('x');
    const [winner, setWinner] = useState(undefined);

    const handler = (e) => {

        const tileValue = Number(e.target.dataset.id);
        const tileContent = e.target.textContent;
        const newTiles = [...tiles];


        if (!tileContent) {


            if (turn === 'x') {
                newTiles[tileValue] = turn;
                setTiles(newTiles);


                setTurn('o');
                isGameWon(newTiles, turn)



            } else {
                newTiles[tileValue] = turn;
                setTiles(newTiles, turn);

                setTurn('x');
                isGameWon(newTiles, turn);
                // winner && console.log('game is won')
            }




        }

    }

    const isGameWon = (tiles, player) => {
        const possibleWinSituations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        const winMove = possibleWinSituations.filter(winSituation => {
            return winSituation.every(number => tiles[number] === player);
        })

        if (winMove[0]) {
            setWinner(player);
            // console.log(`winner is ${player} with tiles ${winMove}`);
            return winMove
        }

    }

    // const isGameFinished = tiles => {
    //     return tiles.some(tile => !tile === '');
    // }

    const resetGame = () => {
        setTiles(Array(9).fill(''));
        setTurn('x');
        setWinner(undefined);
    }


    return (
        <>

            {winner ?
                <Winner
                    winner={winner}
                    resetGame={resetGame}
                />
                :

                <div className="board">
                    {
                        tiles.map((tile, i) => (

                            <Square
                                id={i}
                                key={i}
                                value={tile}
                                onClick={handler}
                                turn={turn}
                                setTurn={setTurn}
                                tiles={tiles}
                                setTiles={setTiles}
                            />
                        ))

                    }
                </div>
            } </>














    )
}
