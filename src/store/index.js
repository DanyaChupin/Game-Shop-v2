import { configureStore } from '@reduxjs/toolkit'
import currentGame from './currentGame'
import gameReducer from './gamesSlice'
import toggleBurger from './toggleBurgerMenu'
import userReducer from './userSlice'
export default configureStore({
	reducer: {
		games: gameReducer,
		currentGame: currentGame,
		toggleBurger: toggleBurger,
		user: userReducer,
	},
})
