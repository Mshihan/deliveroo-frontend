import axios from 'axios'
import { OrderItemInterface } from '../interfaces/redux-types'

export const createOrder = async (credentials: {
  orderDetails: OrderItemInterface[]
  token: string
}) => {
  const { orderDetails, token } = credentials
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  const response = await axios.post(
    'http://localhost:4000/api/order',
    orderDetails
  )

  return response.data
}
