import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'
import screenshotImg from '../../../public/assets/images/sneakpeek/desktop-2.png'
import desktopImg from '../../../public/assets/images/sneakpeek/sneak-peek-desktop-mockup.png'
import mobileImg from '../../../public/assets/images/sneakpeek/sneak-peek-mobile-views.png'

const SneakPeek = () => {

    const sneakPeekData = {
        title: 'SneakPeek',
        summary: 'This project is a sneaker viewing gallery to show off your latest kicks! The task of this project was to experiement and explore different jQuery plugins.',
        lessonsLearned: 'I learned the different installation processes for different plugins, and how different plugins interact with eachother. This project better equipped me with jQuery skills and ideas to enhance my future projects.',
        roles: ['Individual developer', 'Designer'],
        technologies: ['HTML', 'CSS', 'jQuery', 'Plugin: Vide', 'Plugin: Skippr', 'Plugin: Nanogallery', 'Plugin: Tilted Page Scroll' ],
        liveLink: 'https://sneakpeek-romina.netlify.app/',
        frontendLink: 'https://github.com/rominadouk/CISW-sneak-peek-plugins',
        desktopView: desktopImg,
        mobileImg: mobileImg,
        screenshot: screenshotImg,
    }


  return (
    <div>
        <ReusableProjectPage title={sneakPeekData.title} summary={sneakPeekData.summary} lessonsLearned={sneakPeekData.lessonsLearned} roles={sneakPeekData.roles} technologies={sneakPeekData.technologies} liveLink={sneakPeekData.liveLink} backendLink={null} frontendLink={sneakPeekData.frontendLink} desktopView={sneakPeekData.desktopView} mobileView={sneakPeekData.mobileImg} screenshot={sneakPeekData.screenshot}/>
    </div>
  )
}

export default SneakPeek