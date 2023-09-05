import React from 'react'
import styles from './Card.module.css';


export const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} />
      <h3>
        {item.name}
      </h3>
    </div>
  )
}
export default Card;
