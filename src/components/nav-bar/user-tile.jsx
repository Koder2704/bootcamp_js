import React from 'react';
import one from '../../assets/1.jpg';
import { useNavigate } from 'react-router-dom';

export default function UserTileComponent({ user = { pp: one, name: 'Daniel KEMBEU', role: 'Software Dev - UI/UX Designer' } }) {

  const router = useNavigate();

  return (
    <div onClick={() => router(`/profile/${user.name.replace(' ', '_').toLowerCase()}`)} className='flex items-center gap-3 m-2'>
      <div className='rounded-full w-[40px] h-[40px] overflow-hidden'>
        <img className='w-full h-full' src={user.pp} alt='User profile' />
      </div>

      <div>
        <h4 className='font-bold text-gray-600 m-0 text-sm'>{user.name}</h4>
        <p className='text-xs text-gray-400'>{user.role}</p>
      </div>
    </div>
  )
}
