import React from 'react'
import Link from 'next/link'
import { StaticImageData } from 'next/image'
import  Image  from 'next/image'

type ProjectProps = {
    title: string, 
    summary: string,
    lessonsLearned: string, 
    roles: string[], 
    technologies: string[],
    liveLink: string | null,
    backendLink: string | null,
    frontendLink: string | null,
    desktopView: StaticImageData,
    mobileView: StaticImageData,
    screenshot: StaticImageData,
}

const ReusableProjectPage:React.FC<ProjectProps> = ({title, summary, lessonsLearned, roles, technologies, liveLink, backendLink, frontendLink, desktopView, mobileView, screenshot}) => {
    //three different states, project 1, 2 or 3, when it is clicked from the homescreen it will pass in either 1, 2 or 3 and will increment, this will be a basic sliding page, with fade-in fade-out 
    
  return (
    <div className=' mb-3'>
        <div className='h-16 bg-nav lg:mx-0'> </div>
        <h1 className='mx-5 text-5xl mb-8 mt-10 font-semibold lg:mb-0 lg:mx-28 '>{title}</h1>
        <div className='lg:flex lg:mx-28'>
            
            {/* Overlays */}
            <div className='flex container justify-center'>
                <div id='bottom-layer' className='h-auto w-[90%] mt-10  md:pb-2 ring-1 ring-black self-center rounded-md max-w-lg'>

                <div id='top-layer' className='h-64 flex justify-center lg:h-72 w-full relative  bg-stone-200 left-[-10px] top-[-20px] md:left-[-20px] rounded-md'>
                    <Image src={desktopView} alt='computer-mockup'className='h-full w-auto ' />
                </div>

                {/* Extra Images 1 & 2 */}
                    <div className=' mt-[-6px] px-3 md:px-5 flex justify-center gap-2 '>
                        <div className='bg-stone-200 flex justify-center  h-24 w-1/2 lg:h-36 lg:w-60 rounded-md'>
                            <Image src={mobileView} alt='phone-view-example'className='h-full w-full' />
                        </div>
                        <div className='bg-stone-200 h-24 w-1/2 lg:h-36 lg:w-60 rounded-lg'>
                            <Image src={screenshot} alt='computer-mockup'className='h-full w-full rounded-md' />
                        </div>
                    </div>
                {/* Extra Images 1 & 2 END*/}
                    {/* Buttons Container */}
                    <div className='flex flex-col pb-3 px-3 mt-3 gap-3 md:px-5'>
                        { liveLink ? <Link href={liveLink} target='_blank' className=' text-center px-6 py-2  lg:px-9 lg:py-2 rounded-md text-white bg-button-color'>View live site</Link> : ''}
                        <div className='flex flex-col text-center justify-center gap-3 md:flex-row  md:gap-4'>
                            { frontendLink ?  <Link href={frontendLink} target='_blank' className='ring-2 ring-button-color px-6 py-2 lg:px-9 lg:py-2 rounded-md text-button-color md:w-1/2'>Frontend Code</Link> : ''}
                            { backendLink ?  <Link href={backendLink} target='_blank' className='ring-2  ring-button-color px-6 py-2 lg:px-9 lg:py-2 rounded-md text-button-color md:w-1/2'>Backend Code</Link> : ''}
                            
                            
                        </div>
                    {/* Buttons Container END */}
                    </div>
                </div>
            </div>
            {/* Overlays End */}

            <section className='ml-3 lg:flex lg:flex-col '>
                <h2 className='text-3xl font-semibold mb-2 mt-8'>Summary</h2>
                <p>{summary}</p>
                <h2 className='text-3xl font-semibold mb-2 mt-8'>Lessons Learned</h2>
                <p>{lessonsLearned}</p>
                <div className='lists lg:flex lg:gap-48'>
                    <div id='Roles'>
                        <h2 className='text-3xl font-semibold mb-2 mt-8'>Roles</h2>
                        <ul className='list-disc ml-7'>
                            {roles.map((role) => {
                                return(
                                    <li key={role}>{role}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div id='techonologies'>
                        <h2 className='text-3xl font-semibold mb-2 mt-8'>Technologies</h2>
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
                    {/* <button className='bg-button-color text-white w-40 py-2 rounded self-center'>Project Title</button>
                    <button className='bg-button-color text-white w-40 py-2 rounded self-center'>Project Title</button> */}
                    <Link href='/projects' className='bg-button-color text-white w-40 py-2 text-center rounded self-center'>View All Projects</Link>
                </div>
            </section>
        </div>

    </div>
  )
}

export default ReusableProjectPage