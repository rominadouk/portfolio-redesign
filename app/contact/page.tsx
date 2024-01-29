'use client'
import React from 'react' 
import styles from './page.module.css'
import Image from 'next/image'
import traitOne from '../../public/assets/images/problem-solver.png'
import traitTwo from '../../public/assets/images/lifelong-learner.png'
import traitThree from '../../public/assets/images/dog-mom.png'
import { useState } from 'react'



const Contact = () => {
  const [clientName, setClientName] = useState('');
  const [postFormDataSuccess, setPostFormDataSuccess] = useState<boolean |null>(null);



  
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    //get name from formData
    const name = formData.get('name') as string
        setClientName(name)

    const response = await fetch('https://formspree.io/f/myyrkpde', {
      method:'POST',
      body: formData,
      headers : {
        'Accept' : 'application/json'
      }
    })
    if(response.ok) {
      setPostFormDataSuccess(true)
      console.log('Your message was receieved.')
    } else {
      setPostFormDataSuccess(false)
      console.log('There was an error submitting your request.')
    }
  };


  return (
    <div className=' flex flex-col '>
       <div className='h-16 bg-nav'></div>
        <h1 className='text-5xl pt-4 mt-10 font-semibold mb-5 mx-5 lg:mx-20 lg:ml-28 '>Contact</h1>
        <div className='flex flex-col lg:flex-row lg:gap-7'>
          {/* contact form container */}
          <div id='contact-form-container'className=' self-center max-w-md md:max-w-lg lg:ml-28 lg:mx-0 lg:w-[27%] lg:mt-7 lg:min-w-[25%]'>
            <h2 className='mx-5 text-3xl font-semibold lg:mx-0'>Let&apos;s Connect!</h2>
            <p className='mx-5 mt-2 text-sm lg:mx-0'>Hi, if you&apos;re interested in working with me, I&apos;d love to participate in building something great and hearing from you. As someone who is extremely passionate about development I&apos;m always eager to develop new projects, exchange ideas, and expand my network. Even if it&apos;s not a project, I enjoy talking about all things development.</p>
                <form className='flex flex-col mx-5 py-10 gap-7 lg:py-5 lg:mx-0' onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='name' >Name</label>
                  <input id='name' name='name' type='text' className=' h-8 ring-1 ring-input-border bg-input rounded-sm  p-2 lg:h-10' required />
                </div>
                {/* Email Input */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='email'>Email</label>
                  <input id='email' type='email' name='_replyto' className=' h-8 ring-1 ring-input-border bg-input rounded-sm p-2 lg:h-10' required/>
                </div>
                {/* Message Input */}
                <div className='flex flex-col gap-2'>
                  <label htmlFor='message'>Message</label>
                  <textarea id='message' name='message' className=' h-28 ring-1 ring-input-border bg-input rounded-sm p-2' required/>
                </div>
                {/* Submit Button */}
                <input type='submit' className='self-center py-2 px-10 bg-button-color text-white rounded-md'/>
            </form>
          </div>
          {/* contact form container END*/}

          {/* Experience + Trait Card */}
          <div className='px-5 flex flex-col'>
                  {/* Three Trait Cards */}
                  <div className='flex flex-col items-center gap-3 relative top-6 md:flex-row md:self-center lg:self-start lg:ml-8'>
                      <div className={styles.traitCard}>
                          <div className=' flex flex-col h-32 w-20 text-center gap-2 self-center'>
                              <Image src={traitOne} alt='lightbulb-icon' />
                              <p className='text-sm'>Problem Solver</p>
                          </div>
                      </div>
                      <div className={`${styles.traitCard} md:mb-[-35px]`}>
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
                  <div id={styles.biographySection} className='bg-nav px-5 py-10 lg:pr-72 lg:pt-24 lg:mt-[-32px]'>
                  {/* Experience and Skills Container */}
                      <div className='lg:pr-80 mt-3 lg:ml-8'>
                              <h2 className='text-xl font-semibold mb-2 '>Experience</h2>
                              <ul className='list-disc ml-7 text-sm'>
                                  <li>Software Developer Intern • <span className='italic'>Welspot LLC.</span></li>
                                  <li>Graduate • <span className='italic'>General Assembly Software Engineering Immersive</span></li>
                              </ul>

                          <div>
                              <h2 className='text-xl font-semibold mb-2 mt-8'>Skills</h2>
                              <ul className='list-disc ml-7 text-sm lg:flex lg:gap-14'>
                                <div className=''>
                                  <li>HTML5</li>
                                  <li>CSS</li>
                                  <li>JavaScript</li>
                                  <li>TypeScript</li>
                                  <li>Python</li>
                                </div>
                                  <div>
                                    <li>React</li>
                                    <li>Node JS</li>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                                    <li>Tailwind CSS</li>
                                    <li>Bootstrap CSS</li>
                                  </div>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <a className='mt-[-25px] bg-button-color text-white py-3 px-8 rounded-md mr-5 ml-11 z-10 mb-10 self-center' href='https://docs.google.com/document/d/1VJjqQIxkQx2RMIdvFQt88SFtQa5qkwPhqH6ACfeo_q8/edit?usp=sharing' target='_blank'
                  >View Resume</a>
          </div>
          {/* Experience + Trait Card END */}
        </div>
        

    </div>
  )
}

export default Contact