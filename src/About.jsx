import { TbBracketsContainStart, TbBracketsContainEnd } from 'react-icons/tb'
import { stacks } from './constant'

const About = () => {
  return (
    <main id='about'>
      <div>
        <div className='py-10 text-3xl font-semibold flex flex-col sm:flex-row space-y-4 space-x-4 sm:space-y-0'>
          <div>Tech Stack</div>
          <div className='flex flex-wrap items-center gap-4'>
            <TbBracketsContainStart />
            {stacks.map((stack, index) => (
              <div key={index} className=' h-10'>
                <img src={stack} alt='' />
              </div>
            ))}
            <TbBracketsContainEnd />
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row gap-6'>
          <div className=' flex-1 rounded-lg overflow-hidden'>
            <img
              src='https://media.vanityfair.com/photos/5ed11cac4bf1433205878dac/4:3/w_4188,h_3141,c_limit/IWC_MONICA_BARBARO_LOOK_1_0791V1MM.jpg'
              alt='dsfsd'
            />
          </div>
          <div className='flex-1'>
            <h1 className='text-5xl font-bold'>About</h1>
            <p className='mt-10  sm:text-lg lg:text-xl text-justify'>
              I am an ambitious, dedicated and self-taught developer with a
              strong passion for building robust and scalable web applications.
              With a solid foundation in JavaScript and a comprehensive
              understanding of the MERN stack (MongoDB, Express.js, React, and
              Node.js), throughout my education and personal projects, I have
              gained hands-on experience in developing both the front-end and
              back-end components of web applications. I am a lifelong learner,
              continuously expanding my skills and staying updated with the
              latest web development trends. I am eager to contribute my
              technical skills and dedication to your team's success.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About
