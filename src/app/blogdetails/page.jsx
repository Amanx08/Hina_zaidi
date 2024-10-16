"use client";

import SimpleBanner from '@/component/main-layout/SimpleBanner';
import BlogDetail from '@/component/sections/BlogDetail';
import { URL } from '@/hooks/useslice';
import { useEffect, useState } from 'react';
import Loader from '@/component/main-layout/Loader';
import RecommendedArtical from '@/component/sections/RecArtical';
import { notFound } from 'next/navigation';
const Page = () => {
    const [bannerData, setBannerData] = useState({});
    const [blog, setBlogData] = useState({});
    const [article, setArticleData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dataFound, setDataFound] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${URL}?sheetName=blogdetail`);
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
                setArticleData(data[2]);
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
            <BlogDetail data={blog} />
            <RecommendedArtical data={article} /> {/* Fixed spelling */}
        </main>
    );
};

export default Page;
