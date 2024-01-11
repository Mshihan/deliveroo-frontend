import './Card.css'

interface CustomCardInterface {
  children: JSX.Element | JSX.Element[]
}

const CustomCard = (props: CustomCardInterface) => {
  return <div className="custom-card">{props.children}</div>
}

export default CustomCard
