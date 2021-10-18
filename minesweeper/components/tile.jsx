import React from 'react';

class Tile extends React.Component {
    render(){
        let tileText = '';
        let klass = 'tile';
        if (this.props.tile.explored){
            tileText = `${this.props.tile.adjacentBombCount()}`;
            klass += ' explored'
        } else if(this.props.tile.bombed){
            tileText = ' ';
            klass += ' bombed'
        }  else{
            tileText = ' ';
        }

        if (this.props.tile.flagged) {
            tileText = 'F';
            klass += ' flagged'
        }

        return(
            <div className={klass} onClick={this.handleClick.bind(this)}>{tileText}</div>
        )
    };

    handleClick(e){
        console.log(e);
        console.log(this);
        this.props.updateGame(this.props.tile, e.altKey);
    }
}

export default Tile;