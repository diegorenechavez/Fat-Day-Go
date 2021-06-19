import React from 'react';
import ReactDom from 'react-dom';
import configureStore from "./store/store.js";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const containingDiv = document.getElementById("root");
    let preloadedState = undefined;
    if(window.currentUser){
        preloadedState={
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session:{
                currentUser: window.currentUser.id
            }
        };
    }
    let store = configureStore(preloadedState);
    ReactDom.render(<Root store={store}/>, containingDiv)
})