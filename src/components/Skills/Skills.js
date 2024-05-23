import { skills } from '../../portfolio'

const Skills = () => {
  return (
    <section className="flex flex-col gap-y-16">
      <h2 className="text-6xl uppercase font-bold">Skills</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {Object.entries(skills).map(([key, value]) => (
          <div key={key}>
            <div className="font-bold uppercase mb-2">{key}</div>
            <div className="text-sm">
              {value.map((skill) => (
                <div key={skill}>{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
