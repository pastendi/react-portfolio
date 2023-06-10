import ReactTypingEffect from 'react-typing-effect'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { TfiLinkedin } from 'react-icons/tfi'

const Welcome = () => {
  return (
    <main id='hero'>
      <div className=' flex flex-col gap-20 md:gap-10 md:flex-row'>
        <div className='flex-1'>
          <div className='flex flex-col space-y-12'>
            <div>
              <h1 className='text-5xl lg:text-7xl font-bold'>
                Hi I'm <span>Pastendi</span>
              </h1>
              <div className='text-xl lg:text-3xl'>
                <ReactTypingEffect
                  text={[
                    'I Love Software Development',
                    'I aim to be full stack developer',
                    'I like to learn new technology',
                  ]}
                  speed={40}
                  eraseSpeed={20}
                  eraseDelay={500}
                  typingDelay={500}
                />
              </div>
            </div>
            <p className=' text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              possimus quo unde! Corporis, nisi ducimus sit suscipit dignissimos
            </p>
            <div className='flex gap-6'>
              <a
                href='#'
                className='inline-flex justify-center items-center bg-transparent border-4 rounded-full border-neon p-3 text-neon text-2xl'
              >
                <FaFacebookF />
              </a>
              <a
                href='#'
                className='inline-flex justify-center items-center bg-transparent border-4 rounded-full border-neon p-3 text-neon text-2xl'
              >
                <BsTwitter />
              </a>
              <a
                href='#'
                className='inline-flex justify-center items-center bg-transparent border-4 rounded-full border-neon p-3 text-neon text-2xl'
              >
                <TfiLinkedin />
              </a>
            </div>
            <div>
              <button className='rounded-full bg-neon py-2 px-8 text-black font-bold text-xl  shadow-md hover:shadow-none shadow-neon transition-all ease-in-out duration-300'>
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='w-64 h-64 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-lg shadow-neon'>
            <img
              src='https://media.vanityfair.com/photos/5ed11cac4bf1433205878dac/4:3/w_4188,h_3141,c_limit/IWC_MONICA_BARBARO_LOOK_1_0791V1MM.jpg'
              alt='dsfsd'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
export default Welcome
