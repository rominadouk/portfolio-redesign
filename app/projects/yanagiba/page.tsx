import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'

const yanagiba = () => {

    const yanagibaData = {
        title: 'Yanagiba',
        summary: "Yanagiba is a make believe restaurant and the purpose of this project is to display a restaurant's main viewing page.",
        lessonsLearned: 'This project allowed me to strengthen my foundational CSS skills without the use of CSS frameworks which was a goal I had in mind. This project was done by a crossfunctional team consisting of myself and a UX/UI designer. Deployed on Netlify',
        roles: ['individual full-stack developer'],
        technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript','Netlify'],
        liveLink: 'https://yanagiba.netlify.app/',
        frontendLink: 'https://github.com/rominadouk/yanagiba'
    }


  return (
    <div>
        <ReusableProjectPage title={yanagibaData.title} summary={yanagibaData.summary} lessonsLearned={yanagibaData.lessonsLearned} roles={yanagibaData.roles} technologies={yanagibaData.technologies} liveLink={yanagibaData.liveLink} backendLink={null} frontendLink={yanagibaData.frontendLink} />
    </div>
  )
}

export default yanagiba