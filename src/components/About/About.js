import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import { Email } from '@material-ui/icons'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className="h-screen flex items-center">
      <div class="flex flex-col py-36 gap-y-20 md:gap-y-56">
        <div className="text-lg md:text-4xl font-extralight">
          Hello! 👋
        </div>

        <p
          className="text-lg md:text-4xl !leading-relaxed max-w-3xl"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="flex gap-2">
          {social && (
            <>
              {social.github && (
                <a
                  target="_blank"
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  target="_blank"
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}

              {social.email && (
                <a
                  target="_blank"
                  href={social.email}
                  aria-label='email'
                  className='link link--icon'
                >
                 <Email />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default About
