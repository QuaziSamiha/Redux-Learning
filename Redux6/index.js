// require redux
const { createStore, combineReducers } = require('redux')

// CONSTANT --- for action type
// for product 
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';
// for cart
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// define state
const productState = {
    products: ['sugar', 'salt'],
    numberOfProducts: 2
};

const cartState = {
    items: ['sugar'],
    numberOfItems: 1
}

// product action
const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};

const getProducts = () => {
    return {
        type: GET_PRODUCT
    };
};

// cart action
const addCart = (item) => {
    return {
        type: ADD_CART_ITEM,
        payload: item
    };
};

const getCart = () => {
    return {
        type: GET_CART_ITEMS
    };
};

// product reducer
const productReducer = (state = productState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberofProducts: state.numberOfProducts + 1
            }
        case GET_PRODUCT:
            return {
                ...state
            }
        default:
            return state;
    }
}

// cart reducer
const cartReducer = (state = cartState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                items: [...state.items, action.payload],
                numberOfItems: state.numberOfItems + 1
            };
        case GET_CART_ITEMS:
            return {
                ...state
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});

// create store
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts('pen'))

store.dispatch(getCart());
store.dispatch(addCart('pen'));
