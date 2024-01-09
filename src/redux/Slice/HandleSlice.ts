import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: {}
}

const HandleSlice = createSlice({
    name: 'netflix',
    initialState,
    reducers: {
        setMovies: (state: any, action: any) => {
            console.log('===========>setMovies', state)
            state.movies = action.payload
        }
    }
})

console.log(HandleSlice.actions)
export const { setMovies } = HandleSlice.actions
export default HandleSlice.reducer;