// require redux
const { createStore } = require('redux');

// CONSTANT --- for action type
// for product 
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_PRODUCT = 'GET_PRODUCT';
// for care
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
            state;
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
            state;
    }
}

// create store
const store = createStore(productReducer);
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProducts('milk'))

const cartStore = createStore(cartReducer);
cartStore.subscribe(() => {
    console.log(cartStore.getState());
});
cartStore.dispatch(getCart());
cartStore.dispatch(addCart('milk'));
cartStore.dispatch(getCart());
