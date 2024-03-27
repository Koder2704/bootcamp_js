import React from 'react'
import NotificationComponent from './notification'
import UserTileComponent from './user-tile'
import SearchBarComponent from './search-bar';

import userPP from '../../assets/3.jpg';
import { useNavigate } from 'react-router-dom';

export default function NavBarComponent() {

    const STORAGE_KEY = 'auth';

    const router = useNavigate();
    const [connectedUser, setConnectedUser] = React.useState({
        pp: undefined,
        name: '',
        role: ''
    });

    // const [newNotificationCount, setNewNotificationCount] = React.useState(0);

    React.useEffect(() => {
        const storedUser = localStorage.getItem(STORAGE_KEY);
        const formattedUserInformations = JSON.parse(storedUser);

        const currentUser = {
            pp: userPP,
            name: formattedUserInformations.name,
            role: formattedUserInformations.company.name
        }

        setConnectedUser(currentUser);

        // if (currentUser) {
        //     setNewNotificationCount(prev => prev + 1);
        // }

    }, []);

    const logout = () => {
        router('/login');

        setTimeout(() =>
            localStorage.removeItem(STORAGE_KEY), 3000);
    }

    return (
        <div className='flex justify-between w-screen px-4 items-center fixed border-b backdrop:blur-sm'>
            <div className='flex items-center gap-4'>
                <UserTileComponent user={connectedUser} />
                <SearchBarComponent />
            </div>

            <div className='flex items-center'>
                <NotificationComponent />

                <button onClick={logout} className='bg-transparent border-2 border-red-400 text-red-400 text-xs font-bold w-[90px] py-1 px-2 rounded-md ml-6'>
                    Log out
                </button>
            </div>
        </div>
    )
}
