// ------------------ 4th Step ------------------
//  require redux
const { createStore } = require('redux');

// -------------- 2nd Step ------------------
const ADD_USER = 'ADD_USER';

// ----------------- 1st Step ---------------
// define state 
const initialState = {
    users: ['samiha'],
    count: 1
};

// ------------ Payload Added --------------
// ------------- 2nd Step ------------
// creating action
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    };
};

// ------------- 3rd Step --------------
// creating reducer
const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        default:
            state;
    }
};

// ------------------- 4th Step -------------------
// create store
const store = createStore(stateReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addUser('vondul'));
