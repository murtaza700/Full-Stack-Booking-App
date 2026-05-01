import React from 'react'
import HeroSection from '../components/HeroSection'
import ExploreCategories from '../components/ExploreCategories'
import FeaturedServices from '../components/FeaturedServices'
import Customers from '../components/Customers'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <ExploreCategories />
            <FeaturedServices />
            <Customers />
        </>
    )
}

export default HomePage