import { Dialog } from '@mui/material'
import { Close } from '../Icons/Icons'
import './DialogModel.css'

interface DialogModelTypes {
  open: boolean
  handleClose: () => void
  heading: string
  windowWidth: number
  children: JSX.Element | JSX.Element[]
}

const DialogModel = (props: DialogModelTypes) => {
  const { open, handleClose, heading, windowWidth } = props

  const mobile: boolean = windowWidth < 540

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className="dialog-container"
      fullScreen={mobile}
    >
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
