// ----------------------------- 4th Step ------------------------
const { createStore } = require('redux');

// ---------------------------- 1st Step --------------------------
// action type store within a variable to avoid spelling mistake and a good practice
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// state define
const initialCounterState = {
    count: 0
};

const initialUserState = {
    users: [{ name: "Samiha Tasnim" }]
};

// ---------------------------- 2nd Step -------------------------------
// action -- one kind of object -- kept within a function(a good practice)  
// action holds 2 things -- type and payload(value)
const incrementCounter = () => {
    return {
        type: INCREMENT
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT
    };
};

const addUser = () => {
    return {
        type: ADD_USER,
        payload: { name: 'Vondul' }
    };
};

// const addUser2 = (user) => {
//     return {
//         type: ADD_USER,
//         payload: user
//     };
// };

// -------------------------- 3rd Step ------------------------
// create reducer for counter
// reducer is a pure function that means it takes input and must provides output
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                // ...state, // if multiple state remain
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            state;
    }
}

// const counterReducer = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case INCREMENT:
//         //
//         case DECREMENT:
//         //
//         default:
//             state;
//     }
// }

// ------------------ 4th step -----------------
// create store
const store = createStore(counterReducer);
// subscribing store
store.subscribe(() => {
    console.log(store.getState());
})
// dispatch action
// store.dispatch({type: INCREMENT})
store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());