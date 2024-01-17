import React from 'react'
import styles from './page.module.css'

const Projects = () => {
    //three different states, project 1, 2 or 3, when it is clicked from the homescreen it will pass in either 1, 2 or 3 and will increment, this will be a basic sliding page, with fade-in fade-out 
  return (
    <div className='mx-5 pt-20 mb-3'>
        <h1 className='text-3xl font-semibold mb-5'>Project Title</h1>

        <div id={styles.topOverlay}>
        </div>
        <div id={styles.bottomLayer}>
        </div>
        <section className='ml-3'>
            <h2 className='text-2xl font-semibold mb-2 mt-8'>Summary</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores beatae perspiciatis quos perferendis? Inventore voluptate illum quis ullam ad? Dolor sequi ut sapiente nemo nesciunt quis similique ipsum eos?</p>
            <h2 className='text-2xl font-semibold mb-2 mt-8'>Lessons Learned</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis asperiores beatae perspiciatis quos perferendis? Inventore voluptate illum quis ullam ad? </p>
            <h2 className='text-2xl font-semibold mb-2 mt-8'>Roles</h2>
            <ul className='list-disc ml-7'>
                <li>Lead Programmer</li>
                <li>Lead Designer</li>
                <li>QA Tester</li>
            </ul>
            <h2 className='text-2xl font-semibold mb-2 mt-8'>Technologies</h2>
            <ul className='list-disc ml-7'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            <div className='flex flex-col gap-2 mt-3'>
                <button className='bg-stone-400 text-white w-40 py-2 rounded self-center'>Project Title</button>
                <button className='bg-stone-400 text-white w-40 py-2 rounded self-center'>Project Title</button>
            </div>

        </section>

    </div>
  )
}

export default Projects