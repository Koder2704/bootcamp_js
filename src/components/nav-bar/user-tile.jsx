import React from 'react';
import one from '../../assets/1.jpg';

export default function UserTileComponent({ user = { pp: one, name: 'Daniel KEMBEU', role: 'Software Dev - UI/UX Designer'} }) {
  return (
    <div className='flex items-center gap-3 m-2'>
        <div className='rounded-full w-[40px] h-[40px] overflow-hidden'>
            <img className='w-full h-full' src={user.pp} alt='User profile picture' />
        </div>

        <div>
            <h4 className='font-bold text-gray-600 m-0 text-sm'>{user.name}</h4>
            <p className='text-xs text-gray-400'>{user.role}</p>
        </div>
    </div>
  )
}
