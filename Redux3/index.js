// ------------------ 4th Step ------------------
//  require redux
const { createStore } = require('redux');

// -------------- 2nd Step ------------------
const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';

// ----------------- 1st Step ---------------
// define state 
const initialState = {
    count: 0
};

// ------------ Payload Added --------------
// ------------- 2nd Step ------------
// creating action
const incrementStateAction = () => {
    return {
        type: INCREMENT
    };
};

const resetStateAction = () => {
    return {
        type: RESET
    };
};

const incrementStateByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    };
};

// ------------- 3rd Step --------------
// creating reducer
const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            };
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

store.dispatch(incrementStateAction());
store.dispatch(incrementStateByValue(5));
store.dispatch(resetStateAction());
store.dispatch(incrementStateByValue(10))