import DishImage from '../../../assets/images/dish.webp'
import { Dish } from '../../../redux/interfaces/redux-types'
import { Add } from '../../Icons/Icons'
import OutlineButton from '../../OutlineButton/OutlineButton'
import './HorizontalInventoryItem.css'

const HorizontalInventoryItem = (props: {
  dish?: Dish
  onClick: () => void
}) => {
  const { dish, onClick } = props
  return (
    <div className="horizontal-item" onClick={onClick}>
      <div className="horizontal-item__content">
        <h5 className="horizontal-item__content--heading">{dish?.title}</h5>
        <div className="horizontal-item__content--description">
          {dish?.description}
        </div>

        <p>{dish?.kcal} kcal</p>
        <p>${dish?.price}</p>
      </div>
      <div className="horizontal-item__image">
        <img src={DishImage} alt="dish preview" />
      </div>
      <OutlineButton
        style={{
          height: '100px',
          width: '40px',
          padding: '0 .4rem',
          marginLeft: '1rem',
        }}
      >
        <Add style={{ fill: '#00ccbc', height: '18px', width: '18px' }} />
      </OutlineButton>
    </div>
  )
}
export default HorizontalInventoryItem
