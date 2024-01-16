import { Phone, World } from '../Icons/Icons'
import './InfoModalContent.css'
import { InfoModalContentProps } from './interface'

const InfoModalContent = (props: InfoModalContentProps) => {
  const { name, note } = props
  return (
    <div className="info-model">
      <h2 className="info-model--heading">About Tossed - {name}</h2>

      <div className="tossed-deliveroo-content">Tossed Deliveroo Menu</div>
      <h2 className="info-model--heading">Allergens</h2>
      <div className="tossed-deliveroo-content">
        Questions? Ask Tossed - {name} about their ingredients and cooking
        methods
        <div className="tossed-deliveroo--action">
          <Phone style={{ fill: '#00ccbc', height: '24px', width: '24px' }} />{' '}
          Call Tossed - {name} on +447541904227
        </div>
      </div>

      <h2 className="info-model--heading">Hygiene rating</h2>

      <div className="tossed-deliveroo-content">
        The Food Standards Agency updates food hygiene ratings regularly. Visit
        the FSA’s website to see the most recent rating for this partner. Last
        updated: 08 Jan 2024
        <div className="tossed-deliveroo--action">
          <World style={{ fill: '#00ccbc', height: '24px', width: '24px' }} />{' '}
          View hygiene rating
        </div>
      </div>

      <h2 className="info-model--heading">Notes</h2>
      <div className="tossed-deliveroo-content">{note}</div>
    </div>
  )
}
export default InfoModalContent
