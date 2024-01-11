export interface RestaurantInterface {
  id: string
  name: string
  categories: Categories[]
  notes: string
  photo: string
  distance: string
  openTime: string
  deliveryFee: string
  minimumAmount: string
}

export interface Categories {
  name: string
  id: string
  dishes: Dish[]
}

export interface Dish {
  id: string
  title: string
  description: string
  contains: string
  kcal: string
  price: string
  available: boolean
}

export interface DishInterface {
  id: string
  title: string
  description: string
  kcal: string
  price: string
}

export interface AuthSliceInterface {
  token: string
  loading: boolean
  error: null | string | undefined
  loginStatus: boolean
}

export interface RestaurantsStateInterface {
  restaurants: RestaurantInterface[]
  loading: boolean
  error: null | string | undefined
}

export interface CartSliceInterface {
  items: CartItemInterface[]
  loading: boolean
  error: null | string | undefined
  message: null | string | undefined
}

export interface CartItemInterface {
  dish?: Dish
  quantity: number
}

export interface OrderItemInterface {
  id: string
  quantity: string
}
