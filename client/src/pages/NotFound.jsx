import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
    <i class="fa-solid fa-triangle-exclamation" size='5em'></i>
    <h1>404</h1>
    <p className='lead'>Sorry,this page doesn't exists</p>
    <Link to='/' className='btn btn-primary'> Go Back</Link>
    </div>
  )
}

export default NotFound