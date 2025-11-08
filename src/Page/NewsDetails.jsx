import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightSide from '../components/RightSide/RightSide';
import NewsDetailsCard from '../components/NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(() =>{
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails);
    }, [data, id])

    // console.log(data, id, news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='container mx-auto grid grid-cols-12 gap-6 py-5'>
                <section className='col-span-9'>
                    <h2 className='text-xl font-bold text-primary mb-5'>News Details</h2>
                    <div>
                        <NewsDetailsCard news={news}></NewsDetailsCard>
                    </div>
                </section>
                <section className='col-span-3'>
                    <RightSide></RightSide>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;