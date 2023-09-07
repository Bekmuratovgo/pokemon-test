import React from 'react'
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';
import { regexForUrlId } from '../../utils';


export const Card = ({ item, index }) => {
  const navigate = useNavigate();

  const handleSelect = (url) => {
    const match = url.match(regexForUrlId);
    const number = parseInt(match[1]);
    navigate(`details/${number}/`);
  }

  return (
    <div className={styles.card} onClick={() => handleSelect(item.url)}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
      <h3>
        {item.name}
      </h3>
    </div>
  )
}
export default Card;
