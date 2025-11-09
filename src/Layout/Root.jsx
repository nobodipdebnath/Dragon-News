import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftSide from '../components/LeftSide/LeftSide';
import RightSide from '../components/RightSide/RightSide';
import Loading from '../components/Loading/Loading';


const Root = () => {
    const {state} = useNavigate();
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
                <aside className='w-1/4 rounded-lg sticky top-2 h-fit'>
                    <LeftSide></LeftSide>
                </aside>
                <section className='main w-2/4'>
                    {state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className='w-1/4 sticky top-2 h-fit'>
                    <RightSide></RightSide>
                </aside>
            </main>
        </div>
    );
};

export default Root;