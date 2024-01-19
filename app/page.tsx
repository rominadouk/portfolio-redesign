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
    <main className="lg:flex lg:flex-col">
      {/* Gradient Header */}
      <div id='gradient-background' className='h-72 mb-[-170px] bg-sage-green lg:h-[430px] lg:mb-[-320px]'>
      </div>
      {/* Gradient Header End*/}

      {/* Intro Blurb */}
      <div id='intro' className='flex flex-col text-center lg:flex-row lg:text-left lg:self-center'> 

        {/* Anime Portrait Image */}
        <div id='home-portrait' className='h-52 rounded-md w-80 relative self-center lg:h-96 lg:w-[475px] lg:self-start lg:ml-28'> 
        </div>
        {/* Anime Portrait Image End*/}

        <div className='mt-3 lg:self-center lg:ml-[-25px] lg:z-50'>
          <h1 className='text-5xl font-medium lg:text-8xl lg:font-semibold'>Romina Douk</h1>
          <p className='font-medium lg:mt-3 lg:text-5xl'>Full-Stack Software Developer</p>
        </div>
      </div>
      {/* Intro Blurb  End*/}

      {/* Project Section */}
      <section id='projects' className='flex flex-col items-center mt-10 gap-9 pb-5 lg:flex-row lg:justify-center'>
        {projects.map((project) => {
          return (
            <div key={project.title} className='flex flex-col justify-between h-60 w-56 text-center relative drop-shadow-xl'>
              <div className=' flex-1 relative'>
                <Image src={project.image}  className='project-image' alt={project.title} layout='fill' objectFit='cover' />
              </div>
              <h2 className='py-3 bg-white '>{project.title}</h2>
            </div>
          )
        })}
      </section>
      {/* Project Section End*/}
      <button className='bg-button-color text-white py-3 px-14 rounded-md lg:self-center'>Contact</button>


    </main>
  )
}
