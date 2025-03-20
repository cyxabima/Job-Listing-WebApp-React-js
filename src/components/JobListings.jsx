import React from 'react'
import { useEffect, useState } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'
const JobListings = ({ isHome = false }) => {


    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    // this is also correct
    useEffect(() => {
        const apiUrl = isHome ? "http://localhost:3000/jobs?_limit=3" : "http://localhost:3000/jobs"
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error("Error fetching jobs:", error))
            .finally(() => setLoading(false));
    }, []);

    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         try {
    //             const response = await fetch("http://localhost:3000/jobs");
    //             const data = await response.json();
    //             setJobs(data);
    //         } catch (error) {
    //             console.error("Error fetching jobs:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchJobs(); // Calling the function
    // }, []); OR you can use IIFE as well 



    const title = isHome ? "Recent Jobs" : "Browse Jobs"


    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {title}
                </h2>
                {
                    loading ?
                        <Spinner loading={loading} /> :
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs.map((job) => <JobListing key={job.id} job={job} />)}
                        </div>
                }


            </div>

        </section>
    )
}

export default JobListings