import React, { useState } from 'react'
import { FaMapMarked } from "react-icons/fa"


const JobListing = ({ job }) => {
    const [showFullDesc, setFullDesc] = useState(0);
    let description = job.description

    if (!showFullDesc) {
        description = job.description.slice(0, 40) + "..."
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-1">
                    {description}

                </div>

                <button onClick={() => setFullDesc((prevState) => !prevState)} className='text-indigo-500 mb-5 hover:text-indigo-800'>{showFullDesc ? "less" : "more"}</button>

                <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarked />
                        {job.location}
                    </div>
                    <a
                        href="/{job.id}"
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JobListing