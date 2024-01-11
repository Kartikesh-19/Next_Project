import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: {}
}

const HandleSlice = createSlice({
    name: 'netflix',
    initialState,
    reducers: {
        setMovies: (state: any, action: any) => {
            state.movies = action.payload
        }
    }
})

export const { setMovies } = HandleSlice.actions
export default HandleSlice.reducer;