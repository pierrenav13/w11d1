import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    render(){
        console.log(this.props.board.grid);
        return (
            <div className='board'>
                {this.props.board.grid.map((row, index) => {
                    return <div key={index}>
                        {row.map((tile, tIndex) => {
                            return <Tile 
                                key={tIndex} 
                                tile={tile} 
                                updateGame={this.props.updateGame} 
                            />
                        })}
                    </div>
                })}
            </div>
        );
    }
}

export default Board;