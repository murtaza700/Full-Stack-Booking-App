import React from 'react'

const CategoryComp = ({ name, Icon }) => {
    return (
        <div className='bg-white shadow-Card-Shadow rounded-md flex items-center justify-center gap-2 flex-col w-full p-8 cursor-pointer'>

            <div className='bg-Primary/20 text-Primary rounded-full size-13 flex items-center justify-center'>
                <Icon size={20} />
            </div>

            <span className='text-Text-Primary text-sm'>{name}</span>

        </div>
    )
}

export default CategoryComp