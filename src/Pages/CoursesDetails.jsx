import React from 'react'
import { useParams } from "react-router-dom";

const CoursesDetails = () => {
  const parameter = useParams();

  return (
    <div className="h-screen w-full bg-black text-white  flex justify-center items-center ">
      <h2 className="text-5xl font-extrabold underline">
        {parameter.id} Course Page
      </h2>
    </div>
  )
}

export default CoursesDetails