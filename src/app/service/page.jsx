"use client"
import SimpleBanner from '@/component/main-layout/SimpleBanner'
import CounterCard from '@/component/molecules/CounterCard'
import Children from '@/component/sections/Children'
import ImageForm from '@/component/sections/ImageForm'
import Price from '@/component/sections/Price'
import Service from '@/component/sections/Service'
import useParseSliceData, { URL } from '@/hooks/useslice'
import React, { useState, useEffect } from 'react'
import Loader from '@/component/main-layout/Loader'
import { notFound } from 'next/navigation'
const page = () => {
    const [bannerData, setBannerData] = useState([]);
    const [serviceData, setServiceData] = useState([]);
    const [children, setChildreData] = useState([]);
    const [workprocess, setWorkProcessData] = useState([]);
    const [price, setPriceData] = useState([]);
    const [cta, setCta] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataFound, setDataFound] = useState(true);
    
    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true); // Set loading to true when starting to fetch
            try {
                const response = await fetch(`${URL}?sheetName=service`);
                
                if (!response.ok) {
                    setDataFound(false);
                    return;
                }
                
                const data = await response.json();
                if (!data || data.length === 0) {
                    setDataFound(false);
                    return;
                }
                
                setBannerData(data[0]);
                setServiceData(data[1]);
                setChildreData(data[2]); // Note: Consider renaming to 'setChildrenData' for clarity
                setWorkProcessData(data[3]);
                setPriceData(data[4]);
                setCta(data[5]);

            } catch (error) {
                console.error('Error fetching API:', error);
                setDataFound(false);
            } finally {
                setLoading(false); // Set loading to false after fetch
            }
        };

        fetchApi();
    }, []);

    if (loading) {
        return <main className="page_content"><Loader /></main>;
    }

    if (!dataFound) {
        return notFound();
    }

    const cardData = JSON.parse(workprocess.card); // Adjusted to use the correct state variable

    return (
        <main clasName="page_content">
            {/* <SimpleBanner title={bannerData.heading} /> */}
            <Service data={serviceData} bg/>
            <Children data={children} />
            <section className="work_process_section section_space_lg">
                <div className="container">
                    <div className="section_heading text-center">
                        <h2 className="section_heading_text">
                            {workprocess.heading}
                        </h2>
                        <p className="section_heading_description mb-0">
                            {workprocess.subheading}
                        </p>
                    </div>
                    <div className="row" >
                        {cardData && cardData.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                                  <CounterCard data={item}/>
                                </div>
                            )
                        })}

                        {/* <CounterCard />
                        <CounterCard /> */}

                    </div>
                </div></section>

            <Price data={price}/>
            <ImageForm data={cta}/>
        </main>

    )
}

export default page