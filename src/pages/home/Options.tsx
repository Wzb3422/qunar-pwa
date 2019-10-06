import React, { ChangeEvent, useCallback } from 'react'

interface OptionProps {
  text: string
  onCheckChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Option({ text, onCheckChange }: OptionProps): JSX.Element {
  return (
    <div className="content-option">
      <input type="checkbox" onChange={onCheckChange}/>
      <div style={{marginLeft: 6}}>{text}</div>
    </div>
  )
}

function Options(): JSX.Element {

  const logger = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }, [])

  return (
    <div className='content-options'>
      <Option text='只看高铁/动车' onCheckChange={logger}/>
      <Option text='学生票' onCheckChange={logger}/>
    </div>
  )
}

export default Options
