import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import React from 'react'
import HomePage from "./pages/HomePage"
import MainLayout from "./layout/MainLayout"
import JobsPage from "./pages/JobsPage"
import JobPage, { jobLoader } from "./pages/JobPage"
import NotFoundPage from "./pages/NotFoundPage"
import AddJobPage from "./pages/AddJobPage"
import EditJobPage from "./pages/EditJobPage"

const addJob = async (newJob) => {
  const res = await fetch("http://localhost:3000/jobs", {
    method: 'Post',
    headers: {
      'ContentType': 'application/json',
    }, body: JSON.stringify(newJob)
  });
  return
}

const deleteJob = async (id) => {
  const res = await fetch(`http://localhost:3000/jobs/${id}`, {
    method: 'DELETE'
  });
  return
}

const editJob = async (job) => {
  const res = await fetch(`http://localhost:3000/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'ContentType': 'application/json',
    }, body: JSON.stringify(job)
  });
  return
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="/edit-job/:id" element={<EditJobPage editJobSubmit={editJob} />} loader={jobLoader} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App