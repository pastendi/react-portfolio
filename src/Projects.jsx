import React from 'react'
import { projects } from './constant'
import { SiGithub } from 'react-icons/si'
import { RxExternalLink } from 'react-icons/rx'
const Projects = () => {
  return (
    <main id='projects'>
      <div className='w-full'>
        <h1 className='text-5xl font-semibold'>Projects and Experiences</h1>
        <div className='mt-10 flex flex-col gap-20 w-full'>
          {projects.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col gap-10 w-full ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <div className='flex-1 flex justify-center items-center'>
                  <div className='  w-full lg:w-[28rem] max-h-96 sm:max-h-[35rem] lg:max-h-96 rounded-xl overflow-hidden shadow-md shadow-gray-100 '>
                    <img
                      src={item.image}
                      alt=''
                      className='transition-all duration-700 hover:scale-125'
                    />
                  </div>
                </div>
                <div className='flex-1 flex justify-center '>
                  <div className='w-full lg:max-w-[28rem] sm:max-h-96  overflow-hidden  flex flex-col space-y-4 text-justify'>
                    <h1 className='text-2xl lg:text-3xl capitalize font-semibold'>
                      {item.name}
                    </h1>
                    <p className='text-sm sm:text-lg'>{item.description}</p>
                    <div className='flex flex-wrap space-x-4 items-center lg:h-28'>
                      <p className='text-2xl font-semibold'>Stacks :</p>
                      {item.tech.map((item, index) => (
                        <div
                          key={index}
                          className='text-sm sm:text-base py-1 px-3 rounded-md bg-sky-500 capitalize'
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className='flex justify-center items-center space-x-4'>
                      <a
                        href={item.github}
                        className='capitalize bg-slate-300 bg-opacity-20 md:bg-none  flex items-center space-x-1 px-3 py-1 rounded-lg  '
                      >
                        <span>Github</span>
                        <SiGithub />
                      </a>
                      <a
                        href={item.website}
                        className='capitalize   bg-slate-300 bg-opacity-20 md:bg-none flex items-center space-x-1 px-3 py-1 rounded-lg '
                      >
                        <span>Website</span>
                        <RxExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Projects
