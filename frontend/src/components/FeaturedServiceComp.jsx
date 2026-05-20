import { Star } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'
import { Link, useParams } from 'react-router-dom'

const FeaturedServiceComp = ({ service }) => {
    const { id } = useParams();
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className='relative bg-white shadow-Card-Shadow rounded-md overflow-hidden'>

            <Link to={`/services/${id}`}>
                <img
                    className='w-full h-50 object-cover cursor-pointer hover:scale-105 transition-all duration-300'
                    src={service.image}
                    alt="service"
                />
            </Link>

            <div className="p-5">

                <Link to={`/services/${id}`}>
                    <h3 className='text-[18px] font-semibold text-Text-Primary'>{service.name}</h3>
                </Link>

                <p className='text-[12px] text-Text-Secondary mt-0.5 mb-2'>{service.description}</p>

                <div className='flex items-center justify-between'>
                    <div>
                        <span className='text-sm text-Text-Secondary'>Starting at</span>
                        <h3 className='text-Primary font-semibold text-[20px]'>{service.price}<span className='text-Text-Secondary text-sm'>/hr</span></h3>
                    </div>

                    <button className='cursor-pointer bg-Primary hover:bg-Primary-Hover transition-all duration-200 text-white text-sm font-semibold px-4 py-2 rounded-md'>Book Now</button>

                </div>
            </div>

            <div className="flex justify-center items-center gap-0.5 text-[12px] font-bold text-Text-Primary bg-white/90 rounded-md px-2 py-1 absolute top-2.5 right-2.5">
                <Star
                    size={13}
                    className='text-orange-400 fill-orange-400'
                />
                {service.rating}
            </div>

        </motion.div>
    )
}

export default FeaturedServiceComp