import Image from 'next/image';
import './page.css'
import Navbar from './components/Navbar';
import zenImg from '../public/assets/images/zen-home.png'
import jserviceImg from '../public/assets/images/j-service.png'
import welspotLandingImg from '../public/assets/images/community-landing.png'



export default function Home() {

     const projects = [
      {
      title: 'zen',
      image: zenImg,
      link: 'insert the link here'
      }, 
      {
      title: 'jservice',
      image: jserviceImg,
      link: 'insert the link here'
      }, 
      {
      title: 'welspot landing',
      image: welspotLandingImg,
      link: 'insert the link here'
      }, 
    
    ]




  return (
    <main className="">
      <div id='gradient-background' className='h-64 mb-[-170px] bg-stone-300'>
      <Navbar />
      </div>
      <div id='intro' className='flex flex-col text-center'> 
        <p className='hi'>Hi, I'm</p>
        <div id='home-portrait' className='h-52 rounded-lg w-80 relative self-center'> 
        </div>
        <h1 className='text-5xl mt-3 font-medium'>Romina Douk</h1>
        <p className='font-medium'>Full-Stack Software Developer</p>
      </div>
    <section id='projects' className='flex flex-col items-center mt-10 gap-5'>
      {projects.map((project) => {
        return (
          <div key={project.title} className='flex flex-col justify-between h-56 w-56 text-center relative'>
            <div className=' flex-1 relative'>
              <Image src={project.image}  className='project-image ' alt={project.title} layout='fill' objectFit='cover' />
            </div>
            <h2 className='py-2'>{project.title}</h2>
          </div>
        )
      })}
    </section>
    </main>
  )
}
