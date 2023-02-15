import { configureStore } from '@reduxjs/toolkit'
import currentGame from './currentGame'
import gameReducer from './gamesSlice'
import toggleBurger from './toggleBurgerMenu'
export default configureStore({
  reducer: {
    games: gameReducer,
    currentGame: currentGame,
    toggleBurger: toggleBurger,
  },
})
