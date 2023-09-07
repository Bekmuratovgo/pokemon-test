import React, { useEffect, useState } from 'react'
import { Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getPokemonById, searchPokemon, sortpokemons } from '../../store/pokemon.action';
import { A_Z, Z_A, sortBy } from '../../utils';
import useDebounce from '../../hooks/useDebounce';
import styles from './Header.module.css';

export const Header = () => {
  const [currentType, setCurrentType] = useState();
  const { pokemon, pokemons } = useSelector((state) => state.pokemonReducer);
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 300); // Создайте экземпляр хука

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = [
    {
      label: `${A_Z}`,
      value: A_Z
    },
    {
      label: `${Z_A}`,
      value: Z_A
    },
  ]

  const onSecondCityChange = (type) => {
    const sorted = sortBy(pokemons, type);
    console.log(sorted, 'SORT');
    dispatch(sortpokemons({results: sorted, count: 1}));
    setCurrentType(type);
  };

  const handleClick = () => {
    dispatch(getPokemonById());
    navigate('/');
  };

  useEffect(() => {
    dispatch(searchPokemon(debouncedValue))
  }, [debouncedValue]);

  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <h1>Pokemons</h1>
      </div>
      <div className={`${styles.header_wrapper} ${pokemon ? styles.active : styles.disabled}`}>
        {
          !pokemon ?
            <>
              <div className={styles.header__search}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Search..."
                />
                <button>Search</button>
              </div>
              <div className={styles.header__sort}>
                <Select
                  style={{ width: 130, }}
                  value={currentType}
                  placeholder="Sort by"
                  onChange={onSecondCityChange}
                  options={categories.map((category) => ({
                    label: category.label,
                    value: category.value,
                  }))}
                />
              </div>
            </>
            : <Button onClick={() => handleClick()} type='primary'>Back</Button>
        }
      </div>
    </div>
  )
}
export default Header;