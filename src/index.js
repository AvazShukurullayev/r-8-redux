import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import {createStore} from "redux";

const initialState = 0;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "random":
            return action.payload
        default:
            return state
    }
}
const store = createStore(reducer)
const update = () => {
    document.getElementById("count").textContent = store.getState()
}
const inc = () => ({type: "increment"})
const dec = () => ({type: "decrement"})
const random = (randomNumber) => ({type: "random", payload: randomNumber})

store.subscribe(update)
document.getElementById("inc").addEventListener("click", () => {
    store.dispatch(inc())
})
document.getElementById("dec").addEventListener("click", () => {
    store.dispatch(dec())
})

document.getElementById("random").addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 100)
    store.dispatch(random(randomNumber))
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <></>
    </React.StrictMode>
);