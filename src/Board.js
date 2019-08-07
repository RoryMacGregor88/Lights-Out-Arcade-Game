import React, { Component } from 'react';
import Cell from './Cell';
import './sass/main.scss';

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.25
    }
    constructor(props) {
        super(props);

        this.state = {
            hasWon: false,
            board: this.createBoard()
        }
    this.win = this.win.bind(this);
    }

    createBoard() {
        let board = [];

        for (let y = 0; y < this.props.nrows; y++) {
            let row = [];
            for (let x = 0; x < this.props.ncols; x++) {
                row.push(Math.random() < this.props.chanceLightStartsOn);
            }
            board.push(row);
        }

        return board;
    }

    flipCellsAround(coord) {
        let {ncols, nrows} = this.props;
        let board = this.state.board;
        let [y, x] = coord.split('-').map(Number);

        function flipCell(y, x) { 
            
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x];
            }
        }

        flipCell(x, y);
        flipCell(x-1, y);
        flipCell(x, y-1);
        flipCell(x, y+1);
        flipCell(x+1, y);

        let hasWon = board.every(row => row.every(cell => !cell));

        this.setState({board, hasWon}); 
    }

    win() {
        this.setState({
            hasWon: false,
            Board: this.createBoard()
        })
    }

    render() {
        if (this.state.hasWon) {
            return (
                <div id="you-win" className="title">
                    <h1 className="out">WIN!</h1>
                    <h6 onClick={this.win} className="lights">Play Again?</h6>
                </div>
            )
        } 

        let tblBoard = [];
        for (let y = 0; y < this.props.nrows; y++) {
            let row = [];
            for (let x = 0; x < this.props.ncols; x++) {
                let coord = `${x}-${y}`
                row.push(
                    <Cell 
                        key={coord} 
                        isLit={this.state.board[y][x]} 
                        flipCellsAroundMe={() => this.flipCellsAround(coord)}
                    />)   
            }
            tblBoard.push(<tr key={y}>{row}</tr>)
        }

        return (
            <div>
                <div className="title">
                    <h3 className="lights">Lights</h3>
                    <h1 className="out">OUT</h1>
                </div>
                <table className='board'>
                    <tbody>
                        {tblBoard}
                    </tbody>
                </table>
            </div>
        )
    }
}
 
export default Board;