import React from 'react';
import one from '../../assets/1.jpg';
import { useNavigate } from 'react-router-dom';


export function ProfilePictureComponent({ image, width, height, rounded, roundedValue }) {
  return (
    <div className={`${rounded ? 'rounded-full' : 'rounded-' + roundedValue} w-${width} h-${height} overflow-hidden`}>
      <img className='w-full h-full' src={image} alt='User profile' />
    </div>
  )
}

export default function UserTileComponent({ user = { pp: one, name: 'Daniel KEMBEU', role: 'Software Dev - UI/UX Designer' } }) {

  const router = useNavigate();

  return (
    <div onClick={() => router(`/profile/${user.name.replace(' ', '_').toLowerCase()}`)} className='flex items-center gap-3 m-2'>
      <ProfilePictureComponent
        rounded
        width={'[40px]'}
        height={'[40px]'}
        image={user.pp} />

      <div>
        <h4 className='font-bold text-gray-600 m-0 text-sm'>{user.name}</h4>
        <p className='text-xs text-gray-400'>{user.role}</p>
      </div>
    </div>
  )
}
