import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';
import Modal from './modal';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(9, 4)
        };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged){
        if(flagged){
            tile.toggleFlag();
        } else{
            tile.explore();
        }
        this.setState({board: this.state.board})
    }

    render(){
        let outcome = '';
        let modal = '';
        if (this.state.board.won() || this.state.board.lost()){
            let root = document.getElementById('root');
            if(this.state.board.lost()){

                modal = <Modal outcome='You Lost!' restartGame={this.restartGame.bind(this)}/>;
            } else if(this.state.board.won()){
                modal = <Modal outcome='You Won!' restartGame={this.restartGame.bind(this)}/>;
            }
        }
        return (
            <div>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }

    restartGame(){
        this.setState({ board: new Minesweeper.Board(9, 4) });
    }
}

export default Game;