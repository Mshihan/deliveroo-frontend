import {
  CartItemInterface,
  OrderItemInterface,
} from '../../../redux/interfaces/redux-types'

export const calculateSubtotal = (cartItems: CartItemInterface[]): number => {
  return cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.dish!.price)
    return total + itemPrice * item.quantity
  }, 0)
}

export const convertToOrderItems = (
  cartItems: CartItemInterface[]
): OrderItemInterface[] => {
  return cartItems.map((cartItem) => {
    const { dish, quantity } = cartItem
    const orderItem: OrderItemInterface = {
      id: dish?.id ?? '',
      quantity: quantity.toString(),
    }
    return orderItem
  })
}
