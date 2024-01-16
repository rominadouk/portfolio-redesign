import Image from 'next/image';
import './page.css'
import Navbar from './components/Navbar';



export default function Home() {

     const projects = [
      {
      title: 'zen',
      image: 'import image and add url here',
      link: 'insert the link here'
      }, 
      {
      title: 'jservice',
      image: 'import image and add url here',
      link: 'insert the link here'
      }, 
      {
      title: 'yanigaiba',
      image: 'import image and add url here',
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
        <h1 className='text-5xl mt-3'>Romina Douk</h1>
        <p>Full-Stack Software Developer</p>
      </div>
    <section id='projects' className='flex flex-col items-center mt-10 gap-5'>
      {projects.map((project) => {
        return (
          <div key={project.title} className='flex flex-col h-56 w-56 text-center'>
            <h2 className='py-2'>{project.title}</h2>
          </div>
        )

      })}

    </section>
    </main>
  )
}
