import axios from "axios";
import { pokemonSlice } from "./pokemon.slice";
// import { message } from "antd";

const API = 'https://pokeapi.co/api/v2/ability';


export const getPokemons = (page = 1) => async dispatch => {
  dispatch (pokemonSlice.actions.setLoading(true));
  
  try {
    const { data } = await axios.get(API + `?offset=${page}0&limit=10`);
    dispatch(pokemonSlice.actions.setSuccessData(data));
    
  } catch (error) {
    console.log(error, 'ERR');
  }

  dispatch (pokemonSlice.actions.setLoading(false));
}