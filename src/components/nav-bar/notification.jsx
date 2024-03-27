import React from 'react';

// icons
import { TfiBell } from 'react-icons/tfi';

export default function NotificationComponent({ notificationCount = 0 }) {
  return (
    <div className='relative text-gray-600 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-300 m-2'>
        <TfiBell size={22} />
        <span className='absolute -top-1 -right-2 bg-red-400 text-sm text-white w-4 h-4 p-1 rounded-full flex items-center justify-center'>
            {notificationCount}
        </span>
    </div>
  )
}
