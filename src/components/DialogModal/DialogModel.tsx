import { Dialog, Modal } from '@mui/material'
import './DialogModel.css'
import { Close } from '../Icons/Icons'

interface DialogModelTypes {
  open: boolean
  handleClose: () => void
  heading: string
  children: JSX.Element | JSX.Element[]
}

const DialogModel = (props: DialogModelTypes) => {
  const { open, handleClose, heading } = props
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="model__card">
        <div className="model__card--header">
          <div className="model__card--heading">{heading}</div>
          <button className="close-button" onClick={handleClose} type="button">
            <Close style={{ fill: '#00ccbc', height: '24px', width: '24px' }} />
          </button>
        </div>
        <div className="model__content">{props.children}</div>
      </div>
    </Dialog>
  )
}
export default DialogModel
