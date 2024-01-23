import {Link} from 'react-router-dom';
const NotFound = () => {
  return (
    <div>
        <h2>Page doesn't exist</h2>
        <p>you might be came in wrong page</p>
        <Link to="/">Got to Home Page</Link>
    </div>
  )
}

export default NotFound