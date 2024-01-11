import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found__container">
      <div className="not-found">
        <h1>Not Found</h1>
        <p>
          Sorry, but the page you are looking for doesn’t exist. But there’s
          loads more to see!
        </p>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  )
}

export default NotFound
