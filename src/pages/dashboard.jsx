import React from 'react'
import NavBarComponent from '../components/nav-bar/nav-bar'
import MenuComponent from '../components/sidemenu/menu';
import CardsComponent from '../components/feeds/cards';
import { useNavigate } from 'react-router-dom';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';

export default function DashboardPage() {

  const [user, setUser] = React.useState({});
  const router = useNavigate();

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('auth')));
  }, []);

  return (
    <div>
      <NavBarComponent />

      <MenuComponent />

      <section className='lg:pl-[20%] md:pl-[40%] sm:pl-[48%] w-screen h-screen xl:pl-[15%] pt-20'>
        <div className='mb-4 flex justify-between items-center mr-8'>
          <div>
            <h4 className='font-bold text-xl text-gray-600'>Welcome, <span className='text-blue-400'>{user.name}</span> ! 👋🏿</h4>
            <p className='text-gray-400 text-sm'>Discover the week best trending with awesome filters.</p>
          </div>

          <button className='active:bg-gray-300 text-gray-500 bg-gray-200 px-3 py-1 w-24 rounded-lg font-bold'
            onClick={() => router('/trendings')}
          >
            See all
          </button>
        </div>

        <CardsComponent />

        <div className='flex justify-between  items-center mr-8 my-6'>
          <div>
            <h4 className='font-bold text-xl text-gray-600'>Discovery Channels</h4>
            <p className='text-gray-400 text-sm'>
              In search of greatest channels of trendings, you found the right place.
            </p>
          </div>

          <button className='active:bg-gray-300 text-gray-500 bg-gray-200 px-3 py-1 w-24 rounded-lg font-bold'
            onClick={() => router('/trendings')}
          >
            See all
          </button>
        </div>

        {/*  */}
        <div className='grid grid-cols-2 gap-2 w-full pr-8'>
          <div className='min-h-[320px] min-w-min relative'>
            <h4 className='font-bold text-xl text-white absolute bottom-24 left-8'>Youtube Channels</h4>
            <p className='font-medium text-sm text-white absolute bottom-12 w-[26rem] left-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sed omnis saepe aspernatur fugit adipisci.</p>
            <img src={one} alt="Image" className='w-full max-h-[300px] rounded-lg' />
          </div>
          <div className='min-h-[320px] min-w-min relative'>
            <h4 className='font-bold text-xl text-white absolute bottom-24 left-8'>Youtube Channels</h4>
            <p className='font-medium text-sm text-white absolute bottom-12 w-[26rem] left-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sed omnis saepe aspernatur fugit adipisci.</p>
            <img src={two} alt="Image" className='w-full max-h-[300px] rounded-lg' />
          </div>
        </div>
      </section>
    </div>
  )
}
