"use client";

import SimpleBanner from '@/component/main-layout/SimpleBanner';
import TeamCard from '@/component/molecules/TeamCard';
import React, { useState, useEffect } from 'react';
import useParseSliceData, { URL } from '@/hooks/useslice';
import Loader from '@/component/main-layout/Loader';
import { notFound } from 'next/navigation';
const Page = () => {
    const [bannerData, setBannerData] = useState({});
    const [team, setTeamData] = useState({});
    const [loading, setLoading] = useState(true);
    const [dataFound, setDataFound] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${URL}?sheetName=ourteam`);
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
                setTeamData(data[1]);

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

    const cardData = JSON.parse(team.card || "[]");

    return (
        <main className="main_content">
            <SimpleBanner title={bannerData.heading} />
            <section className="team_section section_space_lg">
                <div className="container">
                    <div className="row justify-content-lg-between align-items-lg-end">
                        <div className="col-lg-5">
                            <div className="section_heading mb-lg-4 mb-2">
                                <h2 className="section_heading_text">{team.heading}</h2>
                                <p className="section_heading_description mb-0 ">
                                    {team.subheading}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="team_funfact unordered_list justify-content-lg-end text-center mb-lg-2 mb-3">
                                <li>
                                    <div className="counter_item">
                                        <div className="counter_value">
                                            <span className="odometer" data-count={12}>0</span>
                                            <span>+</span>
                                        </div>
                                        <h3 className="counter_title mb-0">Qualified Specialists</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter_item">
                                        <div className="counter_value">
                                            <span className="odometer" data-count={99}>0</span>
                                            <span>%</span>
                                        </div>
                                        <h3 className="counter_title mb-0">Effectiveness of Therapy</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        {cardData.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                <TeamCard data={item} index={index}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
