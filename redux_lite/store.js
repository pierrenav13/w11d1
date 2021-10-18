class Store {
    constructor(rootReducer){
        this.rootReducer = rootReducer;
        this.state = {};
    }

    getState(){
        return Object.assign({}, this.state);
    }
    
    dispatch(action){
        this.rootReducer(this.state, action);
    }

}

function combineReducers(reducers){
    // returns a single reducers
    return function(prevState, action){
        const nextState = {};
        Object.keys(reducers).forEach(k => {
            nextState[k] = reducers[k](prevState[k], action);
        })
        return nextState;
    }
}