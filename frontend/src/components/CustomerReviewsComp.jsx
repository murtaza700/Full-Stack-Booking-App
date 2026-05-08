import { Star } from 'lucide-react'
import React from 'react'

const CustomerReviewsComp = ({ review }) => {
    return (
        <div className='bg-white shadow-Card-Shadow rounded-md w-full py-8 px-10'>

            <div className='flex items-center justify-center flex-col'>

                <img
                    className='size-20 object-cover rounded-full border-2 border-Primary/20 mb-3'
                    src={review.image}
                    alt="user image"
                />

                <div className='flex items-center justify-center mb-5'>
                    {[...Array(review.stars)].map((_, index) => (
                        <Star className='fill-orange-400 text-orange-400' key={index} size={13} />
                    ))}
                </div>

            </div>

            <p className='text-center text-[16px] text-Text-Secondary italic mb-10'>"{review.review}"</p>

            <div className='flex items-center justify-center flex-col'>
                <h3 className='text-Text-Primary text-[16px] font-semibold'>{review.name}</h3>
                <span className='text-sm text-Text-Secondary'>{review.workAs}</span>
            </div>

        </div>
    )
}

export default CustomerReviewsComp