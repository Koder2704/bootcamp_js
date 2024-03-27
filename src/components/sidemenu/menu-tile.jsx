import React from 'react'

export default function MenuTileComponent({ item }) {
    let activeClass = 'bg-gray-200  rounded-lg';
    return (
        <div className='my-1 py-2 px-4 flex items-center gap-4 w-full'>
            <item.Icon />
            <h4 className='text-xs font-bold text-gray-500'>{item.title}</h4>
        </div>
    )
}
