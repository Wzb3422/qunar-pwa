import React from 'react'
import './Entries.css'

interface EntryPorps {
  text: string
  imgUrl: string
}

function Entry({ text, imgUrl }: EntryPorps): JSX.Element {
  return (
    <div className='entry-item'>
      <img src={imgUrl} alt="logo"/>
      <div className='entry-item-text'>{text}</div>
    </div>
  )
}

function Entries(): JSX.Element {

  const EntriesList = [
    {
      imgUrl: 'https://s.qunarzz.com/train_touch/pictures/icon_qiang.png',
      text: '抢票',
      id: 1
    },
    {
      imgUrl: 'https://s.qunarzz.com/train_touch/pictures/icon_rail.png',
      text: '火车境外',
      id: 2
    },
    {
      imgUrl: 'https://s.qunarzz.com/train_touch/pictures/icon-order.png',
      text: '我的订单',
      id: 3
    }
  ]

  return (
    <div className='entries-wrapper'>
      {
        EntriesList.map(({text, imgUrl, id}) => {
          return (
            <Entry text={text} imgUrl={imgUrl} key={id}/>
          )
        })
      }
    </div>
  )

}

export default Entries
