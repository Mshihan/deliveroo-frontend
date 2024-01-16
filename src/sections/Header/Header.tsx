import { Dialog, Drawer } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuIcon, Person, SearchIcon } from '../../components/Icons/Icons'
import OutlineButton from '../../components/OutlineButton/OutlineButton'
import SearchModal from '../../components/SearchModal/SearchModal'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Header.css'

const Header = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false)

  const toggleDrawerState = () => {
    setDrawerState((state) => !state)
  }

  const navigate = useNavigate()

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

  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false)
  const toggleHandler = () => setSearchModalOpen((state) => !state)

  return (
    <div className="header">
      <div className="header__content">
        <div className="logo" onClick={() => navigate('/')}>
          <img
            src={
              'https://consumer-component-library.roocdn.com/27.0.1/static/images/logo-teal.svg'
            }
            alt="deliveroo brand logo"
          />
        </div>
        <div className="search-box">
          <div className="search-box__card">
            <input
              id="search"
              className="search-input"
              placeholder="Search Tossed - St Martin's Lane"
            />
            <SearchIcon
              style={{ height: '18px', width: '18px' }}
              className="search-icon"
            />
          </div>
          <div className="search-box__button">
            <OutlineButton onClick={toggleHandler}>
              <SearchIcon
                style={{ height: '18px', width: '18px', fill: '#00ccbc' }}
              />
            </OutlineButton>
          </div>
        </div>

        <div className="header-actions">
          <OutlineButton
            onClick={() => navigate('/login')}
            id="sign-up-or-login"
          >
            <MenuIcon
              style={{ fill: '#00ccbc', height: '18px', width: '18px' }}
            />
            <p className="outline">Sign up or log in</p>
          </OutlineButton>

          <OutlineButton onClick={() => toggleDrawerState()}>
            <Person
              style={{ fill: '#00ccbc', height: '18px', width: '18px' }}
            />
            <p className="">Account</p>
          </OutlineButton>
          {!mobile && (
            <Drawer
              anchor={'right'}
              open={drawerState}
              onClose={toggleDrawerState}
            >
              <Sidebar toggleSidebar={toggleDrawerState} />
            </Drawer>
          )}
          {mobile && (
            <Dialog
              open={drawerState}
              onClose={toggleDrawerState}
              className="dialog-container"
              fullScreen={mobile}
            >
              <Sidebar toggleSidebar={toggleDrawerState} />
            </Dialog>
          )}
        </div>
      </div>

      <SearchModal open={searchModalOpen} handleClose={toggleHandler} />
    </div>
  )
}

export default Header
