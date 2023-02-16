import { useSelector } from 'react-redux'
import GameItem from '../GameItem/GameItem'
import styles from './GamesFeatures.module.scss'

const GamesFeatures = () => {
	const games = useSelector(state => state.games.games)

	return (
		<div className={styles.gameFeature_list}>
			{games.map(game => (
				<GameItem
					title={game.title}
					image={game.image}
					game={game}
					key={game.title}
				/>
			))}
		</div>
	)
}

export default GamesFeatures
