import { IconButton } from '@mui/material'
import AppStoreDownload from '../../assets/icons/app-store.png'
import PlayStoreDownload from '../../assets/icons/play-store.png'
import { Facebook, Instagram, Twitter } from '../../components/Icons/Icons'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-card-container">
        <div className="footer-card">
          <h3>Discover Deliveroo</h3>
          <div className="links">
            <Link to="/">Investors</Link>
            <Link to="/">About us</Link>
            <Link to="/">Takeaway</Link>
            <Link to="/">More</Link>
            <Link to="/">Newsroom</Link>
            <Link to="/">Engineering Blog</Link>
            <Link to="/">Design Blog</Link>
            <Link to="/">Gift Cards</Link>
            <Link to="/">Deliveroo Students</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Restaurant signup</Link>
            <Link to="/">Become a rider</Link>
          </div>
        </div>
        <div className="footer-card">
          <h3>Legal</h3>
          <div className="links">
            <Link to="/">Terms and conditions</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Modern Slavery Statement</Link>
            <Link to="/">Tax Strategy</Link>
            <Link to="/">Section 172 Statement</Link>
            <Link to="/">Public Authority Requests</Link>
          </div>
        </div>
        <div className="footer-card">
          <h3>Help</h3>
          <div className="links">
            <Link to="/">Contact</Link>
            <Link to="/">FAQs</Link>
            <Link to="/">Cuisines</Link>
            <Link to="/">Brands</Link>
          </div>
        </div>
        <div className="footer-card">
          <h3>Take Deliveroo with you</h3>
          <div className="links">
            <Link to="/">
              <img src={AppStoreDownload} alt="download from app store" />
            </Link>
            <Link to="/">
              <img src={PlayStoreDownload} alt="download from google play" />
            </Link>
          </div>
        </div>
      </div>
      <div className="more-info">
        <div className="socials">
          <IconButton>
            <Facebook className="footer__facebook" />
          </IconButton>
          <IconButton>
            <Twitter className="footer__twitter" />
          </IconButton>
          <IconButton>
            <Instagram className="footer__instagram" />
          </IconButton>
        </div>
        <p className="text-small">© 2023 Deliveroo</p>
      </div>
    </div>
  )
}

export default Footer
