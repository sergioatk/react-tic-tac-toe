import React from 'react'

export const Square = ({ value, onClick, turn, setTurn, tiles, setTiles, id }) => {
    return (
        <div
            className={"square" + (value && ' square-' + value)   }
            data-id={id}
            onClick={onClick}

        >
            {value}
        </div>
    )
}
