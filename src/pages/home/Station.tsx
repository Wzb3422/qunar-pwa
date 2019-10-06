import React from 'react'

interface StationProps {
  stations: { location: string, destination: string }
  exchange: () => void
}

function Station({stations: { location, destination }, exchange}: StationProps) {
  return (
    <div className='content-station'>
      <div className="station department">{location}</div>
      <div className='station-exchange iconfont' onClick={exchange}>&#xe665;</div>
      <div className="station destination">{destination}</div>
    </div>
  )
}

export default Station
