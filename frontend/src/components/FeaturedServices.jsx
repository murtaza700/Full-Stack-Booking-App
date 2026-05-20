import React from 'react'
import FeaturedServiceComp from './FeaturedServiceComp'

const FeaturedServices = () => {

    const featuredServices = [
        {
            id: '1',
            name: 'Premium Deep Cleaning',
            description: 'by Sparkle Homes Inc.',
            price: '$85',
            image: '/cleaning-service.jpg',
            rating: '4.9'
        },
        {
            id: '2',
            name: 'Electrical Diagnostics',
            description: 'by VoltSafe Pros',
            price: '$120',
            image: '/electric-service.jpg',
            rating: '4.8'
        },
        {
            id: '3',
            name: 'VIP Pet Sitting & Walking',
            description: 'by Paws & Play',
            price: '$45',
            image: '/pet-service.jpg',
            rating: '5.0'
        },
        {
            id: '4',
            name: 'Home Wellness Massage',
            description: 'by Tranquil Path',
            price: '$110',
            image: '/massage-service.jpg',
            rating: '4.7'
        }
    ]

    return (
        <div className='bg-[#F5F2FF] px-[4%] py-12'>
            <div className='flex items-start justify-start gap-0.5 flex-col mb-10'>
                <h3 className='text-Text-Primary text-sm font-semibold'>Featured Services</h3>
                <p className='text-sm text-Text-Secondary'>Hand-picked professionals with exceptional ratings</p>
            </div>

            <div className="grid grid-cols-1 med:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    featuredServices.map((service) => (
                        <FeaturedServiceComp key={service.id} service={service} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedServices