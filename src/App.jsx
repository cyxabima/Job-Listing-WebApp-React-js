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
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobsPage />} />
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