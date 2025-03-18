import React from 'react'
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import AllJobBtn from '../components/AllJobBtn'

const HomePage = () => {
    return (
        <>

            <Hero />
            <HomeCard />
            <JobListings isHome={true} />
            <AllJobBtn />
        </>
    )
}

export default HomePage