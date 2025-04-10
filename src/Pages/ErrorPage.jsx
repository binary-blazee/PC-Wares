import '../assets/Styles/ErrorPage.css'
import { Link } from 'react-router-dom'

function ErrorPage(){
    return(
        <div className="page">
          <div className="container">
    <div className="content">
      <h1 className="error-code">404</h1>
      <p className="error-message">Page Not Found</p>
      <Link to={'/'} className="home-button">Go to Homepage</Link>
    </div>
  </div>
        </div>
    )
}
export default ErrorPage