import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Components:
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import TrendingsPage from './pages/trendings';

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

export default function Navigation() {
    return (

        // Routing wrapper
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/trendings' element={<TrendingsPage />} />
        </Routes>
    );
}