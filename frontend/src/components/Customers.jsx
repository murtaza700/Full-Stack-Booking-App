import React, { useRef } from 'react'
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CustomerReviewsComp from './CustomerReviewsComp'
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Customers = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const customers = [
        {
            name: 'Sarah Jenkins',
            image: '/user1.jpg',
            review: 'Found an amazing plumber within minutes. The booking process was seamless and the service was top-notch!',
            stars: 5,
            workAs: 'Homeowner in Austin'
        },
        {
            name: 'Michael Chen',
            image: '/user2.jpg',
            review: 'ServiceSmart has changed how I manage my rental properties. Reliability and quality are always guaranteed.',
            stars: 5,
            workAs: 'Property Manager'
        },
        {
            name: 'Elena Rodriguez',
            image: '/user3.jpg',
            review: 'The tech support specialist was incredibly patient and solved my network issues in under an hour. Highly recommend!',
            stars: 5,
            workAs: 'Remote Worker'
        },
        {
            name: 'Sarah Jenkins',
            image: '/user1.jpg',
            review: 'Found an amazing plumber within minutes. The booking process was seamless and the service was top-notch!',
            stars: 5,
            workAs: 'Homeowner in Austin'
        },
        {
            name: 'Michael Chen',
            image: '/user2.jpg',
            review: 'ServiceSmart has changed how I manage my rental properties. Reliability and quality are always guaranteed.',
            stars: 5,
            workAs: 'Property Manager'
        },
        {
            name: 'Elena Rodriguez',
            image: '/user3.jpg',
            review: 'The tech support specialist was incredibly patient and solved my network issues in under an hour. Highly recommend!',
            stars: 5,
            workAs: 'Remote Worker'
        }
    ]

    return (
        <div className='flex flex-col items-center justify-center gap-10 px-[4%] py-12'>
            <div className='text-center mb-8'>
                <h3 className='text-sm text-Text-Primary font-semibold'>
                    What our customers say
                </h3>
                <span className='text-Text-Secondary text-sm'>
                    Join thousands of satisfied neighbors
                </span>
            </div>

            <div className="w-full relative">

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    ref={prevRef}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                >
                    <ArrowLeft size={20} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    ref={nextRef}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                >
                    <ArrowRight size={20} />
                </motion.button>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    speed={500}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    // pagination={{ clickable: true }}
                    navigation={true}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {customers.map((review) => (
                        <SwiperSlide key={review.index}>
                            <CustomerReviewsComp review={review} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Customers