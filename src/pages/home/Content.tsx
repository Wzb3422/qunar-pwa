import React from 'react'
import Station from './Station'
import Time from './Time'
import Options from './Options'
import Button from './Button'
import './Content.css'


function Content(): JSX.Element {
  return (
    <div>
      <div className='content-bg'></div>
      <div className='content-panel'>
        <Station />
        <Time />
        <Options />
        <Button />
      </div>
    </div>
  )
}

export default Content
