import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'
import screenshotImg from '../../../public/assets/images/weather-packer/desktop-modal.png'
import desktopImg from '../../../public/assets/images/weather-packer/packer-desktop-mockup.png'
import mobileImg from '../../../public/assets/images/weather-packer/packer-mobile-views.png'

const packer = () => {

    const packerData = {
        title: 'Spontaneous Packer',
        summary: "This web application was developed users plan for their spontaneous trips, it provides a three-day forecast and suggestions of what to pack based on the forecast. It also provides a packing list feature to add and delete items.",
        lessonsLearned: 'This project exercised my vanilla JavaScript skills. I improved my DOM manipulation methods with this project. I was able to truly appreciate the value of frameworks when I was working this project, I decided to challenge myself and not use any front-end frameworks. This project is deployed on Netlify and uses a NodeJS backend that I also developed. This is another version of a concept I completed during my time at General Assembly in collaboration with a team of developers called "Cli-Mate Change".',
        roles: ['individual full-stack developer'],
        technologies: ['HTML', 'CSS', 'JavaScript','Netlify', 'NodeJS', 'ExpressJS', 'MongoDB'],
        liveLink: 'https://spontaneous-trip-packer.netlify.app/',
        frontendLink: 'https://github.com/rominadouk/spontaneous-trip-packer',
        backendLink: 'https://github.com/rominadouk/weekend_packer_backend',
        desktopView: desktopImg,
        mobileImg: mobileImg,
        screenshot: screenshotImg,
    }


  return (
    <div>
        <ReusableProjectPage title={packerData.title} summary={packerData.summary} lessonsLearned={packerData.lessonsLearned} roles={packerData.roles} technologies={packerData.technologies} liveLink={packerData.liveLink} backendLink={packerData.backendLink} frontendLink={packerData.frontendLink} desktopView={packerData.desktopView} mobileView={packerData.mobileImg} screenshot={packerData.screenshot} />
    </div>
  )
}

export default packer