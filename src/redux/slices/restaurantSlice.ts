import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  RestaurantInterface,
  RestaurantsStateInterface,
} from '../interfaces/redux-types'
import { fetchRestaurant, fetchRestaurants } from '../async/restaurant'

export const fetchRestaurantsThunk = createAsyncThunk(
  'restaurants/fetchRestaurants',
  async () => {
    const restaurants = await fetchRestaurants()
    return restaurants.data
  }
)

export const fetchRestaurantThunk = createAsyncThunk(
  'restaurants/fetchRestaurant',
  async () => {
    const restaurants = await fetchRestaurant()
    return restaurants
  }
)

const initialState: RestaurantsStateInterface = {
  restaurants: [],
  loading: false,
  error: null,
}

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurantsThunk.fulfilled, (state, action) => {
      state.loading = false
      state.restaurants = action.payload as RestaurantInterface[]
    })

    builder.addCase(fetchRestaurantsThunk.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchRestaurantsThunk.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })

    builder.addCase(fetchRestaurantThunk.fulfilled, (state, action) => {
      state.loading = false
      state.restaurants = action.payload as RestaurantInterface[]
    })

    builder.addCase(fetchRestaurantThunk.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchRestaurantThunk.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default restaurantsSlice.reducer
