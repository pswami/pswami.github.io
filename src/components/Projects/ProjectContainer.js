import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectContainer = ({ project }) => (
  <div className='w-full block p-6 bg-gray-800 border rounded-lg shadow border-gray-700'>
    <div className="flex items-center gap-8 flex-col md:flex-row">
      <img src={project.cover} alt={project.cover} className="w-52 rounded-lg" />

      <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left gap-y-5">
        <div className="text-xl font-bold">{project.name}</div>

        <p className="text-sm">{project.description}</p>

        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <span key={item} className="bg-sky-800 text-gray-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                {item}
              </span>
            ))}
          </ul>
        )}

        <div className="w-full flex items-center justify-center md:justify-start gap-x-4">
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default ProjectContainer
