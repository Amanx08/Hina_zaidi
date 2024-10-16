"use client";

import Loader from '@/component/main-layout/Loader';
import SimpleBanner from '@/component/main-layout/SimpleBanner';
import BlogLayout from '@/component/sections/BlogLayout';
import { URL } from '@/hooks/useslice';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

const Page = () => {
    const [bannerData, setBannerData] = useState({});
    const [blog, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataFound, setDataFound] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${URL}?sheetName=blog`);
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
                setBlogData(data[1]);
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
        <main className="page_content">
            <SimpleBanner title={bannerData.heading} />
            <BlogLayout data={blog} variant /> {/* Ensure `variant` is defined or passed correctly */}
        </main>
    );
};

export default Page;
