import Image from 'next/image';
import './page.css'
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
      <div id='gradient-background' className='h-72 mb-[-170px] bg-stone-300'>
      {/* <Navbar /> */}
      </div>
      <div id='intro' className='flex flex-col text-center'> 
        <p className='mb-1 text-xl'>Hi, I'm</p>
        <div id='home-portrait' className='h-52 rounded-lg w-80 relative self-center'> 
        </div>
        <h1 className='text-5xl mt-3 font-medium'>Romina Douk</h1>
        <p className='font-medium'>Full-Stack Software Developer</p>
      </div>
    <section id='projects' className='flex flex-col items-center mt-10 gap-9 pb-5'>
      {projects.map((project) => {
        return (
          <div key={project.title} className='flex flex-col justify-between h-60 w-56 text-center relative drop-shadow-xl '>
            <div className=' flex-1 relative'>
              <Image src={project.image}  className='project-image' alt={project.title} layout='fill' objectFit='cover' />
            </div>
            <h2 className='py-3 bg-white '>{project.title}</h2>
          </div>
        )
      })}
      <button className='bg-stone-300 py-2 px-6'>Contact</button>
      
    </section>

    </main>
  )
}
