import { Dialog } from '@mui/material'
import { useEffect, useState } from 'react'
import { BackIcon } from '../Icons/Icons'
import './SearchModal.css'

interface DialogModelTypes {
  open: boolean
  handleClose: () => void
}

const SearchModal = (props: DialogModelTypes) => {
  const { open, handleClose } = props

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const mobile: boolean = windowWidth < 540

  return (
    <Dialog
      open={open}
      className="dialog__search-container"
      fullScreen={mobile}
      PaperProps={{ sx: { borderRadius: '0' } }}
    >
      <div className="model__search__card">
        <div className="model__search__header">
          <BackIcon
            style={{ fill: '#00ccbc', height: '24px', width: '24px' }}
            onClick={handleClose}
          />
          <input
            id="search"
            className="model__search__input"
            placeholder="Search Tossed - St Martin's Lane"
          />
        </div>
        <div className="model__search__result"></div>
      </div>
    </Dialog>
  )
}
export default SearchModal
