import React from 'react'
import { NavLink } from 'react-router-dom'

interface MenuIconProps {
  link: string;
  icon: string;
  quantity?: number;
  hideOnMobile?: boolean;
}

const MenuIcon = ({ link, icon, quantity, hideOnMobile }: MenuIconProps) => {


  return (
    <NavLink className={ 'menu-icon  ${hideOnMobile ? "d-none d-md-flex" : ""}' } to={link} end>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
      <i className={icon}></i>
    </NavLink> 
  )
}

export default MenuIcon