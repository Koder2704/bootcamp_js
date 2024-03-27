import React from 'react';
import img from '../assets/3.jpg';
import { ProfilePictureComponent } from '../components/nav-bar/user-tile';
import { useParams } from 'react-router-dom';

export default function UserProfilePage() {

    const { username } = useParams();

    const [user, setUser] = React.useState();

    React.useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    const datas = await response.json();

                    const formattedUsername = username.replace('_', ' ')
                    setUser(datas.find(user => user.name.toLowerCase() === formattedUsername));

                    console.table(user);
                } catch (error) {
                    alert(error.message);
                }
            }
        )()
    }, [username]);


    return (
        <div className='p-14 w-full h-full grid grid-cols-2'>

            <div className=''>
                <ProfilePictureComponent
                    image={img}
                    width={'[260px]'}
                    height={'[260px]'}
                    rounded={false}
                    roundedValue='xl'
                />
                {/* <input ref={imageRef} className='mt-6' type="file" placeholder='Update picture' /> */}
            </div>

            <div className='flex justify-start w-full'>
                <ul className='flex flex-col gap-6'>
                    <li>
                        <h4 className='text-lg font-bold text-gray-500'>Fullname: </h4>
                        <p className='text-2xl font-bold text-gray-400'>{user?.name}</p>
                    </li>
                    <li>
                        <h4 className='text-lg font-bold text-gray-500'>Company: </h4>
                        <p className='text-2xl font-bold text-gray-400'>{user?.company.name}</p>
                    </li>
                    <li>
                        <h4 className='text-lg font-bold text-gray-500'>Phone: </h4>
                        <p className='text-2xl font-bold text-gray-400'>{user?.phone}</p>
                    </li>
                    <li>
                        <h4 className='text-lg font-bold text-gray-500'>Email: </h4>
                        <p className='text-2xl font-bold text-gray-400'>{user?.email}</p>
                    </li>
                    <li>
                        <h4 className='text-lg font-bold text-gray-500'>Address: </h4>
                        <p className='text-2xl font-bold text-gray-400'>{user?.address.street}</p>
                    </li>
                    <li>
                        <h4 className='text-lg font-bold text-gray-500'>Website: </h4>
                        <p className='text-2xl font-bold text-gray-400'>{user?.website}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}