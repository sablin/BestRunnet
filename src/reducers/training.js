const trainingReducer = (state=[], action) =>{
    switch (action.type){
        case 'ADD_TRAINING':
            return [...state, action.payload]
        default:
            return state;
    }
}

export default trainingReducer