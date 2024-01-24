import React from 'react'
import styles from './ReusableProjectPage.module.css'

type ProjectProps = {
    title: string, 
    summary: string,
    lessonsLearned: string, 
    roles: string[], 
    technologies: string[]
}

const ReusableProjectPage:React.FC<ProjectProps> = ({title, summary, lessonsLearned, roles, technologies}) => {
    //three different states, project 1, 2 or 3, when it is clicked from the homescreen it will pass in either 1, 2 or 3 and will increment, this will be a basic sliding page, with fade-in fade-out 
    
  return (
    <div className=' mb-3 '>
        <div className='h-16 bg-nav lg:mx-0'> </div>
        <h1 className='mx-5 text-3xl mt-4 font-semibold mb-5 lg:mx-28 '>{title}</h1>
        <div className=' mx-5 lg:flex lg:mx-28'>
            {/* Overlays */}
            <div className='overlays container'>
                <div id={styles.topOverlay}>
                </div>
                <div id={styles.bottomLayer} className='lg:flex lg:flex-col gap-1 px-5 lg:ring-1 ring-black'>
                    <div className='lg:mt-[293px] lg:flex lg:gap-2 lg:max-w-md'>
                        <div className='bg-black lg:h-36 lg:w-60 lg:rounded-lg'></div>
                        <div className='bg-black lg:h-36 lg:w-60 lg:rounded-lg'></div>
                    </div>
                    <div className='flex flex-col lg:mt-6'>
                        <button className=' lg:px-9 lg:py-2 lg:rounded-sm text-white bg-button-color'>View live site</button>
                        <div className='flex justify-between lg:gap-4 mt-3'>
                            <button className='ring-2 lg:px-9 lg:py-2 lg:rounded-sm text-button-color lg:w-1/2'>Front end</button>
                            <button className='ring-2  lg:px-9 lg:py-2 lg:rounded-sm text-button-color lg:w-1/2'>Backend</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* Overlays End */}
            <section className='ml-3 lg:flex lg:flex-col '>
                <h2 className='text-2xl font-semibold mb-2 mt-8'>Summary</h2>
                <p>{summary}</p>
                <h2 className='text-2xl font-semibold mb-2 mt-8'>Lessons Learned</h2>
                <p>{lessonsLearned}</p>
                <div className='lists lg:flex lg:gap-48'>
                    <div id='Roles'>
                        <h2 className='text-2xl font-semibold mb-2 mt-8'>Roles</h2>
                        <ul className='list-disc ml-7'>
                            {roles.map((role) => {
                                return(
                                    <li key={role}>{role}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div id='techonologies'>
                        <h2 className='text-2xl font-semibold mb-2 mt-8'>Technologies</h2>
                        <ul className='list-disc ml-7'>
                        {technologies.map((technology) => {
                                return (
                                    <li key={technology}>{technology}</li>
                                )
                            })}
                        </ul>
                    </div>

                </div>

                <div className='buttonsContainer flex flex-col gap-2 mt-3 lg:flex-row lg:self-center lg:gap-5 lg:mt-16'>
                    <button className='bg-button-color text-white w-40 py-2 rounded self-center'>Project Title</button>
                    <button className='bg-button-color text-white w-40 py-2 rounded self-center'>Project Title</button>
                </div>
            </section>
        </div>

    </div>
  )
}

export default ReusableProjectPage