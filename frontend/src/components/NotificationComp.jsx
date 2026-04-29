import { Bell } from 'lucide-react'
import React from 'react'

const NotificationComp = () => {
    return (
        <div className='relative cursor-pointer'>
            <Bell />
            <span className='absolute -right-[2px] -top-[5px] bg-red-700 text-white rounded-full text-[10px] size-3.5 flex items-center justify-center'>2</span>
        </div>
    )
}

export default NotificationComp