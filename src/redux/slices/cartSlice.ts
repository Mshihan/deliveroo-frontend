import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  CartItemInterface,
  CartSliceInterface,
  OrderItemInterface,
} from '../interfaces/redux-types'
import { createOrder } from '../async/order'

const initialState: CartSliceInterface = {
  items: [],
  loading: false,
  error: '',
  message: '',
}

export const createOrderThunk = createAsyncThunk(
  'cart/createOrder',
  async (data: { orderDetails: OrderItemInterface[]; token: string }) => {
    const order = await createOrder(data)
    return order.message
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemInterface>) => {
      const { dish, quantity } = action.payload
      const existingItem = state.items.find(
        (item) => item.dish?.id === dish?.id
      )
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push(action.payload)
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.dish?.id === action.payload
      )

      if (existingItem) {
        existingItem.quantity += 1
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.dish?.id === action.payload
      )

      if (existingItem) {
        existingItem.quantity = Math.max(existingItem.quantity - 1, 0)

        if (existingItem.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.dish?.id !== action.payload
          )
        }
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.dish?.id !== action.payload
      )
    },
    clearCart: (state) => {
      state.items = []
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrderThunk.fulfilled, (state, action) => {
      state.loading = false
      state.message = action.payload
      state.items = []
    })

    builder.addCase(createOrderThunk.pending, (state) => {
      state.loading = true
    })

    builder.addCase(createOrderThunk.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export const {
  addItem,
  removeItem,
  clearCart,
  setLoading,
  setError,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions
export default cartSlice.reducer
