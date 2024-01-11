import axios from 'axios'

export const fetchRestaurants = async () => {
  const response = await axios.get('http://localhost:4000/api/restaurant')
  return response.data
}

export const fetchRestaurant = async () => {
  const response = await axios.get('http://localhost:4000/restaurant')
  return response.data
}
