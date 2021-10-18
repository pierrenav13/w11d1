import React from 'react';

class Modal extends React.Component{
    render(){
        return (
            <div className='modal-background'>
                <div className='modal'>
                    <h1>{this.props.outcome}</h1>
                    <button onClick={this.props.restartGame}>Restart Game</button>
                </div>
            </div>

        );
    }
}

export default Modal;