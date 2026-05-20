import React from 'react'
import { Star, ShieldCheck, MapPin, Leaf, Clock, ShieldEllipsis, Share2, Heart } from 'lucide-react'

const ServiceDetailPage = () => {

    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='px-8'>
            <div className='my-5'>
                <img
                    className='w-full md:h-[70vh] object-cover rounded-lg overflow-hidden'
                    src="/cleaning-service.jpg"
                    alt="cleaning service"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-10">
                {/* Right */}
                <div>
                    <h2 className='font-semibold text-[32px] text-Text-Primary mb-1'>Professional Home Deep Cleaning</h2>

                    <div className='flex items-center justify-start flex-wrap gap-3'>
                        <div className='flex items-center justify-start gap-1'>
                            <Star size={20} fill='#EAB308' color='none' />
                            <p className='text-[16px] text-Text-Primary'>4.9 <span className='text-sm text-Text-Secondary'>(120 Reviews)</span></p>
                        </div>

                        <div className='h-1 w-1 bg-Text-Secondary rounded-full' />

                        <div className='flex items-center justify-start gap-1'>
                            <ShieldCheck size={20} color='#3525CD' />
                            <p className='text-[16px] text-[#3525CD]'>Top Rated Provider</p>
                        </div>

                        <div className='h-1 w-1 bg-Text-Secondary rounded-full' />

                        <div className='flex items-center justify-start gap-1'>
                            <MapPin size={20} color='#C5090C' />
                            <p className='text-[16px] text-Text-Primary'>Lahore, Pakistan</p>
                        </div>
                    </div>

                    <div className='w-full h-px rounded-full bg-black/20 my-6' />

                    <h3 className='text-Text-Primary font-semibold text-[24px] mb-2'>About this service</h3>

                    <p className='text-[16px] text-Text-Secondary mb-2'>Transform your home with our signature Deep Cleaning service. Our expert team goes beyond the surface to sanitize, scrub, and polish every corner of your living space. We use eco-friendly, non-toxic products that are safe for your family and pets while delivering hospital-grade cleanliness.</p>
                    <p className='text-[16px] text-Text-Secondary'>Our deep cleaning checklist includes baseboards, interior windows, light fixtures, behind appliances, and detailed bathroom scrubbing. Whether you're preparing for a special event or just need a seasonal refresh, we bring the shine back to your sanctuary.</p>

                    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                        <div className="card flex flex-col gap-3 bg-Primary/5 border border-black/5 rounded-md p-5">

                            <div className="icon text-Primary-Hover">
                                <Leaf />
                            </div>

                            <h3 className='text-Text-Primary text-[18px] font-semibold'>Eco-Friendly</h3>
                            <p className='text-sm text-Text-Secondary'>We only use biodegradable and non-toxic cleaning agents.</p>

                        </div>

                        <div className="card flex flex-col gap-3 bg-Primary/5 border border-black/5 rounded-md p-5">
                            <div className="icon text-Primary">
                                <Clock />
                            </div>
                            <h3 className='text-Text-Primary text-[18px] font-semibold'>Flexible Timing</h3>
                            <p className='text-sm text-Text-Secondary'>Morning, afternoon, or weekend slots available to fit your schedule.</p>
                        </div>

                        <div className="card flex flex-col gap-3 bg-Primary/5 border border-black/5 rounded-md p-5">
                            <div className="icon text-Primary">
                                <ShieldEllipsis />
                            </div>
                            <h3 className='text-Text-Primary text-[18px] font-semibold'>Fully Insured</h3>
                            <p className='text-sm text-Text-Secondary'>Licensed and bonded professionals for your peace of mind.</p>
                        </div>
                    </div>

                    <div className='w-full h-px rounded-full bg-black/20 my-2' />

                    <div>
                        <h3 className='text-[24px] font-semibold text-Text-Primary mt-6 mb-4'>Client Reviews</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8'>

                            <div className='border border-black/10 bg-white rounded-lg p-5'>
                                <div className='flex items-center justify-start gap-3 mb-3'>
                                    <div className='text-Primary bg-Primary/20 size-10 rounded-full flex justify-center items-center text-[16px] font-bold'>SK</div>
                                    <div>
                                        <span className='text-[16px] text-Text-Primary'>Sarah Kendrick</span>
                                        <div className='flex items-center justify-start gap-px'>
                                            <Star size={15} fill='#EAB308' color='none' />
                                            <Star size={15} fill='#EAB308' color='none' />
                                            <Star size={15} fill='#EAB308' color='none' />
                                            <Star size={15} fill='#EAB308' color='none' />
                                            <Star size={15} fill='#EAB308' color='none' />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-Text-Secondary text-sm italic'>"Absolutely incredible job. My kitchen hasn't looked this clean since the day we moved in. The team was punctual and very professional."</p>
                            </div>

                            <div className='border border-black/10 bg-white rounded-lg p-5'>
                                <div className='flex items-center justify-start gap-3 mb-3'>
                                    <div className='text-Primary bg-Primary/20 size-10 rounded-full flex justify-center items-center text-[16px] font-bold'>MJ</div>
                                    <div>
                                        <span className='text-[16px] text-Text-Primary'>Marcus Johnson</span>
                                        <div className='flex items-center justify-start gap-px'>
                                            <Star size={15} fill='#EAB308' color='none' />
                                            <Star size={15} fill='#EAB308' color='none' />
                                            <Star size={15} fill='#EAB308' color='none' />
                                            <Star size={15} fill='#EAB308' color='none' />
                                            <Star size={15} fill='#EAB308' color='none' />
                                        </div>
                                    </div>
                                </div>
                                <p className='text-Text-Secondary text-sm italic'>"Great attention to detail. They even cleaned the tracks of my sliding doors! Highly recommend for a thorough deep clean."</p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Left */}
                <div>
                    <form className='border border-black/20 bg-white shadow-Card-Shadow rounded-lg mb-4 p-6' onSubmit={submit}>
                        <div className='flex items-center justify-between'>
                            <h4 className='font-semibold text-[24px] text-Text-Primary'>$25<span className='text-Text-Secondary text-[16px] font-medium'>/hr</span></h4>

                            <span className='text-[#15803D] bg-[#F0FDF4] text-[12px] font-semibold px-2 py-1.5 rounded-md'>INSTANT BOOK</span>
                        </div>

                        <div className='h-px w-full bg-black/20 mt-2 mb-4' />

                        <div className='flex flex-col gap-1 mb-4'>
                            <label className='text-[16px] text-Text-Primary cursor-pointer' htmlFor="date">Select Date</label>
                            <input className='border border-black/20 rounded-md px-2 py-3 cursor-pointer' type="date" id='date' />
                        </div>

                        <div className='flex flex-col gap-1 mb-4'>
                            <label className='text-[16px] text-Text-Primary cursor-pointer' htmlFor="duration">Duration (Hours)</label>
                            <select className='border border-black/20 rounded-md px-2 py-3 cursor-pointer' name="duration" id="duration">
                                <option className='cursor-pointer' value="4">4 Hours (Recomended)</option>
                                <option className='cursor-pointer' value="3">3 Hours</option>
                                <option className='cursor-pointer' value="2">2 Hours</option>
                                <option className='cursor-pointer' value="1">1 Hours</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-1 mb-4'>
                            <label className='text-[16px] text-Text-Primary cursor-pointer' htmlFor="notes">Notes for Provider</label>
                            <textarea className='border border-black/20 rounded-md px-2 py-3' placeholder='Any special instructions or focus areas?' rows={4} name="notes" id="notes"></textarea>
                        </div>

                        <div className='h-px w-full bg-black/20 mt-6 mb-4' />

                        <div className='flex flex-col gap-2'>

                            <div className='flex items-center justify-between text-sm'>
                                <span className='text-Text-Secondary'>$25 x 4 hours</span>
                                <span className='text-Text-Primary'>$100.00</span>
                            </div>

                            <div className='flex items-center justify-between text-sm'>
                                <span className='text-Text-Secondary'>Service Fee</span>
                                <span className='text-Text-Primary'>$12.50</span>
                            </div>

                            <div className='h-px w-full bg-black/10' />

                            <div className='flex items-center justify-between text-[16px] font-bold'>
                                <span className='text-Text-Primary'>Total</span>
                                <span className='text-Primary'>$112.50</span>
                            </div>

                        </div>

                        <button className='text-white my-3 bg-Primary hover:bg-Primary-Hover transition-all duration-300 rounded-md p-3 w-full cursor-pointer' type='submit'>Confirm and Book</button>

                        <p className='text-Text-Secondary text-[10px] text-center my-1'>You won't be charged yet. Cancellation is free up to 24h before.</p>

                        <div className='h-px w-full bg-black/30 my-3' />

                        <div className='flex items-center justify-center gap-2'>

                            <div className='flex items-center justify-start gap-1 text-Text-Secondary cursor-pointer transition-all duration-300 group'>
                                <Share2 className='group-hover:text-Primary group-hover:fill-Primary transition-all duration-300' size={12} />
                                <span className='text-[12px] font-semibold group-hover:text-Primary'>Share</span>
                            </div>

                            <div className='flex items-center justify-start gap-1 text-Text-Secondary cursor-pointer group'>
                                <Heart size={12} className='group-hover:fill-red-700 group-hover:text-red-700' />
                                <span className='text-[12px] font-semibold group-hover:text-red-700'>Save</span>
                            </div>

                        </div>
                    </form>

                    <div className='border bg-white border-black/20 rounded-lg px-4 py-2.5 flex items-center justify-start gap-4 mb-5 md:mb-0'>

                        <div className='text-Primary bg-Primary/20 size-10 rounded-full flex items-center justify-center'>
                            <ShieldCheck size={23} />
                        </div>

                        <div>
                            <span className='text-[12px] font-bold text-Text-Primary'>ServiceSmart Guarantee</span>
                            <p className='text-[10px] text-Text-Secondary'>Full refund if you're not satisfied with the quality.</p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ServiceDetailPage