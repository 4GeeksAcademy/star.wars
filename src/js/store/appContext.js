// appContext.js
import React, { useState, useEffect } from "react";
import getState from "./flux";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore) =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions },
                    }),
            })
        );

        // Initialize favorites state
        const [favorites, setFavorites] = useState([]);

        // Add to favorites function
        const addToFavorites = (item) => {
            setFavorites([...favorites, item]);
        };

        // Remove from favorites function
        const removeFromFavorites = (item) => {
            const updatedFavorites = favorites.filter((fav) => fav.uid !== item.uid);
            setFavorites(updatedFavorites);
        };

        const actions = {
            // other actions
            addToFavorites,
            removeFromFavorites,
        };

        useEffect(() => {
            // Any initial data loading can go here
        }, []);

        const store = {
            ...state.store,
            favorites,  // include favorites in store
        };

        return (
            <Context.Provider value={{ store, actions }}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

export default injectContext;
