import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setCurrentGames } from '../../store/currentGame'
import styles from './GameItem.module.scss'

const GameItem = ({ title, image, game }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const openCurrentGame = () => {
    dispatch(setCurrentGames(game))
    navigate(`/games/${game.title}`)
  }
  return (
    <div className={styles.gameItem_wrapper} onClick={openCurrentGame}>
      <img src={image} className={styles.gameItem_img} alt="game" />
      <p className={styles.gameItem_title}>{title}</p>
    </div>
  )
}

export default GameItem
