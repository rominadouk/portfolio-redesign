
'use client'
import React from 'react'
import zenImage from '../../public/assets/images/zen-home.png'
import jserviceImage from '../../public/assets/images/j-service.png'
import yanagibaImage from '../../public/assets/images/community-landing.png'
import { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'


const Projects = () => {
    const router = useRouter();

    // Add all projects to showcase here. 1 or 2 sentences description max. With Cover Image.

        type Project = {
            name:string,
            description: string,
            image: StaticImageData
        }
    const projects: Project[] = [
        {
            name: 'Zen',
            description: 'A mental health application',
            image: zenImage
        },
        {
            name: 'Yanagiba',
            description: 'A single page, restaurant webapp.',
            image: yanagibaImage
        }, 
        {
            name: 'jservice',
            description: 'A mimic of the hit game-show Jeopardy, using the jservice api.',
            image: jserviceImage

        }, 
        // {
        //     name: 'gameflix',
        //     description: 'A game viewing application designed by a junior ux/ui designer',
        //     image: ''
        // },
        // {
        //     name: 'weekend packer',
        //     description: 'a weather packer that displays the weather for the next few days to help for a last minute trip',
        //     image: ''
        // }
]
  return (
    <div className='pt-20'>
        <h1 className='text-3xl font-semibold mb-5 mx-5'>Projects</h1>
{/* 
        <div className='bg-gray-200 flex flex-col pt-8 pb-12'>
                <div className='bg-white p-5 mt-6 w-72 ml-5  relative'>
                    <h2 className='mb-3 text-xl font-semibold'>Project One</h2>
                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque commodi tenetur sed odit expedita illum.</p>
                </div>
                <div className='border-black h-48 mr-5 ml-11 mt-[-35px]'>
                </div>
            <button className='mt-3 bg-button-color text-white py-3  rounded-md mr-5 ml-11'>View Project</button>
        </div> */}
    {/* Single Project Container w/ Image Background END*/}
    {projects.map((project) => {
        return (
        <div key={project.name} className=' flex flex-col pt-8 pb-12 relative'>
                    {/* Overlay Div */}
        <div className='absolute inset-0 z-0' style={{ backgroundImage: `url(${project.image.src})`, backgroundSize: 'cover', opacity: 0.12 }}></div>
            <div className='bg-white p-5 mt-6 w-72 ml-5  z-20 '>
                <h2 className='mb-3 text-xl font-semibold'>{project.name}</h2>
                <p className='text-sm'>{project.description}</p>
            </div>
            {/* Project Image Div */}
            <div className='border-black h-48 mr-5 ml-11 mt-[-35px] z-10' style={{ backgroundImage: `url(${project.image.src})`, backgroundSize: 'cover' }}>
            </div>
            <button className='mt-3 bg-button-color text-white py-3  rounded-md mr-5 ml-11 z-10 ' onClick={()=> {
                router.push(`/projects/${project.name.toLowerCase()}`)
            }}>View Project Details</button>
        </div>

            
        )
    })}


    </div>
  )
}

export default Projects