import axios from "axios";
import { pokemonSlice } from "./pokemon.slice";
// import { message } from "antd";

const API = 'https://pokeapi.co/api/v2/ability';


export const getPokemons = () => async dispatch => {
  // dispatch ()

  try {
    const { data } = await axios.get(API);
    dispatch(pokemonSlice.actions.setSuccessData(data));

  } catch (error) {
    console.log(error, 'ERR');
  }
  // dispatch ()
}