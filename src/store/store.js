import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon.slice";

const rootReducer = combineReducers({
    pokemonReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}