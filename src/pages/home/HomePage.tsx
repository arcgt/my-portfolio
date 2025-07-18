import React from 'react';
import { useNavigate } from 'react-router-dom';
import SkillSetCard from './components/SkillSetCard';
import EducationSection from './components/EducationSection';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.documentElement.scrollTo({top: 0, behavior: "instant"});
  }, []);

  return (
    <section className='mt-36 w-full'>
      <div className='flex bg-[url(assets/home/header.jpg)] w-screen h-60 xl:h-120 bg-no-repeat bg-cover items-center justify-center'></div>
      <div className='flex flex-col font-light bg-gray-50 text-gray-950 gap-10 py-10 items-center'>
        <h1>ABOUT ME</h1>
        <div className='flex flex-col gap-4 text-xl'>
          <p>I am an engineer</p>
          <p>artist</p>
          <p>musician</p>
        </div>
        <p className='text-xl max-w-[320px]'>Welcome to my <span className='cursor-pointer font-bold text-gray-400' onClick={() => navigate('/portfolio')}>online portfolio</span>!</p>
        <div className='text-base/8 max-w-[320px] xl:max-w-[800px]'>
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
        <div className='flex flex-col xl:flex-row gap-10 items-center'>
          <SkillSetCard 
            title="SOFTWARE ENGINEERING"
            description={[
              "Full stack: FE (React / TypeScript / Vite / Tailwind, Flutter / Dart), BE (Python), DB (MongoDB, SQL), DevOps (GitHub Actions, Azure, Docker), misc (Firebase, Stripe, Mixpanel, Sentry, GPT)", 
              "Machine Learning: Torch, TensorFlow, OpenAI/GPT, NLP", 
              "Computer Vision: OpenCV, FastCV, C, C++"
            ]}
          />
          <SkillSetCard 
            title="ART"
            description={[
              "I have experience mainly in producing assets for game development using digital art.", 
              "Mediums: digital, pencil, fineliner (+ gouache, graphic markers, watercolour, acrylic, soft pastels, oil pastels)"
            ]}
          />
          <SkillSetCard 
            title="MUSIC + MEDIA"
            description={[
              "I have experience mainly in composing original songs, and instrumental background music for games.", 
              "Instruments (piano, guitar, voice, ukulele, violin), production (Garageband, iMovie)"
            ]}
          />
        </div>
        <div className='max-w-[320px] xl:max-w-[800px]'>Fun fact: all art, music, media and designs featured on this website (including the <span className='cursor-pointer underline font-bold text-gray-400' onClick={() => window.open("https://github.com/arcgt/my-portfolio", "_blank")}>website itself</span>!) are made by me.</div>
      </div>
      <div className='flex flex-col font-light bg-gray-50 text-gray-950 gap-10 py-10 items-center'>
        <p className='text-4xl'>ACADEMIC BACKGROUND</p>
        <EducationSection
          date='2020 - 2023'
          university='ETH ZURICH'
          degree='ROBOTICS, SYSTEMS AND CONTROL (MSC)'
          subheadings={[
            "Activities and societies:",
            "Head of Software and Electrical Engineering at Swissloop Tunneling (2nd Place in the Not-A-Boring Competition + Innovation Award)",
            "Teaching Assistant: Machine Learning for Brain-Computer Interfaces (Fall Semester), Machine Learning on Microcontrollers (Spring Semester)",
          ]}
          bodyText={[
            "Master Thesis: Using machine learning to train real-time, audio-driven, emotional talking head models",
            "Specialist in Computer Vision, Embedded / Control Systems, Machine Learning, Computer Graphics, Physically-based Simulations, Game Design and Microeconomy."
          ]}
        />
        <EducationSection
          date='2017 - 2020'
          university='UNIVERSITY COLLEGE LONDON / ETH ZURICH (THIRD YEAR ABROAD)'
          degree='ELECTRONIC AND ELECTRICAL ENGINEERING (BENG)'
          subheadings={[
            "Grade: First Class Honours (85% Average) - 7th out of 120 in cohort",
            "Major: EEE - Minor: Intelligent Systems",
          ]}
          bodyText={[
            "Bachelor Thesis: Low-Power Brain-Computer Interfaces using compact Machine Learning models for Edge Computing.",
            "Specialist in Machine Learning, Digital Systems, Embedded Systems, Systems Programming and Computer Architecture.",
          ]}
        />
      </div>
      <div className='bg-fixed h-120 bg-[url(assets/home/footer.jpg)]'></div>
      <div className='p-4 xl:p-8 bg-gray-50 text-gray-950 font-light text-xs'>
        <p>©2025 by Tianhong Gan</p>
      </div>
    </section>
  );
};

export default HomePage;