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
    <div className='mx-5 pt-20 mb-3'>
        <h1 className='text-3xl font-semibold mb-5'>{title}</h1>

        <div id={styles.topOverlay}>
        </div>
        <div id={styles.bottomLayer}>
        </div>
        <section className='ml-3'>
            <h2 className='text-2xl font-semibold mb-2 mt-8'>Summary</h2>
            <p>{summary}</p>
            <h2 className='text-2xl font-semibold mb-2 mt-8'>Lessons Learned</h2>
            <p>{lessonsLearned}</p>
            <h2 className='text-2xl font-semibold mb-2 mt-8'>Roles</h2>
            <ul className='list-disc ml-7'>
                {roles.map((role) => {
                    return(
                        <li>{role}</li>
                    )
                })}
            </ul>
            <h2 className='text-2xl font-semibold mb-2 mt-8'>Technologies</h2>
            <ul className='list-disc ml-7'>
            {technologies.map((role) => {
                    return(
                        <li key={role}>{role}</li>
                    )
                })}
            </ul>
            <div className='flex flex-col gap-2 mt-3'>
                <button className='bg-button-color text-white w-40 py-2 rounded self-center'>Project Title</button>
                <button className='bg-button-color text-white w-40 py-2 rounded self-center'>Project Title</button>
            </div>

        </section>

    </div>
  )
}

export default ReusableProjectPage