import React from 'react'
import {Link} from 'react-router-dom'

export const NavbarToDo = () => {
    return(
    <header>
        <nav className="nav">
          <div className="logo">
            <Link to="/">
              ToDo List
            </Link>
          </div>
          <div className="pages">
            <Link to="countries">Pais</Link>
            <Link to="cities">Ciudad</Link>
            <Link to="org">Empresa</Link>
            <Link to='jobs'>Posiciones</Link>
          </div>
        </nav>
      </header>
    )
    
}

export default NavbarToDo;