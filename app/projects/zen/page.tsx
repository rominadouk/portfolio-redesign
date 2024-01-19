import React from 'react'
import ReusableProjectPage from '@/app/components/ReusableProject'

const Zen = () => {

    const ZenData = {
        title: 'Zen',
        summary: 'Zen is a selfcare application that helps users go more in depth about what they are feeling and aims to improve overall well-being with an emphasis on mental health by tracking self-care habits. Zen features journaling, goal tracking, and selfcare tip suggestions. This was a cross-functional project with design by UX/UI designer Christian Jackson and built by me. Zen is a major project of mine that is consistenly being updated.',
        lessonsLearned: 'I learned how to implement authentication, how to work better with react, and connecting databases. I learned how to better approach a complete redesign and how to better build my projects for development.',
        roles: ['individual full-stack developer'],
        technologies: ['MongoDB', 'Express JS', 'React JS', 'Node', 'TypeScript', 'Tailwind CSS']
    }


  return (
    <div>
        <ReusableProjectPage title={ZenData.title} summary={ZenData.summary} lessonsLearned={ZenData.lessonsLearned} roles={ZenData.roles} technologies={ZenData.technologies} />
    </div>
  )
}

export default Zen