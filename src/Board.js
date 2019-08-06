import React, { Component } from 'react';
import Cell from './Cell';
import './Style.css';

class Board extends Component {
    constructor(props) {
        super(props)
    }

    createBoard() {
        let board = [];

        return board;
    }

    flipCellsAround(coord) {

    }

    render() {
        return (
                <table className='Board'>
                    <tbody>
                        <tr>
                            <Cell isLit={true} />
                            <Cell isLit={false} />
                            <Cell isLit={true} />
                            <Cell isLit={false} />
                            <Cell isLit={true} />
                            <Cell isLit={true} />
                        </tr>
                    </tbody>
                </table>
        )
    }
}
 
export default Board;