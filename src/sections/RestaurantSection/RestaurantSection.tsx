import { useState } from 'react'
import DeliveryLogo from '../../assets/icons/delivery.svg'
import DialogModel from '../../components/DialogModal/DialogModel'
import { BackIcon, GroupOrder } from '../../components/Icons/Icons'
import InfoModalContent from '../../components/InfoModelContent/InfoModalContent'
import OutlineButton from '../../components/OutlineButton/OutlineButton'
import RestaurantMetaCard from '../../components/RestaurantMetaCard/RestaurantMetaCard'
import './RestaurantSection.css'
import { RestaurantSectionProps } from './interface'
import { Navigate, useNavigate } from 'react-router-dom'

const RestaurantSection = (props: RestaurantSectionProps) => {
  const [infoModelStatus, setInfoModelStatus] = useState<boolean>(false)

  const { restaurant } = props
  const toggleModal = () => setInfoModelStatus((state) => !state)

  const navigate = useNavigate()

  return (
    <>
      <div className="restaurant">
        <div
          className="restaurant-back flex-start-center"
          onClick={() => navigate(-1)}
        >
          <BackIcon /> <p>Back</p>
        </div>

        <div className="restaurant-content">
          <div className="restaurant-content__image">
            <img src={restaurant?.photo} alt="restaurant banner" />
          </div>

          <div className="restaurant-content__content">
            <div className="restaurant-content__content-left">
              <h2 className="restaurant-content__content-left--header">
                {restaurant?.name}
              </h2>
              <p className="restaurant-content__content-left--category">
                Chicken · Salads · Healthy
              </p>
              <p className="restaurant-content__content-left--meta">
                {restaurant?.distance} miles away · Opens at{' '}
                {restaurant?.openTime} · ${restaurant?.minimumAmount} minimum ·
                Free delivery
              </p>
              <RestaurantMetaCard
                info
                title="Info"
                description="Map, allergens and hygiene rating"
                onClick={toggleModal}
              />
              <RestaurantMetaCard
                review
                title="4.8 Excellent"
                description="See all 500 reviews"
                onClick={toggleModal}
              />
            </div>

            <div className="restaurant-content__content-right">
              <div className="restaurant-content__content-right__delivery unselectable">
                <img
                  src={DeliveryLogo}
                  alt="delivery logo"
                  width="24px"
                  height="24px"
                  className="restaurant-content__content-right__delivery"
                />
                <p>Deliver</p>

                <p className="restaurant-content__content-right__delivery--action">
                  Change
                </p>
              </div>

              <OutlineButton>
                <GroupOrder
                  style={{ fill: '#00ccbc', height: '18px', width: '18px' }}
                />
                <p className="">Start Group Order</p>
              </OutlineButton>
            </div>
          </div>
        </div>
      </div>

      <DialogModel
        open={infoModelStatus}
        heading="Info"
        handleClose={() => {
          setInfoModelStatus(false)
        }}
      >
        <InfoModalContent name={restaurant?.name} note={restaurant?.notes} />
      </DialogModel>
    </>
  )
}

export default RestaurantSection
