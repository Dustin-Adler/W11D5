

export const pokemonReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch(action.type){
        // case RECEIVE_POKEMON:
        //     newState[action.id] = action;
        //     return newState;
        case RECEIVE_ALL_POKEMON:
            
        default:
            return state;
    }
}