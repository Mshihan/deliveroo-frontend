import { ChevronIcon, InfoIcon, StarIcons } from '../Icons/Icons'
import './RestaurantMetaCard.css'
import { RestaurantMetaCardInterface } from './interface'

const RestaurantMetaCard = (props: RestaurantMetaCardInterface) => {
  const { description, onClick, title, info, review } = props

  return (
    <div className="restaurant__card">
      <button className="restaurant-meta" type="button" onClick={onClick}>
        <div className="restaurant-meta__content">
          {info && (
            <InfoIcon
              style={{
                fill: 'rgb(171, 173, 173)',
                height: '24px',
                width: '24px',
                marginTop: '2px',
              }}
            />
          )}

          {review && (
            <StarIcons
              style={{
                fill: '#4d7c1b',
                height: '24px',
                width: '24px',
                marginTop: '2px',
              }}
            />
          )}
          <div className="restaurant-meta--box">
            <h6 style={{ color: review ? 'rgb(77, 124, 27)' : '' }}>{title}</h6>
            <p>{description}</p>
          </div>
        </div>
        <ChevronIcon className="restaurant-meta--accent-icon" />
      </button>
    </div>
  )
}

export default RestaurantMetaCard
