import * as React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// Components:
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import TrendingsPage from './pages/trendings';
import DetailsPage from './pages/details';
import UserProfilePage from './pages/user-profile';

function LandingPage() {
    return (
        <div className='w-screen h-screen flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-xl font-bold text-gray-600'>Welcome dudes !!!</h2>

            <Link to='/login'
                className='flex justify-center items-center rounded-lg bg-gray-600 py-1 px-2 w-[160px] text-white font-bold text-sm active:ring-2 active:ring-gray-400'>
                Login now
            </Link>
        </div>
    );
}


function NotFoundPage() {

    const router = useNavigate();

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold text-gray-500'>404 | page not found</h1>
            <button className='bg-gray-200 text-gray-400 font-bold mt-12 rounded-lg w-[140px] p-2' onClick={() => router('/dashboard')}>Go back</button>
        </div>
    )
}

export default function Navigation() {
    return (

        // Routing wrapper
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/trendings' element={<TrendingsPage />} />
            <Route path='/details/:id' element={<DetailsPage />} />
            <Route path='/profile/:username' element={<UserProfilePage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}