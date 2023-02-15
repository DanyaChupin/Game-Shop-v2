import { createSlice } from '@reduxjs/toolkit'

const currentGame = createSlice({
  name: 'currentGame',
  initialState: {
    currentGame: null,
  },
  reducers: {
    setCurrentGames: (state, action) => {
      state.currentGame = action.payload
    },
  },
})

export const { setCurrentGames } = currentGame.actions
export default currentGame.reducer
