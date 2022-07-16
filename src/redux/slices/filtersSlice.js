import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilter: '',
  shopPage:1
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    setShopPage: (state, action) => {
      state.shopPage = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setActiveFilter, setShopPage } = filtersSlice.actions

export default filtersSlice.reducer