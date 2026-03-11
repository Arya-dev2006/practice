import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div id="Nav">
        <h1>Horizon Courts</h1>
        <div className="links">
          <Link to='/abc'><p>about us</p></Link>
            <p>services</p>
            <p>coaches</p>
            <p>events</p>
            <p>contacts</p>
        </div>
        <div className="booking-button">
            <h2>Book now</h2>
        </div>
      </div>
    </div>
  )
}

export default Nav
