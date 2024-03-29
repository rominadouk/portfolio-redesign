import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'
import screenshotImg from '../../../public/assets/images/zen/desktop-2.png'
import desktopImg from '../../../public/assets/images/zen/zen-desktop-mockup.png'
import mobileImg from '../../../public/assets/images/zen/zen-mobile-views.png'

const Zen = () => {

    const ZenData = {
        title: 'Zen',
        summary: 'Zen is a selfcare application that helps users go more in depth about what they are feeling and aims to improve overall well-being with an emphasis on mental health by tracking self-care habits. Zen features journaling, goal tracking, and selfcare tip suggestions. This was a cross-functional project with design by UX/UI designer Christian Jackson and built by me. Zen is a major project of mine that is consistenly being updated, it is deployed on Heroku.',
        lessonsLearned: 'I learned how to implement authentication, how to work better with react, and connecting databases. I learned how to better approach a complete redesign and how to better build my projects for development.',
        roles: ['Individual full-stack developer'],
        technologies: ['MongoDB', 'Express JS', 'React JS', 'Node', 'TypeScript', 'Tailwind CSS', 'Heroku'],
        liveLink: 'https://zen-redesign-33d46e687340.herokuapp.com/',
        backendLink: 'https://github.com/rominadouk/zen_backend',
        frontendLink: 'https://github.com/rominadouk/zen-redesign',
        desktopView: desktopImg,
        mobileImg: mobileImg,
        screenshot: screenshotImg,
    }


  return (
    <div>
        <ReusableProjectPage title={ZenData.title} summary={ZenData.summary} lessonsLearned={ZenData.lessonsLearned} roles={ZenData.roles} technologies={ZenData.technologies}  liveLink={ZenData.liveLink} backendLink={ZenData.backendLink} frontendLink={ZenData.frontendLink} desktopView={ZenData.desktopView} mobileView={ZenData.mobileImg} screenshot={ZenData.screenshot}/>
    </div>
  )
}

export default Zen