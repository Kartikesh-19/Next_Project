import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: {
        movies: rootReducer
    }
})
export default store;