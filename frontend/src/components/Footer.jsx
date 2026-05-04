import React from 'react'
import { Globe, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-BG border-t border-Border flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-2 px-[4%] py-6'>
            <div>
                <Link to={'/'}>
                    <h3 className='text-Text-Primary hover:text-Primary transition-all duration-300 font-bold text-[18px]'>Servixo</h3>
                </Link>

                <p className='text-Text-Secondary font-normal text-[12px]'>© 2026 ServiceSmart Platform. All rights reserved.</p>
            </div>

            <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-3'>
                <span className='text-Text-Secondary hover:text-Primary transition-all duration-300 text-[12px] cursor-pointer'>Terms of Service</span>
                <span className='text-Text-Secondary hover:text-Primary transition-all duration-300 text-[12px] cursor-pointer'>Privacy Policy</span>
                <span className='text-Text-Secondary hover:text-Primary transition-all duration-300 text-[12px] cursor-pointer'>Trust & Safety</span>
                <span className='text-Text-Secondary hover:text-Primary transition-all duration-300 text-[12px] cursor-pointer'>Help Center</span>
                <span className='text-Text-Secondary hover:text-Primary transition-all duration-300 text-[12px] cursor-pointer'>Community Guidelines</span>
            </div>

            <div className='flex md:items-center md:justify-center gap-2 text-Text-Secondary'>
                <Globe
                    size={20}
                    className='hover:text-Primary transition-all duration-300 cursor-pointer'
                />

                <Share2
                    size={20}
                    className='hover:text-Primary transition-all duration-300 cursor-pointer'
                />
            </div>
        </footer>
    )
}

export default Footer