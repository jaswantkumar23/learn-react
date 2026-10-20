import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {
    const params=useParams()
    
  return (
    <div><h1> {params.id} Course Detail Page</h1></div>
  )
}

export default CoursesDetail