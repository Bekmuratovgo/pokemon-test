import axios from "axios";
import { pokemonSlice } from "./pokemon.slice";
import { message } from "antd";

const API = 
// process.env.REACT_APP_API || 
'https://pokeapi.co/api/v2/pokemon';


export const getPokemons = (offset = 0) => async dispatch => {
  dispatch (pokemonSlice.actions.setLoading(true));
  try {
    const { data } = await axios.get(API + `?offset=${offset}0&limit=10`);
    dispatch(pokemonSlice.actions.setSuccessData(data));
    message.success('Successful request!')
    
  } catch (error) {
    message.error(error)
  }
  dispatch (pokemonSlice.actions.setLoading(false));
}

export const getPokemonById = (id) => async dispatch => {
  try {
    if (id) {
      const { data } = await axios.get(API + `/${id}`);
      dispatch(pokemonSlice.actions.setSuccessOnePokemon(data))
    } else {
      dispatch(pokemonSlice.actions.setSuccessOnePokemon(null))
    }
  } catch (error) {
    message.error(error)
  }
}

export const searchPokemon = (name) => async dispatch => {
  try {
    const res = await axios.get(`${API}/${name}`);
    dispatch(pokemonSlice.actions.setSuccessData(({results: [{...res.data}]})));
    message.success('Found!')
  } catch (err) {
    message.error({
      duration: 1,
      content: 'Pokemon with that name does not exist!'
    })
  }
}  


export const sortpokemons = (arr) => async dispatch => {
  dispatch(pokemonSlice.actions.setSuccessData(arr));
}