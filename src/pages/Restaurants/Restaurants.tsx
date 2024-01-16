import { Skeleton } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import CustomBackdrop from '../../components/CustomBackdrop/CustomBackdrop'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { RestaurantsStateInterface } from '../../redux/interfaces/redux-types'
import { fetchRestaurantsThunk } from '../../redux/slices/restaurantSlice'
import './Restaurants.css'

const Restaurants = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const { restaurants, loading } = useSelector(
    (state: { restaurants: RestaurantsStateInterface }) => state.restaurants
  )

  useEffect(() => {
    dispatch(fetchRestaurantsThunk())
  }, [dispatch])

  return (
    <div className="restaurants__container">
      <div className="restaurants__container__wrap">
        <CustomBackdrop show={loading} />
        <h3>Restaurants</h3>
        <div className="restaurants__list">
          {!loading &&
            restaurants.length > 0 &&
            restaurants?.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                title={restaurant.name}
                id={restaurant.id}
                photo={restaurant.photo}
              />
            ))}

          {loading &&
            [1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                variant="rectangular"
                width="100%"
                height="100%"
                style={{ borderRadius: '4px' }}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Restaurants
