import './RestaurantMetaCard.css'
import { InfoIcon, StarIcons } from '../Icons/Icons'
import { ChevronIcon } from '../Icons/Icons'
import { RestaurantMetaCardInterface } from './interface'

const RestaurantMetaCard = (props: RestaurantMetaCardInterface) => {
  const { description, onClick, title, info, review } = props

  return (
    <div className="restaurant__card">
      <button className="restaurant-meta" type="button" onClick={onClick}>
        {info && (
          <InfoIcon
            className="restaurant-meta--leading-icon"
            style={{ fill: 'rgb(171, 173, 173)' }}
          />
        )}

        {review && <StarIcons className="restaurant-meta--leading-icon" />}
        <div className="restaurant-meta--box">
          <h6 style={{ color: review ? 'rgb(77, 124, 27)' : '' }}>{title}</h6>
          <p>{description}</p>
        </div>
        <ChevronIcon className="restaurant-meta--accent-icon" />
      </button>
    </div>
  )
}

export default RestaurantMetaCard
