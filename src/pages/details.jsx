import * as React from 'react';
import NavBarComponent from '../components/nav-bar/nav-bar';
import one from '../assets/1.jpg';
import { trendings } from '../utils/trendings';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {

    const { id } = useParams();

    const [details, setDetails] = React.useState();

    React.useEffect(() => {
        const matchingItem = trendings.find((_, index) => index === id);
        setDetails(matchingItem);
    }, [id]);

    return (
        <>
            <NavBarComponent />

            <section className='pt-20 px-10 w-full h-full'>
                <img src={one} alt='Alt' className='rounded-lg h-[300px] w-full' />

                <div className='my-10'>
                    <h2 className='text-2xl font-bold text-gray-500 mb-4'>{details?.title}</h2>
                    <h4 className='text-lg font-bold text-blue-400'>Description:</h4>
                    <p className='text-gray-600'>{details?.description}</p>
                </div>
            </section>
        </>
    )
}