import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

const Portfolio = () => {
    useEffect(() => {
        new Swiper('.mySwiper', {
            slidesPerView: 2,
            centeredSlides: true,
            loop: true,
            spaceBetween: 30,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }, []);

    return (
        <section className="py-12 relative">
            <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
                <div className="flex items-center justify-between flex-col sm:flex-row gap-y-4 mb-5">
                    <h2 className="font-manrope font-bold text-4xl text-gray-900">Creative Expressions</h2>
                    <div className="flex justify-center items-center gap-6">
                        <button className="swiper-button-prev rounded-full w-9 h-9 flex items-center justify-center p-2.5 bg-indigo-200 group transition-all duration-300 hover:bg-indigo-600">
                            <svg className="stroke-indigo-700 transition-all duration-300 group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.38449 15.1023L3.33337 10.0512M3.33337 10.0512L8.38449 5.00006M3.33337 10.0512H18.3333" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="swiper-button-next rounded-full w-9 h-9 flex items-center justify-center p-2.5 bg-indigo-200 group transition-all duration-300 hover:bg-indigo-600">
                            <svg className="stroke-indigo-700 transition-all duration-300 group-hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M11.6155 5.00006L16.6667 10.0512M16.6667 10.0512L11.6155 15.1023M16.6667 10.0512L1.66675 10.0512" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <p className="font-normal text-base text-gray-500 max-w-4xl max-sm:text-center">
                    Nisl molestie facilisis pellentesque diam nulla nam vitae sapien. Ac cras aenean auctor molestie aliquet. Cras non bibendum ultricies metus orci proin blandit a quis.
                </p>
            </div>
            <div className="swiper mySwiper mb-10 py-10">
                <div className="swiper-wrapper">
                    {[
                        'https://pagedone.io/asset/uploads/1707712046.png',
                        'https://pagedone.io/asset/uploads/1707712065.png',
                        'https://pagedone.io/asset/uploads/1707712095.png',
                        'https://pagedone.io/asset/uploads/1707712046.png',
                        'https://pagedone.io/asset/uploads/1707712065.png',
                        'https://pagedone.io/asset/uploads/1707712095.png',
                    ].map((src, index) => (
                        <div className="swiper-slide relative group" key={index}>
                            <div className="w-full h-full max-h-[456px] relative">
                                <img src={src} alt="" className="w-full h-full object-cover mx-auto" />
                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black bg-opacity-50 w-4/5 h-4/5 flex items-center justify-center">
                                        <div className="flex space-x-4">
                                            <button className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                                                {/* Icon 1 */}
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </button>
                                            <button className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                                                {/* Icon 2 */}
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="flex items-center justify-center py-3.5 px-7 rounded-full font-semibold text-base text-white bg-indigo-600 shadow-sm shadow-transparent transition-all duration-300 hover:shadow-indigo-200 hover:bg-indigo-700 w-max mx-auto">
                View More
            </button>
        </section>
    );
};

export default Portfolio;
