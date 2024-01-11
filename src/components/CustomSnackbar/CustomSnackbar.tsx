import { Alert, Snackbar } from '@mui/material'
import './CustomSnackbar.css'
import { CustomSnackbarProp } from './interface'

const CustomSnackbar = (props: CustomSnackbarProp) => {
  const {
    open,
    onClose,
    message,
    background,
    severity,
    bottom = false,
    left = false,
  } = props
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      sx={{ zIndex: '10000000' }}
      onClose={onClose}
      anchorOrigin={{
        vertical: bottom ? 'bottom' : 'top',
        horizontal: 'right',
      }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%', background: background ?? '', zIndex: 20000 }}
      >
        <p className="snackbar__description">{message}</p>
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
