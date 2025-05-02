import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftSide from '../components/Home/LeftSide';
import RightSide from '../components/Home/RightSide';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header/>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews/>
                </section>
                
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar/>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftSide/>
                </aside>
                <section className="main col-span-6">
                    <Outlet />
                </section>
                <aside className='col-span-3'>
                    <RightSide/>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;