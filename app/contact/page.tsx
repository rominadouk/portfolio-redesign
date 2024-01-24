'use client'
import React from 'react' 
import styles from './page.module.css'
import Image from 'next/image'
import traitOne from '../../public/assets/images/problem-solver.png'
import traitTwo from '../../public/assets/images/lifelong-learner.png'
import traitThree from '../../public/assets/images/dog-mom.png'
import linkedinIcon from '../../public/assets/icons/linkedin-icon.svg'
import githubIcon from '../../public/assets/icons/github-icon.svg'


const Contact = () => {
  return (
    <div className='pt-20 flex flex-col'>
        <h1 className='text-3xl font-semibold mb-5 mx-5 lg:mx-20 lg:ml-28'>Contact</h1>
        <div className='lg:flex'>
          {/* contact form container */}
          <div id='contact-form-container'className='md:mx-32 lg:mx-0 lg:ml-28 lg:w-1/3 lg:mt-7'>
            <h2 className='mx-5 text-2xl font-semibold'>Let's talk</h2>
            <p className='mx-5 mt-2 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem rerum sapiente rem soluta temporibus, reiciendis eveniet laborum similique ab! Recusandae obcaecati similique blanditiis cupiditate, incidunt id! Ut, dolore magni?</p>
                <form className='flex flex-col mx-5 py-10 gap-7'>
                {/* Name Input */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='name'>Name</label>
                  <input id='name' type='text' className='border h-8 ring-2 ring-emerald-600 bg-emerald-100 rounded-sm' />
                </div>
                {/* Email Input */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='email'>Email</label>
                  <input id='email' type='email' className='border h-8 ring-2 ring-emerald-600 bg-emerald-100 rounded-sm'/>
                </div>
                {/* Message Input */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='message'>Message</label>
                  <textarea id='message' className='border h-28 ring-2 ring-emerald-600 bg-emerald-100 rounded-sm'/>
                </div>
                {/* Submit Button */}
                <input type='submit' className=' self-center py-2 px-10 bg-button-color text-white rounded-md' />
            </form>
          </div>
          {/* contact form container END*/}
          {/* Experience + Trait Card */}
          <div className='px-5 flex flex-col'>
                  {/* Three Trait Cards */}
                  <div className='flex flex-col items-center gap-3 relative top-6 md:flex-row md:self-center '>
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
                  <div id={styles.biographySection} className='bg-sage-green px-5 py-10 lg:max-w-4xl'>
                      <h2 className='text-xl font-semibold mb-3'>Biography</h2>
                      <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates enim consectetur impedit laborum ex temporibus, molestias mollitia omnis explicabo! Deleniti eos minima eveniet aperiam, animi facilis nesciunt fuga corrupti doloremque?</p>
                  {/* Experience and Skills Container */}
                      <div className='lg:pr-80 mt-3'>
                              <h2 className='text-xl font-semibold mb-2 '>Experience</h2>
                              <ul className='list-disc ml-7 text-sm'>
                                  <li>Software Developer Intern, Welspot</li>
                                  <li>Graduate, General Assembly Software Engineering Immersive</li>
                              </ul>

                          <div>
                              <h2 className='text-xl font-semibold mb-2 mt-8'>Skills</h2>
                              <ul className='list-disc ml-7 text-sm'>
                                  <li>HTML</li>
                                  <li>CSS</li>
                                  <li>JavaScript</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <button className='mt-[-20px] bg-button-color text-white py-3 px-8 rounded-md mr-5 ml-11 z-10  self-center'>Download Resume (PDF)</button>
                  {/* Vertical Line */}
                  <div className='h-10 border-2 w-1 my-5 self-center'></div>
                  <div className='icons flex self-center gap-5 pb-8'>
                    <Image src={linkedinIcon} alt='linkedin-logo' className='w-7 h-8 lg:w-10 lg:h-11'/>
                    <Image src={githubIcon} alt='github-logo' className='w-7 h-8 lg:w-10 lg:h-11'/>
                  </div>
          </div>
          {/* Experience + Trait Card END */}
        </div>
        

    </div>
  )
}

export default Contact