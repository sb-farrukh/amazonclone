import React from 'react'
import { LocationOnOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import "../Header/Header.css"
import { Link } from 'react-router-dom';
import logo from "../../images/Amazon_Logo.png"
const Header = () => {
  return (
    
       <nav className='header'>
<Link to ="/" >
  <img src={logo} alt="logo" className='header-logo'/>
</Link>
<div className='header-option' style={{marginRight:"-10px"}}>
  <LocationOnOutlined/>
  </div>
  <div className='header-option'>
    {/* <span className='header-option1'>hello</span> */}
    <span className='header-option2'>address</span>
  </div>
  <div className='search'>
    <select>
     <option >All</option>
    </select>
    <input type="text" className='searchInput'/>
      <Search className='searchIcon'/>
  </div>
  <div className='header-nav'>
<Link to="login" className="header-link">
<div className='header-option'>
{/* <span className='header-option1'>hello guest</span> */}
    <span className='header-option2'>sing in</span>
</div>
</Link>
<Link to="order" className="header-link">
<div className='header-option'>
{/* <span className='header-option1'>returns</span> */}
    <span className='header-option2'>order</span>
</div>
</Link>
<Link to="checkout" className="header-link">
<div className='header-basket'>
<ShoppingCartOutlined/>
<span className='header-option2 basket-count'>0</span>
</div>
</Link>
  </div>
</nav>
   
  )
}

export default Header
