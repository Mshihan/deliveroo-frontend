import DishImage from '../../../assets/images/dish.webp'
import { Add } from '../../Icons/Icons'
import OutlineButton from '../../OutlineButton/OutlineButton'
import './VerticalInventoryItem.css'

const VerticalInventoryItem = (props: any) => {
  return (
    <>
      <div className="vertical-item" onClick={props.onClick}>
        <div className="vertical-item--image">
          <img src={props.image ?? DishImage} alt="dish preview" />
        </div>
        <div className="vertical-item--details">
          <h6>Mighty Mexican</h6>
          <div>
            <p>232 kcal</p>
            <p>$32.99</p>

            <OutlineButton
              style={{
                padding: '.4rem 0',
                marginTop: '.25rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Add style={{ fill: '#abadad', height: '18px', width: '18px' }} />
            </OutlineButton>
          </div>
        </div>
      </div>
    </>
  )
}
export default VerticalInventoryItem
