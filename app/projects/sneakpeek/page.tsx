import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'

const SneakPeek = () => {

    const sneakPeekData = {
        title: 'SneakPeek',
        summary: 'This project is a sneaker viewing gallery to show off your latest kicks! The task of this project was to experiement and explore different jQuery plugins.',
        lessonsLearned: 'I learned the different installation processes for different plugins, and how different plugins interact with eachother. This project better equipped me with jQuery skills and ideas to enhance my future projects.',
        roles: ['individual full-stack developer', 'designer'],
        technologies: ['HTML', 'CSS', 'jQuery', 'Plugin: Vide', 'Plugin: Skippr', 'Plugin: Nanogallery', 'Plugin: Tilted Page Scroll' ],
        liveLink: 'https://sneakpeek-romina.netlify.app/',
        frontendLink: 'https://github.com/rominadouk/CISW-sneak-peek-plugins'
    }


  return (
    <div>
        <ReusableProjectPage title={sneakPeekData.title} summary={sneakPeekData.summary} lessonsLearned={sneakPeekData.lessonsLearned} roles={sneakPeekData.roles} technologies={sneakPeekData.technologies} liveLink={sneakPeekData.liveLink} backendLink={null} frontendLink={sneakPeekData.frontendLink} />
    </div>
  )
}

export default SneakPeek