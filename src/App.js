import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/pokemon.action";
import styles from './App.module.css';
import Card from "./components/Card/Card";
import { Pagination, Spin } from "antd";


const App = () => {
  const dispatch = useDispatch();
  const { pokemons, loading } = useSelector((state) => state.pokemonReducer);

  const onChangePagination = (pageNumber) => {
    dispatch(getPokemons(pageNumber));
  }

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.app_content}>
        <div className={styles.app_content__inner}>
          {
            loading ?
              <Spin size="large" />
              :
              pokemons.results ? pokemons.results?.map((item, index) => (
                <Card
                  key={item.name}
                  item={item}
                  index={index}
                />
              ))
              :
              ''
          }
        </div>

        <Pagination
          className={styles.app_content__pagination}
          defaultCurrent={1}
          showSizeChanger={false}
          total={pokemons?.count || 1}
          onChange={onChangePagination}
        />
      </div>
    </div>
  );
}
export default App;
