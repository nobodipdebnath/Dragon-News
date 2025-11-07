import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftSide from '../components/LeftSide/LeftSide';
import RightSide from '../components/RightSide/RightSide';


const Root = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <section >
                <LatestNews></LatestNews>
            </section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='flex gap-5 my-20'>
                <aside className='w-1/4 rounded-lg'>
                    <LeftSide></LeftSide>
                </aside>
                <section className='main w-2/4'>
                    <Outlet></Outlet>
                </section>
                <aside className='w-1/4'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default Root;