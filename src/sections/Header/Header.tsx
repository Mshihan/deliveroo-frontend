import { Drawer } from '@mui/material'
import { useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'
import BrandLogo from '../../assets/icons/logo.svg'
import { MenuIcon, Person } from '../../components/Icons/Icons'
import OutlineButton from '../../components/OutlineButton/OutlineButton'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Header.css'

const Header = () => {
  const [drawerState, setDrawerState] = useState<boolean>(false)

  const toggleDrawerState = () => {
    setDrawerState((state) => !state)
  }

  const navigate = useNavigate()

  return (
    <div className="header">
      <div className="logo" onClick={() => navigate('/')}>
        <img src={BrandLogo} alt="deliveroo brand logo" />
      </div>
      <div className="search-box">
        <input
          id="search"
          className="search-input"
          placeholder="Search Tossed - St Martin's Lane"
        />
        <CgSearch className="search-icon" size={20} />
      </div>

      <div className="header-actions">
        <OutlineButton onClick={() => navigate('/login')}>
          <MenuIcon
            style={{ fill: '#00ccbc', height: '18px', width: '18px' }}
          />
          <p className="outline">Sign up or Login</p>
        </OutlineButton>

        <OutlineButton onClick={() => toggleDrawerState()}>
          <Person style={{ fill: '#00ccbc', height: '18px', width: '18px' }} />
          <p className="">Account</p>
        </OutlineButton>
        <Drawer anchor={'right'} open={drawerState} onClose={toggleDrawerState}>
          <Sidebar toggleSidebar={toggleDrawerState} />
        </Drawer>
      </div>
    </div>
  )
}

export default Header
