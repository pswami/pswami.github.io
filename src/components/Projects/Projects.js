import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from './ProjectContainer'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='flex flex-col gap-y-16'>
      <h2 className="text-6xl uppercase font-bold">Projects</h2>

      <div className="flex gap-4 flex-wrap">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
