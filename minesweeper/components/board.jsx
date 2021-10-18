import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    render(){
        return (
            <div>
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