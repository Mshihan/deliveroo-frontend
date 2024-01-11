import './FilledButton.css'

const FilledButton = (props: any) => {
  return (
    <button type="button" className="filled-button" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default FilledButton
