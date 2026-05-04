import React from 'react'
import { MapPin, Search } from 'lucide-react'

const HeroSection = () => {
    return (<div className='flex bg-linear-to-br from-[#FCF8FF] to-[#F0ECF9] items-center justify-between flex-col md:flex-row min-h-screen py-10 md:py-[3%] px-[4%]'>

        <div className='md:w-1/2 w-full'>

            <h1 className='text-3xl md:text-[60px] text-center md:text-left font-semibold leading-[1.1] mb-6'>
                Find the perfect local service for your next project.
            </h1>

            <p className='text-sm text-center md:text-left md:w-full w-[90%] mx-auto text-Text-Secondary mb-7'>
                Trusted professionals at your fingertips. From home repair to wellness, we connect you with the best in your community.
            </p>

            <div className='flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-xl p-3 mb-8 border border-black/5 gap-3 md:gap-0'>

                <div className='flex items-center gap-2 text-Text-Secondary w-full md:w-[40%]'>
                    <Search />
                    <input
                        className='w-full outline-none'
                        type="text"
                        placeholder='What service do you need?'
                    />
                </div>

                <div className='hidden md:block bg-black/20 w-px h-7 mx-3' />

                <div className='flex items-center gap-2 text-Text-Secondary w-full md:w-[40%]'>
                    <MapPin />
                    <input
                        className='w-full outline-none'
                        type="text"
                        placeholder='Your location'
                    />
                </div>

                <button className='bg-Primary text-white rounded-md px-4 py-2 w-full md:w-auto cursor-pointer'>
                    Search
                </button>

            </div>

            <div className='flex flex-col sm:flex-row items-center sm:items-center gap-4'>

                <button className='bg-Primary text-white px-5 py-3 rounded-md w-full sm:w-auto cursor-pointer'>
                    Book a Service
                </button>

                <div className='flex items-center gap-3'>

                    <div className='flex -space-x-3'>
                        <img
                            className='size-10 rounded-full border-2 border-white'
                            src="/user1.jpg"
                            alt=""
                        />
                        <img
                            className='size-10 rounded-full border-2 border-white'
                            src="/user2.jpg"
                            alt=""
                        />
                        <img
                            className='size-10 rounded-full border-2 border-white'
                            src="/user3.jpg"
                            alt=""
                        />
                    </div>

                    <span className='text-sm'>Joined by 10k+ locals</span>

                </div>

            </div>

        </div>

        <div className='flex items-center justify-center w-full md:w-1/2 mt-10 md:mt-0'>
            <div className='rounded-md overflow-hidden shadow-Card-Shadow w-full max-w-md'>
                <img
                    className='w-full h-75 md:h-112.5 object-cover'
                    src="/heroimage.avif"
                    alt="hero"
                />
            </div>
        </div>

    </div>
    )

}

export default HeroSection