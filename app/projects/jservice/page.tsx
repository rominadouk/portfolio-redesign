import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'

const jservice = () => {

    const jserviceData = {
        title: 'jservice',
        summary: 'A solo project built to demonstrate pulling data from a third-party API, inspired by the popular trivia gameshow Jeopardy. Users can keep track of their score and adjust based on the amount of points the question is worth.',
        lessonsLearned: 'I ran into CORS errors that I was able to resolve. This was my first project where I pulled from a third-party API',
        roles: ['individual full-stack developer'],
        technologies: ['HTML', 'CSS', 'React', 'Bootstrap', 'Axios']
    }


  return (
    <div>
        <ReusableProjectPage title={jserviceData.title} summary={jserviceData.summary} lessonsLearned={jserviceData.lessonsLearned} roles={jserviceData.roles} technologies={jserviceData.technologies} />
    </div>
  )
}

export default jservice