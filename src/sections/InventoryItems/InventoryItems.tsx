import { Drawer } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../../components/Cart/Cart'
import { calculateSubtotal } from '../../components/Cart/helper'
import DishModal from '../../components/DishModal/DishModal'
import HorizontalInventoryItem from '../../components/InventoryItems/Horizontal/HorizontalInventoryItem'
import VerticalInventoryItem from '../../components/InventoryItems/Vertical/VerticalInventoryItem'
import {
  CartItemInterface,
  CartSliceInterface,
  Dish,
} from '../../redux/interfaces/redux-types'
import './InventoryItems.css'
import { InventoryItemsProps } from './interface'

const InventoryItems = (props: InventoryItemsProps) => {
  const { categories, windowWidth } = props

  const [drawerState, setDrawerState] = useState<boolean>(false)

  const toggleDrawerState = () => {
    setDrawerState((state) => !state)
  }

  const mobile: boolean = windowWidth < 959

  const {
    cart: { items },
  } = useSelector((state: { cart: CartSliceInterface }) => state)

  if (mobile && items.length === 0 && drawerState) {
    setDrawerState(false)
  }

  const countTotal = (items: CartItemInterface[]) => {
    let total = 0
    items.forEach((item) => {
      total += item.quantity
    })
    return total
  }

  const subtotal = calculateSubtotal(items)

  const [productModelOpen, setProductModelOpen] = useState<boolean>(false)
  const [viewPlate, setViewPlate] = useState<Dish | undefined>()

  return (
    <div className="inventory">
      <div className="inventory__container">
        <div className="inventory-content">
          <p className="inventory-text"> Adults need around 2000 kcal a day</p>
          <div className="popular-category">
            <h3>Popular with other people</h3>
            <div className="horizontal-scroll">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                if (item % 2) {
                  return (
                    <VerticalInventoryItem
                      key={item}
                      image="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
                    />
                  )
                }
                return <VerticalInventoryItem key={item} />
              })}
            </div>
          </div>

          {categories?.map((item) => (
            <div
              className="inventory-category"
              key={item.id}
              id={item.name.toLowerCase().replace(' ', '-')}
            >
              <h3>{item?.name}</h3>
              <div className="inventory-category__items">
                {item?.dishes?.map((dish) => (
                  <HorizontalInventoryItem
                    key={dish.id}
                    onClick={() => {
                      setViewPlate(dish)
                      setProductModelOpen(true)
                    }}
                    dish={dish}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {!mobile && (
          <div className="cart">
            <Cart toggleDrawer={toggleDrawerState} />
          </div>
        )}

        {mobile && items && items.length > 0 && (
          <div className="cart-mobile__button">
            <button type="button" onClick={toggleDrawerState}>
              <div className="cart-quantity">{countTotal(items)}</div>
              <p>View Basket</p>
              <div className="cart-total">${subtotal.toFixed(2)}</div>
            </button>
          </div>
        )}
      </div>

      {mobile && (
        <Drawer
          anchor={'bottom'}
          open={drawerState}
          onClose={toggleDrawerState}
          className="drawer-cart"
        >
          <Cart toggleDrawer={toggleDrawerState} />
        </Drawer>
      )}
      {productModelOpen && (
        <DishModal
          windowWidth={windowWidth}
          dish={viewPlate}
          open={productModelOpen}
          handleClose={() => {
            setProductModelOpen(false)
          }}
        />
      )}
    </div>
  )
}

export default InventoryItems

// const responsive = {
//   1024: {
//     items: 8,
//   },
// }

//   <CarouselComponent responsive={responsive}>
//   <div className="horizontal-scroll">
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//     image="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//     image="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//     image="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//     image="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//     image="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//     image="https://rs-menus-api.roocdn.com/images/491fc50c-93bf-4f7b-85ee-ca56ec982922/image.jpeg?width=123&height=123&auto=webp&format=jpg&fit=crop"
//   />
//   <VerticalInventoryItem
//     onClick={() => {
//       setProductModelOpen(true)
//     }}
//   />
// </div>
//  </CarouselComponent>
