import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RestaurantsStateInterface } from '../../redux/interfaces/redux-types'
import InventoryItems from '../../sections/InventoryItems/InventoryItems'
import Menu from '../../sections/Menu/Menu'
import RestaurantSection from '../../sections/RestaurantSection/RestaurantSection'
import './Restaurant.css'

const Restaurant = () => {
  const { restaurants } = useSelector(
    (state: { restaurants: RestaurantsStateInterface }) => state.restaurants
  )

  const { id } = useParams()

  const selectedRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === id),
    [restaurants, id]
  )

  return (
    <>
      <RestaurantSection restaurant={selectedRestaurant} />
      <Menu categories={selectedRestaurant?.categories} />
      <InventoryItems categories={selectedRestaurant?.categories} />
    </>
  )
}

export default Restaurant
