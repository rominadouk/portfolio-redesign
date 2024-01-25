import Image from 'next/image';
import './page.css'
import zenImg from '../public/assets/images/zen-home.png'
import jserviceImg from '../public/assets/images/j-service.png'
import welspotLandingImg from '../public/assets/images/community-landing.png'
import Link from 'next/link';



export default function Home() {

     const projects = [
      {
      title: 'zen',
      image: zenImg,
      }, 
      {
      title: 'jservice',
      image: jserviceImg,
      }, 
      {
      title: 'yanagiba',
      image: welspotLandingImg,
      }, 
    
    ]

  return (
    <main className="flex flex-col">
      {/* Gradient Header */}
      <div id='gradient-background' className='h-72 mb-[-170px] bg-nav lg:h-[430px] lg:mb-[-320px]'>
      </div>
      {/* Gradient Header End*/}

      {/* Intro Blurb */}
      <div id='intro' className='flex flex-col text-center lg:flex-row lg:text-left lg:self-center'> 
        {/* Anime Portrait Image */}
        <div id='home-portrait' className='h-52 rounded-md w-80 relative self-center md:w-96 md:h-72 lg:h-96 lg:w-[475px] lg:self-start lg:ml-28'> 
        </div>
        {/* Anime Portrait Image End*/}
        <div className='mt-3 lg:self-center lg:ml-[-25px] lg:z-50'>
          <h1 className='text-5xl font-semibold md:text-6xl lg:text-8xl'>Romina Douk</h1>
          <p className='font-semibold md:text-2xl lg:mt-3 lg:text-5xl'>Full-Stack Software Developer</p>
        </div>
      </div>
      {/* Intro Blurb  End*/}

      {/* Project Section */}
      <section id='projects' className='flex flex-col items-center mt-10 gap-9 pb-5  md:flex-row  md:justify-center'>
        {projects.map((project) => {
          return (     

            <div key={project.title} className='flex flex-col justify-between w-72 text-center relative drop-shadow-xl'>
              <Link href={`/projects/${project.title.toLowerCase()}`} >
              <div className=' h-52    relative ' style={{ backgroundImage: `url(${project.image.src})`, backgroundSize: 'cover' }}>
                {/* <Image src={project.image}  className='project-image' alt={project.title} layout='fill' objectFit='cover' /> */}
              </div>
              <h2 className='py-3 bg-white font-medium'>{project.title}</h2>
              </Link>
            </div>


          )
        })}
      </section>

      {/* Project Section End*/}
      <button className='bg-button-color text-white py-3 px-14 rounded-md mx-auto'>Contact</button>


    </main>
  )
}
