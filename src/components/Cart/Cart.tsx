import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import {
  AuthSliceInterface,
  CartSliceInterface,
} from '../../redux/interfaces/redux-types'
import {
  createOrderThunk,
  decrementQuantity,
  incrementQuantity,
} from '../../redux/slices/cartSlice'
import CustomBackdrop from '../CustomBackdrop/CustomBackdrop'
import {
  Add,
  Cart as CartIcon,
  InfoIcon,
  OutlineAdd,
  OutlineDash,
} from '../Icons/Icons'
import OutlineButton from '../OutlineButton/OutlineButton'
import './Cart.css'
import { calculateSubtotal, convertToOrderItems } from './helper'

const Cart = () => {
  // Navigate hook
  const navigate = useNavigate()

  // State management
  const {
    cart: { items, loading },
    auth: { token },
  } = useSelector(
    (state: { cart: CartSliceInterface; auth: AuthSliceInterface }) => state
  )

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
  const quantityHandler = (id: string | undefined, increment: boolean) => {
    if (increment) {
      dispatch(incrementQuantity(id!))
      return
    }
    dispatch(decrementQuantity(id!))
  }
  const subtotal = calculateSubtotal(items)

  const handleCheckout = () => {
    if (!token) {
      navigate('/login')
    }
    const formattedCartItems = convertToOrderItems(items)
    dispatch(
      createOrderThunk({ orderDetails: formattedCartItems, token: token })
    )
  }

  if (items?.length === 0) {
    return (
      <div className="cart__card">
        <div className="cart__card--content--empty">
          <CartIcon
            style={{ height: '48px', width: '48px', fill: '#abadad' }}
          />
          <p>Your basket is empty</p>
          <div className="cart-checkout">
            <button type="button">Go to Checkout</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart__card">
      <CustomBackdrop show={loading} />

      <div className="cart__card--content">
        <h3 className="cart__header">Your order</h3>

        <div className="cart__item--list">
          {items.map((item) => (
            <div className="cart__item" key={item.dish?.id}>
              <p className="cart__item--name">{item.dish?.title}</p>
              <div className="cart__item--price-container">
                <div className="cart__item--toggler">
                  <OutlineDash
                    onClick={() => quantityHandler(item.dish?.id, false)}
                    style={{ color: '#00ccbc', height: '18px', width: '18px' }}
                  />
                  <p className="cart__item--count">{item.quantity}</p>
                  <OutlineAdd
                    onClick={() => quantityHandler(item.dish?.id, true)}
                    style={{ color: '#00ccbc', height: '18px', width: '18px' }}
                  />
                </div>
                {item.dish && (
                  <p className="cart__item--price">
                    ${(item.quantity * +item.dish.price).toFixed(2)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cart__suggestions">
          <p className="suggestions__heading">People also added</p>

          {/* <CarouselComponent responsive={responsive}>
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/f6c2b5ae-b1a4-4151-aa9c-3c313d69c6ff/image.jpeg?width=84&height=160&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/f6c2b5ae-b1a4-4151-aa9c-3c313d69c6ff/image.jpeg?width=84&height=160&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/f6c2b5ae-b1a4-4151-aa9c-3c313d69c6ff/image.jpeg?width=84&height=160&auto=webp&format=jpg&fit=crop" />
          </CarouselComponent> */}

          <div className="horizontal-scroll ">
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/f6c2b5ae-b1a4-4151-aa9c-3c313d69c6ff/image.jpeg?width=84&height=160&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/f6c2b5ae-b1a4-4151-aa9c-3c313d69c6ff/image.jpeg?width=84&height=160&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/fa2c0778-54a5-4ed3-904d-4e96d839e524/image.jpeg?width=560&height=315&auto=webp&format=jpg&fit=crop" />
            <SuggesionCard image="https://rs-menus-api.roocdn.com/images/f6c2b5ae-b1a4-4151-aa9c-3c313d69c6ff/image.jpeg?width=84&height=160&auto=webp&format=jpg&fit=crop" />
          </div>
        </div>

        <div className="cart__summary">
          <div className="flex-between-center">
            <p>Subtotal</p> <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex-between-center">
            <p>Service fee</p>
            <div className="category__summary--service-fee--info">
              <InfoIcon
                style={{ height: '18px', width: '18px', fill: '#abadad' }}
              />
              <p>$0.00</p>
            </div>
          </div>
          <div className="flex-between-center">
            <p>Delivery fee</p>
            <div className="category__summary--delivery-fee--info">
              <InfoIcon
                style={{ height: '18px', width: '18px', fill: '#abadad' }}
              />
              <p>$0.00</p>
            </div>
          </div>
          <div className="delivery--free">Spend $15+ to get free delivery</div>
        </div>

        <p className="fees-summary">How fees work</p>

        <div className="total-container">
          <div className="total-container--list">
            <div className="flex-between-center">
              <p className="cart__item--name">Rider tip</p>
              <div className="cart__item--price-container">
                <div className="cart__item--toggler">
                  <OutlineDash
                    style={{ color: '#00ccbc', height: '18px', width: '18px' }}
                  />
                  <OutlineAdd
                    style={{ color: '#00ccbc', height: '18px', width: '18px' }}
                  />
                </div>
                <p className="cart__item--price">$0.00</p>
              </div>
            </div>

            <div className="flex-between-center cart__item--total ">
              <p>Total</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-checkout--active">
        <button type="button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  )
}

const SuggesionCard = (props: any) => {
  return (
    <div className="suggestion__card">
      <div className="suggestion__item--image">
        <img src={props.image} alt="suggestion item" />
      </div>
      <div className="suggestion__item--content">
        <h5 className="suggestion__item--header">Banana</h5>
        <p className="suggestion__item--price">$1.23</p>
      </div>

      <OutlineButton
        style={{
          height: '160px',
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
export default Cart
