'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type projectName = {
    name: string
}

const ViewProjectDetails: React.FC<projectName> = ({name}) => {
    const router = useRouter()

  return (
        <button className='mt-3 bg-button-color text-white py-3 px-8 rounded-md' onClick={()=> {
                        router.push(`/projects/${name.toLowerCase()}`)
                    }}>View Project Details</button>
  )
}

export default ViewProjectDetails