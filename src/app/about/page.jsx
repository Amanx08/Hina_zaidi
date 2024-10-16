"use client";

import Loader from '@/component/main-layout/Loader';
import SimpleBanner from '@/component/main-layout/SimpleBanner';
import Counter from '@/component/molecules/Counter';
import About from '@/component/sections/About';
import Certificate from '@/component/sections/Certificate';
import Consultation from '@/component/sections/Consultation';
import CtaSection from '@/component/sections/CtaSection';
import PhotoShop from '@/component/sections/PhotoShop';
import Service from '@/component/sections/Service';
import WorkProcess from '@/component/sections/WorkProcess';
import { URL } from '@/hooks/useslice';
import { notFound } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Page = () => {
    const [bannerData, setBannerData] = useState({});
    const [aboutData, setAboutData] = useState({});
    const [serviceData, setServiceData] = useState({});
    const [counter, setCounterData] = useState({});
    const [certificat, setCertificatData] = useState({});
    const [workprocess, setWorkProcessData] = useState({});
    const [photoshop, setPhotoshop] = useState({});
    const [contact, setContactData] = useState({});

    const [loading, setLoading] = useState(true);
    const [dataFound, setDataFound] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${URL}?sheetName=about`);
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
                setAboutData(data[1]);
                setCounterData(data[2]);
                setCertificatData(data[3]);
                setWorkProcessData(data[4]);
                setServiceData(data[5]);
                setPhotoshop(data[6]);
                setContactData(data[7]);

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
        return notFound(); // Ensure notFound() is defined elsewhere in your code
    }

    return (
        <main className="page_content">
            {/* <SimpleBanner title={bannerData.heading} /> */}
            <About data={aboutData} />
            <Counter data={counter} />
            <Certificate data={certificat} />
            <WorkProcess data={workprocess} />
            <Service data={serviceData} />
            <PhotoShop data={photoshop} />
            <Consultation data={contact} />
        </main>
    );
};

export default Page;
