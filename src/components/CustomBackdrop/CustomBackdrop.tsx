import { Backdrop, CircularProgress } from '@mui/material'
import './CustomBackdrop.css'
import { CustomBackdropProps } from './interface'

const CustomBackdrop = (props: CustomBackdropProps) => {
  const { show } = props
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={show}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default CustomBackdrop
