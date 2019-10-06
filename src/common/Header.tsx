import React from 'react'
import './Header.css'
import '../assets/css/iconfont.css'

interface HeaderProps {
  title: string
  backTo: () => void
}

function Header({ title, backTo }: HeaderProps): JSX.Element {
  return (
    <div className='header-wrapper'>
      <div className='header-right-arrow iconfont'>&#xe622;</div>
      <div className='header-title'>{title}</div>
    </div>
  )
}

export default Header
