import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NewsItems } from '../../types/News'

const initialState: NewsItems = {
  category: '',
  data: []
}

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    categorynews: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.category = '';
      state.data = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { categorynews } = newsSlice.actions

export default newsSlice.reducer

