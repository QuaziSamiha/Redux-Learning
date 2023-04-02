// ------------------ 4th Step ------------------
//  require redux
const { createStore } = require('redux');

// -------------- 2nd Step ------------------
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// ----------------- 1st Step ---------------
// define state 
const initialState = {
    count: 0,
    amount: 10
};

// ------------- 2nd Step ------------
// creating action
const incrementState = () => {
    return {
        type: INCREMENT
    };
};

const decrementState = () => {
    return {
        type: DECREMENT
    };
};

const resetState = () => {
    return {
        type: RESET
    };
};

// ------------- 3rd Step --------------
// creating reducer
const stateReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                amount: state.amount + 10
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                amount: state.amount - 10
            }
        case RESET:
            return {
                ...state,
                count: 0,
                amount: 10
            }
        default:
            state;
    }
};

// ------------------- 4th Step -------------------
// create store
const store = createStore(stateReducer);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementState());
store.dispatch(incrementState());
store.dispatch(decrementState());
store.dispatch(resetState());