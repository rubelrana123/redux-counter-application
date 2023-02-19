//linkup all id
const countEl = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - 1,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    countEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
increment.addEventListener("click", () => {
    store.dispatch({
        type: "increment",
    });
});

decrement.addEventListener("click", () => {
    store.dispatch({
        type: "decrement",
    });
});
