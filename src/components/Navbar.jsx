import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../theme.context';


function Navbar() {
      const { Theme, toggleTheme } = useTheme();
  return (
      <nav className="navbar">
          <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
          </div>
          <div>
              <label>
                  <input type="checkbox"
                      onChange={()=>toggleTheme()}
                      checked={Theme == "dark" } />
              </label>
          </div>
    </nav>
  )
}

export default Navbar