import React from 'react'

const Loading = ({ className }) => {
    return (
        <div className={`${className} border-t-transparent animate-spin rounded-full`}></div>
    )
}

export default Loading