import React from 'react'
import Clients from '../components/Clients'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>

<div className="container">
  <Projects />
  <hr />
     <Clients />
    </div>
    </div>
  )
}

export default Home