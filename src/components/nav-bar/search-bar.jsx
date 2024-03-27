import React from 'react';
import { TfiSearch } from 'react-icons/tfi';

export default function SearchBarComponent() {
  return (
    <div className='flex items-center gap-2 m-2 bg-gray-200 rounded-lg h-6 w-[260px] p-2'>
        <TfiSearch size={14} />
        <input className='bg-transparent font-bold text-xs focus:outline-none placeholder:font-bold' type='text' placeholder='Search something...' />
    </div>
  )
}
