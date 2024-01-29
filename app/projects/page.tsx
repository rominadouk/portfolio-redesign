
import React from 'react'
import zenImage from '../../public/assets/images/zen-home.png'
import jserviceImage from '../../public/assets/images/j-service.png'
import yanagibaImage from '../../public/assets/images/community-landing.png'
import { StaticImageData } from 'next/image'
import ViewProjectDetails from '../components/ViewProjectDetails'


const Projects = () => {

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
            name: 'SneakPeek',
            description: 'A sneaker viewing gallery.',
            image: jserviceImage

        }, 
        {
            name: 'SpontaneousPacker',
            description: 'A packer helper that provides a three-day forecast and provides packing suggestions based on weather conditions.',
            image: jserviceImage

        }, 
]
  return (
    <div className=''>
        <div className='h-16 bg-nav'></div>
        <h1 className='text-5xl pt-4 mt-10 font-semibold mb-5 mx-5 lg:mx-28 lg:mb-0'>Projects</h1>
    {/* Single Project Container w/ Image Background END*/}
    {projects.map((project) => {
        return (
        <div key={project.name} className=' flex flex-col pt-8 pb-12 relative lg:h-[450px] lg:justify-center'>

            {/* Overlay Div */}
            <div className='absolute inset-0 z-0' style={{ backgroundImage: `url(${project.image.src})`, backgroundSize: 'cover', opacity: 0.1 }}></div>

            <div className='z-10 md:flex md:mx-5 md:h-80 lg:w-1/2 lg:self-center'>
                {/* Project Description */}
                <div className='bg-white border border-stroke drop-shadow-lg p-5 mt-6 w-72 ml-5 z-40 relative rounded-md  md:w-full md:2/3 md:self-center md:mr-[-70px] lg:mr-[-10px] lg:w-3/4 lg:mb-20'>
                    <h2 className='mb-3 text-xl font-semibold md:text-4xl'>{project.name}</h2>
                    <p className='text-sm md:text-lg'>{project.description}</p>
                </div>
                <div className=' flex flex-col mr-5 ml-11 md:w-full md:mt-10 md:mx-0 md:self-center'>
                    {/* Project Image Div */}
                    <div className='h-48 mt-[-35px] rounded-md md:h-56 ' style={{ backgroundImage: `url(${project.image.src})`, backgroundSize: 'cover' }}>
                    </div>
                    <ViewProjectDetails name={project.name} />
                </div>

            </div>

        </div>
        )
    })}
    </div>
  )
}

export default Projects