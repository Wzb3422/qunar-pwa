import React from 'react'
import './Header.css'
import '../assets/css/iconfont.css'

function Header({ title }: { title: string }): JSX.Element {

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className='header-wrapper'>
      <div className='header-right-arrow iconfont' onClick={goBack}>&#xe622;</div>
      <div className='header-title'>{title}</div>
    </div>
  )
}

export default Header
