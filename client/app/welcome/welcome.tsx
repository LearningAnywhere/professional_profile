import { Card } from '~/components/Card'
import { Tag } from '~/components/Tag'
import { IDEAL_JOBS, IDEAL_WORK_ENVIRONMENT } from './constants'

export function Welcome() {
  return (
    <main>
      <Card>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 text-center">
          <div className="m-5">
            <img
              className="object-scale-down rounded-full"
              src="ashley-newton-using-laptop.png"
              alt="Ashley photo"
            />
          </div>
          <div className="text-left mt-5">
            <h1 className="text-3xl font-bold">Ashley Newton</h1>
            <div className="mt-2">
              <h2>Software Developer</h2>
            </div>
            <div className="mt-2">
              <h3>
                Windsor, Ontario |{' '}
                <a href="https://www.linkedin.com/in/ashley-n-00131255/">
                  LinkedIn
                </a>
              </h3>
            </div>
          </div>
        </div>
      </Card>

      <Card header="Professional Summary">
        <div className="m-5">
          I'm a writer turned Full Stack Software Developer who loves building
          web applications, and scaling teams through clear documentation. I
          recently coded a number of full stack TypeScript / Javascript projects
          (React, Node, Apollo GraphQL, Express) with an amazing team at
          SkySpecs, to enable drone pilots to inspect wind turbines, and allow
          wind farm owners to analyze the results of those inspections.
        </div>

        <div className="m-5">
          I'd love to contribute my passion for learning new codebases, combined
          with my communication skills, to continue finding creative solutions
          to help users succeed.
        </div>
      </Card>

      <Card header="Ideal Jobs">
        <div className="grid grid-cols-2 gap-2 mr-5 ml-5 mb-5">
          {IDEAL_JOBS.map((job) => (
            <Tag key={job} title={job} />
          ))}
        </div>
      </Card>

      <Card header="Ideal Work Environment">
        <div className="grid grid-cols-2 gap-2 mr-5 ml-5 mb-5">
          {IDEAL_WORK_ENVIRONMENT.map((env) => (
            <Tag key={env} title={env} />
          ))}
        </div>
      </Card>
    </main>
  )
}
