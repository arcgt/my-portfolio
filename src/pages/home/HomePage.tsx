import React from 'react';
import { useNavigate } from 'react-router-dom';
import DocIcon from '../../assets/home/doc-icon.png';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.documentElement.scrollTo({top: 0, behavior: "instant"});
  }, []);

  return (
    <section className='mt-36 w-full'>
      <div className='flex bg-[url(assets/home/header.jpg)] w-screen h-120 bg-no-repeat bg-cover items-center justify-center gap-4'></div>
      <div className='flex flex-col font-light bg-gray-50 text-gray-950 gap-10 py-10 items-center'>
        <h1>ABOUT ME</h1>
        <div className='flex flex-col gap-4 text-xl'>
          <p>I am an engineer</p>
          <p>artist</p>
          <p>musician</p>
        </div>
        <p className='text-xl'>Welcome to my <span className='cursor-pointer font-bold text-gray-400' onClick={() => navigate('/portfolio')}>online portfolio</span>!</p>
        <div className='text-base/8 max-w-[800px]'>
          <p>I specialise in full-stack development and ML, and have aided the success of many start-up organisations.</p>
          <p>I also enjoy a variety of things, from art, music and gaming to reading, hiking and photography.</p>
          <p>I have put together this site as a portfolio of my interests, so feel free to check out my <span className='cursor-pointer underline font-bold text-gray-400' onClick={() => navigate('/portfolio')}>portfolio</span> for more information!</p>
        </div>
      </div>
      <div className='flex flex-col font-light bg-gray-200 text-gray-950 gap-10 py-10 items-center justify-center'>
        <div className='flex flex-col gap-2'>
          <p className='text-4xl'>MY SKILL SET</p>
          <p>(see <span className='cursor-pointer underline font-bold text-gray-400' onClick={() => navigate('/portfolio')}>portfolio</span>  for examples + projects)</p>
        </div>
        <div className='flex flex-row gap-10 items-center'>
          <div className='flex flex-col rounded-sm gap-2 bg-gray-50 w-[400px] h-[400px] p-10 items-center justify-start'>
            <div className='flex flex-row justify-center pb-4'>
              <img
                className="h-10"
                src={DocIcon}
                alt="icon"
              />
            </div>
            <div className='text-xl pb-5'>SOFTWARE ENGINEERING</div>
            <div>Full stack: FE (React / TypeScript / Vite / Tailwind, Flutter / Dart), BE (Python), DB (MongoDB, SQL), DevOps (GitHub Actions, Azure, Docker), misc (Firebase, Stripe, Mixpanel, Sentry, GPT)</div>
            <div>Machine Learning: Torch, TensorFlow, OpenAI/GPT, NLP</div>
            <div>Computer Vision: OpenCV</div>
          </div>
          <div className='flex flex-col rounded-sm gap-2 bg-gray-50 w-[400px] h-[400px] p-10 items-center justify-start'>
            <div className='flex flex-row justify-center pb-4'>
             <img
                className="h-10"
                src={DocIcon}
                alt="icon"
              />
            </div>
            <div className='text-xl pb-5'>ART</div>
            <div>I have experience mainly in producing assets for game development using digital art.</div>
            <div>Mediums: digital, pencil, fineliner (+ gouache, graphic markers, watercolour, acrylic, soft pastels, oil pastels)</div>
          </div>
          <div className='flex flex-col rounded-sm gap-2 bg-gray-50 w-[400px] h-[400px] p-10 items-center justify-start'>
            <div className='flex flex-row justify-center pb-4'>
              <img
                className="h-10"
                src={DocIcon}
                alt="icon"
              />
            </div>
            <div className='text-xl pb-5'>MUSIC + MEDIA</div>
            <div>I have experience mainly in composing original songs, and instrumental background music for games.</div>
            <div>Instruments (piano, guitar, voice, ukulele, violin), production (Garageband, iMovie)</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col font-light bg-gray-50 text-gray-950 gap-10 py-10 items-center'>
        <p className='text-4xl'>ACADEMIC BACKGROUND</p>
        <div className='max-w-[800px] text-base/8'>
          <div className='flex flex-row justify-center pb-4'>
            <img
              className="h-10"
              src={DocIcon}
              alt="icon"
            />
          </div>
          <p className='text-lg/8 pb-4'>2020 - 2023</p>
          <p className='text-xl/8'>ETH ZURICH</p>
          <p className='text-xl/8 pb-4'>ROBOTICS, SYSTEMS AND CONTROL (MSC)</p>
          <p>Activities and societies:</p>
          <p>Head of Software and Electrical Engineering at Swissloop Tunneling (2nd Place in the Not-A-Boring Competition + Innovation Award)</p>
          <p className='pb-4'>Teaching Assistant: Machine Learning for Brain-Computer Interfaces (Fall Semester), Machine Learning on Microcontrollers (Spring Semester)</p>
          <p>Master Thesis: Using machine learning to train real-time, audio-driven, emotional talking head models </p>
          <p>Specialist in Computer Vision, Embedded / Control Systems, Machine Learning, Computer Graphics, Physically-based Simulations, Game Design and Microeconomy.</p>
        </div>
        <div className='max-w-[800px] text-base/8'>
          <div className='flex flex-row justify-center pb-4'>
            <img
              className="h-10"
              src={DocIcon}
              alt="icon"
            />
          </div>
          <p className='text-lg/8 pb-4'>2017 - 2020</p>
          <p className='text-xl/8'>UNIVERSITY COLLEGE LONDON / ETH ZURICH (THIRD YEAR ABROAD)</p>
          <p className='text-xl/8 pb-4'>ELECTRONIC AND ELECTRICAL ENGINEERING (BENG)</p>
          <p>Grade: First Class Honours (85% Average) - 7th out of 120 in cohort</p>
          <p className='pb-4'>Major: EEE - Minor: Intelligent Systems</p>
          <p>Bachelor Thesis: Low-Power Brain-Computer Interfaces using compact Machine Learning models for Edge Computing.</p>
          <p>Specialist in Machine Learning, Digital Systems, Embedded Systems, Systems Programming and Computer Architecture.</p>
        </div>
      </div>
      <div className='bg-fixed h-120 bg-[url(assets/home/footer.jpg)]'></div>
      <div className='p-8 bg-gray-50 text-gray-950 font-light text-xs'>
        <p>©2025 by Tianhong Gan</p>
      </div>
    </section>
  );
};

export default HomePage;