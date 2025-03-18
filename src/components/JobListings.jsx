import React from 'react'
import JobListing from './JobListing'
import jobs from '../../public/jobs'

const JobListings = ({ isHome = false }) => {
    const jobsList = isHome ? jobs.slice(0, 3) : jobs
    const title = isHome ? "Recent Jobs" : "Browse Jobs"
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Job Listing 1 --> */}
                    {jobsList.map((job) => <JobListing key={job.id} job={job} />)}

                </div>
            </div>

        </section>
    )
}

export default JobListings