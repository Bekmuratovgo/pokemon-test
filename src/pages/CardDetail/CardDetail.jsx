import React, { useEffect } from 'react'
import styles from './CardDetail.module.css';
import { getPokemonById } from '../../store/pokemon.action';
import { useDispatch, useSelector } from 'react-redux';
import { regexForUrlId } from '../../utils';

export const CardDetail = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state.pokemonReducer);

  const id = window.location.href.match(regexForUrlId);

  useEffect(() => {
    if (id.length) {
      dispatch(getPokemonById(id[1]));
    }
  }, []);

  return pokemon && (
    <div className={styles.details}>
      <div className={styles.details_inner}>
        <div className={styles.block_left}>
          <h2>{pokemon.name}</h2>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[1]}.png`} />
        </div>
        <div className={styles.block_center}>
          <div className={styles.block_center__parameters}>
            <div className={styles.block_center__parameters_left}>
              <div className={styles.block}>
                <span>Height: </span><br />
                <p>{pokemon.height}</p>
              </div>
              <div className={styles.block}>
                <span>Weight: </span><br />
                <p>{pokemon.weight} кг</p>
              </div>
            </div>
            <div className={styles.block_center__parameters_right}>
              <div>
                <span>Abilities: </span>
                {pokemon.abilities.map((item) => (
                  <p key={item.ability.name}>
                    {item.ability.name}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.block_center__type}>
            <span>Тип покемона: </span>
            {pokemon.types.map((item) => (
              <p key={item.type.name}>{item.type.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.block_right}>
        <h3 className={styles.block_right__title}>Parameters of Pokemon</h3>
        <div className={styles.block_right__inner}>
          <div className={styles.rate}>
            {
              pokemon.stats.map((stat) => {
                return (
                  <div className={styles.rate_inner} key={stat.stat.name}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                      <div
                        className={`
                          ${styles.rate_card} 
                          ${index + 1 < stat.base_stat / 10 ? styles.rate_active : styles.rate_disactive}`}
                        key={item}
                      >
                      </div>
                    ))}
                    <h5>{stat.stat.name}</h5>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardDetail;
