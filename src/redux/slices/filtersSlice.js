import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilter: '',
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveFilter, decrement, incrementByAmount } = filtersSlice.actions

export default filtersSlice.reducer