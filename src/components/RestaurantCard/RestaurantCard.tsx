import { Card, CardActionArea, CardMedia } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import { Link } from 'react-router-dom'
import RestaurantBanner from '../../assets/images/restaurant_banner_image.webp'
import './RestaurantCard.css'
import { RestaurantInterface } from './interface'

const RestaurantCard = (props: RestaurantInterface) => {
  const { id, title, photo } = props
  return (
    <Link to={`/restaurant/${id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ width: '100%', height: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={photo ?? RestaurantBanner}
            alt="green iguana"
          />
          <CardContent>
            <h3 className="restaurant__header">{title}</h3>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
export default RestaurantCard
