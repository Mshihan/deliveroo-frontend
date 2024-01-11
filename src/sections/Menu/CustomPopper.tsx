import {
  ClickAwayListener,
  MenuItem as MaterialMenuItem,
  Menu as MaterialUIMenu,
  Paper,
  Popper,
} from '@mui/material'
import { Link } from 'react-scroll'
import { MenuItem } from './interface'
import './Menu.css'

interface CustomPopperProps {
  open: boolean
  anchorEl: HTMLElement | null
  handleClose: () => void
  showMoreData: MenuItem[]
  toggleClass: (menuState: boolean) => void
}

const CustomPopper: React.FC<CustomPopperProps> = ({
  open,
  anchorEl,
  handleClose,
  showMoreData,
  toggleClass,
}) => {
  const handleLinkClick = () => {
    console.log('executing')
    handleClose()
  }

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
      placement="bottom-start"
    >
      {({ TransitionProps, placement }) => (
        <ClickAwayListener onClickAway={handleLinkClick}>
          <Paper>
            <MaterialUIMenu
              id="menu-list"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              {...(TransitionProps as any)}
              placement={placement}
            >
              {showMoreData.length > 0 &&
                showMoreData.map((category) => (
                  <MaterialMenuItem className="" onClick={handleClose}>
                    <li
                      className="menu-list__item"
                      id={`menuitem-${category.id}`}
                    >
                      <Link
                        activeClass="active"
                        smooth
                        spy
                        to={category.name.toLowerCase().replace(' ', '-')}
                        offset={-130}
                        onSetInactive={() => {
                          handleClose()
                        }}
                        onSetActive={() => {
                          toggleClass(false)
                        }}
                      >
                        {category.name}
                      </Link>
                    </li>
                  </MaterialMenuItem>
                ))}
            </MaterialUIMenu>
          </Paper>
        </ClickAwayListener>
      )}
    </Popper>
  )
}

export default CustomPopper
