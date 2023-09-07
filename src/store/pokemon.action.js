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
    console.log(error, 'ERR');
    message.error(error)
  }
  dispatch (pokemonSlice.actions.setLoading(false));
}

export const getPokemonById = (id) => async dispatch => {
  try {
    if (id) {
      const { data } = await axios.get(API + `/${id}`);
      dispatch(pokemonSlice.actions.setSuccessOnePokemon(data))
      console.log(data, 'GET_ONE');
    } else {
      dispatch(pokemonSlice.actions.setSuccessOnePokemon(null))
    }
  } catch (error) {
    message.error(error)
  }
}

export const searchPokemon = (name) => async dispatch => {
  try {
    const res = axios.get(`${API}/${name}`);
    console.log(res, 'RES');
    dispatch(pokemonSlice.actions.setSuccessData((await res).data.results));
  } catch (err) {
    message.error('Покемон с таким именем не существует!')
  }
}  


export const sortpokemons = (arr) => async dispatch => {
  dispatch(pokemonSlice.actions.setSuccessData(arr));
}