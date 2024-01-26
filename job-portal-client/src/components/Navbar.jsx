import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const navItems = [
        {path: "/", title: "start a search"},
        {path: "/jobs", title: "View Jobs"},
        {path: "/salary", title: "Estimated Salary"},
        {path: "/add-jobs", title: "Add Jobs"},
    ]
  return (
    <header>
        <nav>
            <a href="/" className='flex items-center gap-2 text-2xl text-primary'>
            <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="15,1.5 19,10 30,11 21,15 24,30 15,24 6,30 9,15 0,11 11,10"
    style={{
      fill: '#285185',
      stroke: '#285185',
      strokeWidth: 1,
      fillRule: 'evenodd'
    }}
  />
</svg>

             Job Board</a>
             {/*nav on large devices */}
             <ul>
                {
                    navItems.map(({path, title})=> (
                        <li key={path}>
                            <NavLink
                            to= {path}
                            className={({ isActive }) => 
                            isActive? "active" : ""
                            }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
             </ul>
        </nav>
   
   </header>
  )
}

export default Navbar