import * as React from 'react'
import { Card } from '~/components/Card'

export function Welcome() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 text-center bg-gradient-to-r from-slate-100 to-slate-200 m-5 rounded-lg">
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
            <h2>Arr Software Developer</h2>
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

      <Card>
        <div className="m-5">
          <h2>Professional Summary</h2>
        </div>
        <div className="m-5">
          Results-oriented and innovative software engineer with a passion for
          full-stack development, creative problem-solving, and technical
          evangelism. A proven speaker at multiple Google Developer Group
          conferences, skilled at breaking down complex topics into engaging,
          accessible discussions that empower developers. Thrives on tackling
          challenging problems, improving user experiences, and building
          intuitive, high-quality software with a deep sense of empathy for both
          users and teammates. Driven by curiosity and a commitment to
          continuous learning, eager to contribute technical expertise, fresh
          ideas, and a collaborative spirit to a dynamic, growth-focused
          company.
        </div>
      </Card>

      <Card>
        <div className="m-5">
          <h2>Ideal Jobs</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 mr-5 ml-5 mb-5">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1">
            Software Developer
          </div>
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1">
            Full-Stack Developer
          </div>
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1">
            Frontend Developer
          </div>
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1">
            Backend Developer
          </div>
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1">
            Software Engineer
          </div>
        </div>
        <div className="m-5">
          <h2>Ideal Setup</h2>
        </div>
        <div className="grid grid-cols-2 gap-2 mr-5 ml-5 mb-5">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1">
            Hybrid
          </div>
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 text-center rounded-full mt-1 mb-1">
            Remote
          </div>
        </div>
      </Card>
    </main>
  )
}
