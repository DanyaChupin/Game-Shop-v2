/* eslint-disable jsx-a11y/img-redundant-alt */
import { useSelector } from 'react-redux'

import styles from './GamePage.module.scss'

const GamePage = () => {
  const currentGame = useSelector(state => state.currentGame.currentGame)

  return (
    <>
      <div className={styles.gamePage_wrapper}>
        <img
          className={styles.gamePage_image}
          src={currentGame.image}
          alt="image"
        />
        <div className={styles.gamePage_info}>
          <h3 className={styles.gamePage_title}>{currentGame.title}</h3>
          <p className={styles.gamePage_discription}>
            {currentGame.description}
          </p>
          <p className={styles.gamePage_price}>
            Price: {currentGame.price} руб.
          </p>
          <button className={styles.gamePage_button}>Add to Cart</button>
          <h4 className={styles.gamePage_treiler}>Trailer</h4>
        </div>

        <iframe
          className={styles.gamePage_video}
          width="60%"
          height="400px"
          src={currentGame.video}
          title="Youtube Video Player"
        ></iframe>
      </div>
    </>
  )
}

export default GamePage
