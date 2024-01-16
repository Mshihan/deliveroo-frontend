import { useEffect, useMemo, useState } from 'react'
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

  // calculate width
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      <RestaurantSection
        restaurant={selectedRestaurant}
        windowWidth={windowWidth}
      />
      <Menu categories={selectedRestaurant?.categories} />
      <InventoryItems
        categories={selectedRestaurant?.categories}
        windowWidth={windowWidth}
      />
    </div>
  )
}

export default Restaurant
