"use client";

import SimpleBanner from '@/component/main-layout/SimpleBanner';
import GalleryGrid from '@/component/sections/GalleryGrid';
import { URL } from '@/hooks/useslice';
import React, { useState, useEffect } from 'react';
import Loader from '@/component/main-layout/Loader';
import { notFound } from 'next/navigation';
const Page = () => {
    const [bannerData, setBannerData] = useState({});
    const [gallery, setGalleryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataFound, setDataFound] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${URL}?sheetName=ourgallery`);
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
                setGalleryData(data[1]);
                
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
        return notFound(); // Ensure notFound() is defined elsewhere
    }

    return (
        <main className="main_content">
            <SimpleBanner title={bannerData.heading} />
            <GalleryGrid data={gallery} />
        </main>
    );
};

export default Page;
