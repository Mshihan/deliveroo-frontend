import { IconButton } from '@mui/material'
import './Footer.css'
import { Facebook, Instagram, Twitter } from '../../components/Icons/Icons'
import AppStoreDownload from '../../assets/icons/app-store.png'
import PlayStoreDownload from '../../assets/icons/play-store.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-card-container">
        <div className="footer-card">
          <h3>Discover Deliveroo</h3>
          <div className="links">
            <a href="#">Investors</a>
            <a href="#">About us</a>
            <a href="#">Takeaway</a>
            <a href="#">More</a>
            <a href="#">Newsroom</a>
            <a href="#">Engineering Blog</a>
            <a href="#">Design Blog</a>
            <a href="#">Gift Cards</a>
            <a href="#">Deliveroo Students</a>
            <a href="#">Careers</a>
            <a href="#">Restaurant signup</a>
            <a href="#">Become a rider</a>
          </div>
        </div>
        <div className="footer-card">
          <h3>Legal</h3>
          <div className="links">
            <a href="#">Terms and conditions</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Modern Slavery Statement</a>
            <a href="#">Tax Strategy</a>
            <a href="#">Section 172 Statement</a>
            <a href="#">Public Authority Requests</a>
          </div>
        </div>
        <div className="footer-card">
          <h3>Help</h3>
          <div className="links">
            <a href="#">Contact</a>
            <a href="#">FAQs</a>
            <a href="#">Cuisines</a>
            <a href="#">Brands</a>
          </div>
        </div>
        <div className="footer-card">
          <h3>Take Deliveroo with you</h3>
          <div className="links">
            <a href="#">
              <img src={AppStoreDownload} alt="download from app store" />
            </a>
            <a href="#">
              <img src={PlayStoreDownload} alt="download from google play" />
            </a>
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
