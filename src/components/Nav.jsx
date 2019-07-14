import React from 'react'


//object distructruing get totalCoung from props
export default function Nav( {totalCount} ) {
  return (
    <nav className="navbar navbarlight bg-light">
        <a href="http" className="navbar-brand">
          Navbar <span className="badge badge-pill badge-secondary">{totalCount}</span>
        </a>
    </nav>
  )
}
