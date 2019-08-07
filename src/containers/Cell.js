import React, { Component } from 'react';
import '../css/style.css';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        this.props.flipCellsAroundMe();
    }

    render() { 
        let classes = 'Cell' + (this.props.isLit ? '-lit' : '');

        return ( 
            <td className={classes} onClick={this.handleClick}/>
         );
    }
}
 
export default Cell;