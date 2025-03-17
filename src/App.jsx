import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import JobListings from './components/JobListings'
import AllJobBtn from './components/AllJobBtn'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCard />
      <JobListings />
      <AllJobBtn />
    </>
  )
}

export default App