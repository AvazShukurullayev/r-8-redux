import React from 'react';
import {createStore} from "redux";

const App = () => {
    const initialState = 0;
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "inc":
                return state + 1
            default:
                return state
        }
    }
    const store = createStore(reducer)
    console.log("store => ", store)
    store.dispatch({type: "inc"})
    console.log("store => ", store.getState())
    return (
        <div className={"app"}>
            {/*<h1>{store}</h1>*/}
        </div>
    );
};

export default App;