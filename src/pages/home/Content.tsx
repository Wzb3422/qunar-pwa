import React, { useState, useCallback } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Station from './Station'
import Time from './Time'
import Options from './Options'
import Button from './Button'
import './Content.css'

function Content(): JSX.Element {

  const [stations, setStations] = useState({location: '北京', destination: '上海'})

  const exchangeStations = useCallback(() => {
    setStations(prevState => {
      return {
        location: prevState.destination,
        destination: prevState.location
      }
    })
  }, [])


  return (
    <div>
      <div className='content-bg'></div>
      <div className='content-panel'>
        <Station stations={stations} exchange={exchangeStations}/>
        <Time />
        <Options />
        <Button />
      </div>
    </div>
  )
}

export default Content
