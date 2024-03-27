import React from 'react'
import { trendings } from '../../utils/trendings'
import CardItemComponent from './card-item'

export default function CardsComponent() {
  return (
    <div className='flex flex-wrap w-full'>
        {trendings.slice(0, 4).map((item, index) => <CardItemComponent key={index} item={item} />)}
    </div>
  )
}
