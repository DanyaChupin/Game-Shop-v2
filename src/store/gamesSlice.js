import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://6388c642d94a7e5040a699ae.mockapi.io/games'
      )
      if (!response.ok) {
        throw new Error('ServerError!')
      }
      const dataGame = await response.json()
      return dataGame
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const setError = (state, action) => {
  state.status = 'rejected'
  state.error = action.payload
}

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    games: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchGames.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.games = action.payload
    },
    [fetchGames.rejected]: setError,
  },
})
export default gamesSlice.reducer
