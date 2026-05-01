import { Briefcase, BrushCleaning, Cpu, Flower, MoveRight, PawPrint } from 'lucide-react'
import React from 'react'
import CategoryComp from './CategoryComp'

const ExploreCategories = () => {
    const categories = [
        { name: 'Home Repair', Icon: Briefcase },
        { name: 'Cleaning', Icon: BrushCleaning },
        { name: 'Tech Support', Icon: Cpu },
        { name: 'Pet Care', Icon: PawPrint },
        { name: 'Wellness', Icon: Flower },
    ]
    return (
        <div className='px-[4%] py-12'>
            <div className='flex items-center justify-between mb-10'>
                <div className='flex flex-col items-start justify-start gap-[2px]'>
                    <h3 className='text-Text-Primary text-sm font-semibold'>Explore Categories</h3>
                    <span className='text-Text-Secondary text-sm'>Find exactly what you're looking for</span>
                </div>

                <span className='text-Primary text-sm cursor-pointer flex items-center justify-center gap-2'>View all categories
                    <MoveRight size={20} />
                </span>

            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {
                    categories.map((cat, index) => (
                        <CategoryComp name={cat.name} Icon={cat.Icon} key={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default ExploreCategories