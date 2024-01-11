import { AlertColor } from '@mui/material'

export interface CustomSnackbarProp {
  open: boolean
  onClose: () => void
  message: string
  severity: AlertColor
  background: string
  bottom?: boolean
  left?: boolean
}
