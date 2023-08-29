import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartId: null,
  cartData: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartId: (state, action) => {
      state.cartId = action.payload
    },
    setCartData: (state, action) => {
      const id = action.payload.id
      const itemInCart = state.cartData.find(
        item => item.id === action.payload.id
      )
      if (itemInCart) {
        return state.cartData.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      } else {
        state.cartData.push({ ...action.payload, quantity: 1 })
      }
    }
  }
})

export const { setCartId, setCartData } = cartSlice.actions

export default cartSlice.reducer
