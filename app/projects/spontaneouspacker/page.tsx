import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'
import screenshotImg from '../../../public/assets/images/weather-packer/desktop-all.png'
import desktopImg from '../../../public/assets/images/weather-packer/spontaneous-trip-packer-desktop.png'
import mobileImg from '../../../public/assets/images/weather-packer/weather-packer-mobile-views.png'

const spontaneousPacker = () => {

    const spontaneousPackerData = {
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
        <ReusableProjectPage title={spontaneousPackerData.title} summary={spontaneousPackerData.summary} lessonsLearned={spontaneousPackerData.lessonsLearned} roles={spontaneousPackerData.roles} technologies={spontaneousPackerData.technologies} liveLink={spontaneousPackerData.liveLink} backendLink={spontaneousPackerData.backendLink} frontendLink={spontaneousPackerData.frontendLink} desktopView={spontaneousPackerData.desktopView} mobileView={spontaneousPackerData.mobileImg} screenshot={spontaneousPackerData.screenshot} />
    </div>
  )
}

export default spontaneousPacker