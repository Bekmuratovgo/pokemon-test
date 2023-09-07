import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
  pokemon: null,
  error: '',
  loading: false,
}

export const pokemonSlice = createSlice({
  name: 'pokemos',
  initialState,
  reducers: {
    setSuccessData(state, action) {
      state.pokemons = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSuccessOnePokemon(state, action) {
      state.pokemon = action.payload;
    },
  }
})

export default pokemonSlice.reducer;