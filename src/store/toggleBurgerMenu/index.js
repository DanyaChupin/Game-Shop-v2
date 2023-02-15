import { createSlice } from '@reduxjs/toolkit'

const toggleBurger = createSlice({
  name: 'toggleBurger',
  initialState: {
    status: false,
  },
  reducers: {
    toggleBurgerMenu: state => {
      state.status = !state.status
    },
  },
})

export const { toggleBurgerMenu } = toggleBurger.actions
export default toggleBurger.reducer
