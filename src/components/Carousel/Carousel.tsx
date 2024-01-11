import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { BackIcon, NextIcon } from '../Icons/Icons'
import './Carousel.css'

const CarouselComponent = (props: any) => {
  return (
    <AliceCarousel
      responsive={props.responsive}
      autoWidth={false}
      items={props.children}
      renderPrevButton={() => {
        return <BackIcon />
      }}
      renderNextButton={() => {
        return <NextIcon />
      }}
    />
  )
}

export default CarouselComponent
