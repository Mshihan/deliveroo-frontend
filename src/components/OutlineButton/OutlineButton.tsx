import './OutlineButton.css'

const OutlineButton = (props: any) => {
  return (
    <button type="button" className="outline-button" {...props}>
      {props.children}
    </button>
  )
}
export default OutlineButton
