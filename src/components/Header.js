 import  React from 'react'
 import { Link } from 'react-router-dom';
 
  const Headers= () => {
   return (
     <div>
        {/* <h1> Headers </h1> */}
            <ul>
                <li><Link to='/home'><p>Home</p></Link></li>
                <li><Link to='/aboutUs'><p>About us</p></Link></li>
                <li><Link to='/login'><p>Login</p></Link></li>
                <li><Link to='/signUp'><p>Sign up</p></Link></li>
                <li><Link to='/popular'>popular</Link></li>
            </ul>

     </div>
   )
 }
 export default Headers;
 