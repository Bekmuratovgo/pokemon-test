import React, { useEffect } from 'react'
import styles from './CardDetail.module.css';
import { getPokemonById } from '../../store/pokemon.action';
import { useDispatch, useSelector } from 'react-redux';
import { regexForUrlId } from '../../utils';

export const CardDetail = () => {
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state.pokemonReducer);

  const id = window.location.href.match(regexForUrlId);
  console.log(pokemon, 'ONE');
  
  useEffect(() => {
    if (id.length) {
      dispatch (getPokemonById(id[1]))
    }
  }, []);

  return pokemon && (
    <div className={styles.details}>
      <div className={styles.details_inner}>
        <div className={styles.block_left}>
          <h2>{pokemon.name}</h2>
          <img src={''} />
        </div>
        <div className={styles.block_center}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, blanditiis? Nemo ab, maxime, quo commodi illum quos quis quaerat suscipit facilis sit enim voluptate exercitationem amet, molestias inventore odit possimus.</p>

          <div className={styles.block_center__parameters}>
            <div className={styles.block_center__parameters_left}>
              <div>
                Poст
                187
              </div>
              <div>
                Вес
                18 кг
              </div>
            </div>
            <div className={styles.block_center__parameters_right}>
              <div>
                Вид
                Семья
              </div>
              <div>
                Таланты
                Бурный рост
              </div>
            </div>
          </div>

          <div>Тип покемона</div>
          <div>Слабости</div>
        </div>
        <div className={styles.block_right}>

        </div>

      </div>
    </div>
  )
}
export default CardDetail;
