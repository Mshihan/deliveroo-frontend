import { Dialog } from '@mui/material'
import { Close, OutlineAdd, OutlineDash } from '../Icons/Icons'
import './DishModal.css'
import { Checkbox } from '@mui/material'
import DishImage from '../../assets/images/dish.webp'
import { Dish } from '../../redux/interfaces/redux-types'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

interface DialogModelTypes {
  open: boolean
  handleClose: () => void
  dish?: Dish
}

const DishModal = (props: DialogModelTypes) => {
  const { open, handleClose, dish } = props
  const [quantity, setQuantity] = useState<number>(1)

  const toggleQuantity = (add: boolean) => {
    if (quantity === 1 && !add) {
      return
    }
    add ? setQuantity((state) => state + 1) : setQuantity((state) => state - 1)
  }

  // Navigation hooks
  const navigate = useNavigate()

  // State management
  const { token } = useSelector(
    (state: { auth: { token: string } }) => state.auth
  )
  const dispatch = useDispatch()
  const addToCartHandler = () => {
    if (!token) {
      navigate('/login')
    }
    dispatch(addItem({ dish, quantity }))
    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="dish-model__card">
        <div className="model__content">
          <div className="dish-model">
            <div className="dish-area">
              <div className="dish-image__banner-image">
                <img src={DishImage} alt="banner dish" />

                <button
                  className="dish-model__close-button"
                  onClick={handleClose}
                  type="button"
                >
                  <Close
                    style={{ fill: '#00ccbc', height: '24px', width: '24px' }}
                  />
                </button>
              </div>

              <div className="dish-content">
                <div className="dish-content__meta">
                  <h1>{dish?.title ?? 'The Italian'}</h1>
                  <p>
                    {dish?.description ??
                      'Your chioce of chicken or mozzarella, with avocado, roasted tomatoes, olives, supergrains, croutons, pesto & balsamic dressing'}
                  </p>
                  <p>{dish?.kcal ?? '646'} kcal</p>
                </div>
                <div className="divider"></div>

                <div className="dish-content__contains">
                  <p>
                    <b>
                      {dish?.contains ??
                        'Contains celery, gluten, milk, mustard, sulphur dioxide/sulphites'}
                    </b>
                    <br />
                    Questions about allergens, ingredients or cooking methods?
                    <br />
                  </p>
                  <a href="">Please contact the restaurant</a>
                </div>
                <div className="divider"></div>

                <div className="dish-content__addon">
                  <h4 className="dish-content__addon--heading">
                    Choose your chicken
                  </h4>
                  <p className="dish-content__addon--description">
                    Contains No known allergens
                  </p>

                  <div className="dish-content__addon--group">
                    <div className="dish-content__item">
                      <div className="dish-addon__item--meta">
                        <Checkbox disabled sx={{ padding: '0 .5rem 0 0 ' }} />
                        <div className="dish-addon__item--details">
                          <h5>Double grilled chicken thigh</h5>
                          <p>No known allergens. 252kcal</p>
                        </div>
                      </div>
                      <p className="dish-addon__item--price">+$2.34</p>
                    </div>

                    <div className="dish-content__item">
                      <div className="dish-addon__item--meta">
                        <Checkbox disabled sx={{ padding: '0 .5rem 0 0 ' }} />
                        <div className="dish-addon__item--details">
                          <h5>Double grilled chicken thigh</h5>
                          <p>No known allergens. 252kcal</p>
                        </div>
                      </div>
                      <p className="dish-addon__item--price">+$2.34</p>
                    </div>

                    <div className="dish-content__item">
                      <div className="dish-addon__item--meta">
                        <Checkbox disabled sx={{ padding: '0 .5rem 0 0 ' }} />
                        <div className="dish-addon__item--details">
                          <h5>Double grilled chicken thigh</h5>
                          <p>No known allergens. 252kcal</p>
                        </div>
                      </div>
                      <p className="dish-addon__item--price">+$2.34</p>
                    </div>

                    <div className="dish-content__item">
                      <div className="dish-addon__item--meta">
                        <Checkbox disabled sx={{ padding: '0 .5rem 0 0 ' }} />
                        <div className="dish-addon__item--details">
                          <h5>Double grilled chicken thigh</h5>
                          <p>No known allergens. 252kcal</p>
                        </div>
                      </div>
                      <p className="dish-addon__item--price">+$2.34</p>
                    </div>

                    <div className="dish-content__item">
                      <div className="dish-addon__item--meta">
                        <Checkbox disabled sx={{ padding: '0 .5rem 0 0 ' }} />
                        <div className="dish-addon__item--details">
                          <h5>Double grilled chicken thigh</h5>
                          <p>No known allergens. 252kcal</p>
                        </div>
                      </div>
                      <p className="dish-addon__item--price">+$2.34</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-cart-area">
          <div className="cart-count__container">
            <OutlineDash
              className="cart-toggle-__icons"
              onClick={() => toggleQuantity(false)}
            />
            <p className="cart-count">{quantity}</p>
            <OutlineAdd
              className="cart-toggle-__icons"
              onClick={() => toggleQuantity(true)}
            />
          </div>
          {dish && (
            <button
              type="button"
              className="add-to-cart__button"
              onClick={addToCartHandler}
            >
              Add for ${(+dish.price * quantity).toFixed(2) ?? '11.99'}
            </button>
          )}
        </div>
      </div>
    </Dialog>
  )
}
export default DishModal
