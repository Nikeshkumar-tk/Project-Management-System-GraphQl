import React from 'react'
import './css/Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header-nav-bar'>
        <div className='heading'>
        <a className='navbar-brand' href='/'>
        <div className='d-flex'>
            <img src='https://github.com/bradtraversy/project-mgmt-graphql/blob/main/client/src/components/assets/logo.png?raw=true' className='mr-2'></img>
        <div>Project Management</div>
        </div>
          </a>

</div>    

{/* Link to add client page */}

<Link to="/addclient">
<button className='addClient'><i class="fa-solid fa-user-plus"></i> Add client</button>
</Link>

{/* Libnk to add project page using add project button */}

<Link to='/addproject'>
<button className='addProject'><i class="fa-solid fa-plus"></i> Add project</button>
</Link>
    </nav>
  )
}

export default Header