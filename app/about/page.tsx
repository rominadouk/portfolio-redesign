import React from 'react' 
import styles from './page.module.css'
import Image from 'next/image'
import traitOne from '../../public/assets/images/problem-solver.png'
import traitTwo from '../../public/assets/images/lifelong-learner.png'
import traitThree from '../../public/assets/images/dog-mom.png'

const about = () => {
  return (
    <div className='pt-20 mx-5'>
        <h1 className='text-3xl font-semibold mb-5'>About</h1>
        <div id={styles.biographySection} className='bg-sage-green px-5 pt-5'>
            <h2 className='text-xl font-semibold mb-3'>Biography</h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim consectetur impedit laborum ex temporibus, molestias mollitia omnis explicabo! Deleniti eos minima eveniet aperiam, animi facilis nesciunt fuga corrupti doloremque?</p>
            {/* Three Trait Cards */}
            <div className='flex flex-col items-center gap-3 relative top-6'>
                <div className={styles.traitCard}>
                    <div className=' flex flex-col h-32 w-20 text-center gap-2 self-center'>
                        <Image src={traitOne} alt='lightbulb-icon' />
                        <p className='text-sm'>Problem Solver</p>
                    </div>
                </div>
                <div className={styles.traitCard}>
                    <div className=' flex flex-col h-32 w-20 justify-center text-center gap-2 self-center'>
                            <Image src={traitTwo} alt='lightbulb-icon' />
                            <p className='text-sm'> Dedicated Learner</p>
                    </div>
                </div>
                <div className={styles.traitCard}>
                <div className=' flex flex-col h-32 w-20 justify-center text-center gap-2 self-center'>
                        <Image src={traitThree} alt='lightbulb-icon' />
                        <p className='text-sm'>Dog Mom</p>
                    </div>
                </div>
            </div>
            {/* Trait Cards End */}

        </div>

        <h2 className='text-xl font-semibold mb-2 mt-12'>Experience</h2>
            <ul className='list-disc ml-7 text-sm'>
                <li>Software Developer Intern, Welspot</li>
                <li>Graduate, General Assembly Software Engineering Immersive</li>
                <li>QA Tester</li>
            </ul>
        <h2 className='text-xl font-semibold mb-2 mt-8'>Skills</h2>
        <ul className='list-disc ml-7 text-sm'>
            <li>Lead Programmer</li>
            <li>Lead Designer</li>
            <li>QA Tester</li>
        </ul>
    
    </div>
  )
}

export default about