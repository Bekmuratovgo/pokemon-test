import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/pokemon.action";
import styles from './App.module.css';
import Card from "./components/Card/Card";
import { Select } from "antd";


const App = () => {
  const categories = ['A-Z', 'By age'];

  const dispatch = useDispatch();
  const { pokemons } = useSelector((state) => state.pokemonReducer);
  const [currentCategory, setCurrentCategory] = useState();

  console.log(pokemons, 'pokemons');

  const onSecondCityChange = (value) => {
    setCurrentCategory(value);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.app_header}>
        <div className={styles.app_header_logo}>
          <h1>
            Pokemons
          </h1>
        </div>
        <div className={styles.app_header_wrapper}>
          <div className={styles.app_header__search}>
            <input placeholder="Search" type="text" />
            <button>Search</button>
          </div>
          <div className={styles.app_header__sort}>
            <Select
              style={{width: 130,}}
              value={currentCategory}
              placeholder="Sort by"
              onChange={onSecondCityChange}
              options={categories.map((category) => ({
                label: category,
                value: category,
              }))}
            />
          </div>
        </div>
      </div>
      <div className={styles.app_content}>
        {pokemons?.results?.map((item) => (
          <Card
            key={item.name}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
