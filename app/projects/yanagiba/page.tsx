import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'

const yanagiba = () => {

    const yanagibaData = {
        title: 'Yanagiba',
        summary: 'Yanagiba is a make believe restaurant website. It is a single page application that uses HTML, Vanilla CSS, and jQuery',
        lessonsLearned: 'This project allowed me to strengthen my foundational CSS skills without the use of CSS frameworks which was a goal I had in mind. I also wanted to exercise my jQuery abilities and improve on them. This project was built by me and the design was by a UX/UI designer.',
        roles: ['individual full-stack developer'],
        technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    }


  return (
    <div>
        <ReusableProjectPage title={yanagibaData.title} summary={yanagibaData.summary} lessonsLearned={yanagibaData.lessonsLearned} roles={yanagibaData.roles} technologies={yanagibaData.technologies} />
    </div>
  )
}

export default yanagiba