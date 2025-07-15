import React from 'react';

const PortfolioPage: React.FC = () => {
  const div_1 = "flex flex-col items-center text-center bg-gray-50 text-gray-950 px-50 py-4";
  const div_2 = "flex flex-col items-center text-center bg-gray-200 text-gray-950 px-50 py-4";

  return (
    <section className='mt-36 w-full'>
      <div className='flex flex-col bg-[url(assets/portfolio/header-v2.jpg)] w-full h-120 bg-no-repeat bg-cover items-center justify-center gap-4'>
        <div className='flex flex-row '><h1 className='font-light'>PORTFOLIO</h1></div>
        <div className='flex flex-row '><p className='font-light'>Programming . Engineering . Art . Music</p></div>
      </div>
      <div className={div_1}>
        <p>FOTOKITE: COMPUTER VISION INTERNSHIP</p>
        <p>18th October 2021 - 15th April 2022</p>
        <p>For the industrial internship aspect of my ETH master's degree, I had the opportunity to spend 6-months with the Computer Vision sub team of Fotokite, a Swiss start-up who design and manufacture tethered drones for firefighters and public safety teams. The drone features a RGB camera and a thermal camera, which prove useful in emergency situations such as fires.</p>
        <p>Throughout this experience, I was given a series of tasks based on the thermal camera of the tethered drone, which will be used as a foundation for the next iteration of the kite. I had the opportunity to learn a lot from my work and my supervisor, and worked on topics such as real time image processing + optimisation, geometric calibration, and wrapping the finalised application as a custom GStreamer source plugin with cross-compilation capabilities.</p>
        <p>For this project, I used a variety of languages and frameworks, including C/C++, Python, OpenCV, Docker and Hexagon SDK.</p>
      </div>
      <div className={div_2}>
        <p>SWISSLOOP TUNNELING: THE NOT-A-BORING COMPETITION</p>
        <p>March 2021 - February 2022</p>
        <p>(Head of Electrical and Software Engineering, Lead Embedded, Control & Software Engineer - Design + Innovation Award, 2nd Place)</p>
        <p>Photo Credit: Janick Entremont</p>
        <p>The Swissloop Tunnelling team and the project we represent has no doubt been a dominant part of my life throughout the latter half of 2021. As a cross-functional team of roughly 50 students (and with the support of several industrial partners), we have discovered new skills, formed lasting bonds, and built a 7m long, 2.5 tonne Tunnel Boring Machine (TBM). As a proud member of Swissloop Tunneling, I would like to provide a brief insight into our extraordinary journey.</p>
        <p>The student team was founded originally in 2020 to compete in the first ever Not-A-Boring Competition in 2021, brought to life by Elon Musk. The main goal of the competition was to design and build a TBM that was capable of digging a 30-meter-long tunnel, 0.5 meters in diameter, and up to 1.5 meters deep as fast and as accurately as possible. </p>
        <p>I joined the team initially as a control systems engineer for our innovative, award-winning tunnel lining system. For the months leading up to the Not-A-Boring Competition, I progressively took on significantly more responsibility as a Lead Embedded, Control & Software Engineer, where I debugged our custom-made PCB designs (including participating in large amounts of SMD soldering), implemented much of the embedded and control interfaces (with the Raspberry Pi 4 and Raspberry Pi Pico, using Python and MicroPython respectively) for all subsystems of the machine (specifically soil removal, tunnel lining and propulsion), and designed, refactored and implemented much of the software backend + communication. As part of the testing process, I also debugged and interacted with much of the high voltage and power systems responsible for powering our machine.</p>
        <p>The months leading up to the final competition date were extremely challenging, but exhilarating, in our race against time (and final ETH exams for most of the tech team), and several days were spent with less than 2 or 3 hours of sleep (as well as a lot of sleepovers at our lab at EMPA). In a face-off with the COVID-imposed travel restrictions to the US from the Schengen Area (and needing to get to the US in order to win our competition and showcase our hard work), half the team (including me - who were not tied down by exams) also had to quarantine in Costa Rica for two weeks leading up to the competition to arrive at the competition site in Las Vegas.</p>
        <p>The competition week itself was even more intensive, and our team of 35 students who had travelled to the US worked together extensively day and night to piece together and finalise our machine. As our Head of Electrical and Software could not come with us to the US, I also took on the role of Effective Head for the duration of the competition, taking up responsibilities involving the coordination, planning and guidance of the Electrical and Software team and resources. Throughout this week, we worked together, with an immense amount of rapport and understanding between every team member, and finished the competition winning the Design and Innovation Award as well as 2nd Place, out of the 12 finalists that had competed in Las Vegas and nearly 400 teams that had initially applied.</p>
        <p>The experience has most definitely been the most challenging and growth inspiring project I've encountered to date, but most of all, the bonds and friendships formed are something I would never give up despite the difficulties we faced.</p>
        <p>Now, as the official Head of Electrical and Software Engineering since September 2021, I have been fulfilling my role in planning and executing the new iteration of the project (including recruiting, management, budget awareness, decision making, forming new partnerships, steering the technological progress), and most of all providing the guidance, support and knowledge needed for the new team, so that they can make our TBM even better for our next Euro tunneling contest in 2022. With the completion of the planning and knowledge transfer phase, I will sadly, but with pride and hope, leave my role as Head of Electrical and Software Engineering at Swissloop Tunneling to pursue my ETH Master Thesis in the beginning of 2022 (but will most likely remain connected to the team as an advisor to the new team).</p>
      </div>
      <div className={div_1}>
        <p>ETH GAME PROGRAMMING LABORATORY 2021</p>
        <p>Spring Semester, 2021</p>
        <p>After a semester of excitement and hard work, I, alongside my four other team members have finally completed our game, "Somnium"! The game was created as part of the ETH Game Programming Laboratory 2021, and focused on the given theme of "A Grimm's Fairytale".</p>
        <p>The game, based on the Grimm's tale of "A Little Red Riding Hood", is an open-map 2.5D co-op game revolving around working together to combine colours, in order to colour in your nightmares and gain enough courage to overcome your fears.</p>
        <p>I was in charge of creating all assets, animations and soundtracks, and had an amazing experience! Watch the game trailer and try out our game!</p>
        https://somnium-colour.itch.io/somnium
      </div>
      <div className={div_2}>
        <p>RIGID BODY COLLISION OF AMONG US AVATARS</p>
        <p>Autumn Semester, 2020</p>
        <p>(ETH Zurich, Physically-Based Simulation in Computer Graphics Course Project, Team of 2)</p>
        <p>In this mini course project, we used Blender and C++ to create our own 3D Among Us avatars and environment, and implemented 3D rigid body collision between the avatars and the environment.</p>
        <p>In the first week, we used Blender to model our own Among Us avatars. We added a bone structure and using this, a running animation. In the second week, we figured out how to triangulate the whole mesh, export the mesh to an .off file, and imported it into the PBS framework. In the third week, we implemented real-time motion simulation by applying a force to the avatar in real time. In the final weeks, we implemented 3D rigid body collision for complex, non-convex shapes, using a volume bounding hierarchy and AABB bounding box primitives. For this to work, we needed to solve a number of issues in order to make the collision detection more fast and robust. We also made our own Among Us environment in the later weeks using Blender. All in all, a small fun project which taught me a lot.</p>
      </div>
      <div className={div_1}>
        <p>NORI 2: BUILDING A MINIMALISTIC RAY TRACER IN C++</p>
        <p>Autumn Semester, 2020</p>
        <p>(ETH Zurich, Computer Graphics Individual Project)</p>
        <p>The Nori base code provides many features that would be tedious to implement from scratch. In this project, I extend this system to a full-fledged physically-based renderer in a series of course exercises. The exercises requires implementation of features such as Sampling and Warping, Monte Carlo Ray Tracing (Light Sampling, BRDF Sampling, Multiple Importance Sampling), and Global Illumination (Dielectric BSDF, Path Tracing, Photon Mapping). Using the functions implemented in the course exercises, along with further self implemented functionality, I was able to render the image shown below (using a scene I created in Blender), following the given final project theme of "Perfect Timing".</p>
        <p>There is so much happening around us everyday, all seemingly completely random, affected by so many random variables. But, sometimes, almost as if we were in a film, there are things that seem to happen with the perfect timing. My composition wishes to convey a chance encounter, seemingly an act of fate, that leads to the start of a new relation. This is represented by two felines that happen to cross each others' paths admist a busy world, capturing the moment where their tails intertwine to form the shape of a heart in a moment of stillness. Whether it be timing, angle, or focus, this chance encounter requires an absolutely... Purrfect timing.</p>
      </div>
      <div className={div_2}>
        <p>HACKZURICH 2020 (WORKSHOP #5 FIRST PLACE WINNER!)</p>
        <p>18th - 20th September 2020</p>
        <p>I was thrilled to be part of HackZurich 2020, Europe's biggest hackathon, and this year, the first ever hybrid hackathon, bringing together over a thousand of the world's brightest tech talents! Participants were selected from thousands of applications all over the world. I was lucky enough to attend the hackathon in person, and met my team of four at the event. Together, we worked on workshop #5: Huawei's "Unleash Innovation With HMS Core" brief, and were the first place winner of this workshop!</p>
        <p>Our product was an app that made use of the Skeletal Detection and Automatic Speech Detection features in the HMS Core's ML Kit.</p>
        <p>Our app enables you to learn a new language while doing exercise, in a fun and gamified AR environment. You are presented with a word in a foreign language, which you must translate. If you do not know the translation of the word, you can also perform a specific comedic yoga position in order to pass the round and earn a point.</p>
        <p>At the end of each round, the vocabulary is displayed to you in your language as well as the language you are trying to learn. The vocabulary becomes more difficult the longer you survive. The aim of the game is to survive for as long as you can, kind of like flappy bird!</p>
        <p>Our entire idea, implementation and video were created during the hackathon weekend.</p>
        <p>Find the official HackZurich 2020 aftermovie here, and our app description video here!</p>
        https://www.youtube.com/watch?v=hMcTfU-8Sco
        https://www.youtube.com/watch?v=-c76wr1xuBU&feature=youtu.be
      </div>
      <div className={div_1}>
        <p>CHANNEL SELECTION FOR LOW-POWER BRAIN-COMPUTER INTERFACES</p>
        <p>17th February - 29th May 2020</p>
        <p>(ETH Zurich, Bachelor Thesis)</p>
        <p>Abstract</p>
        <p>Achieving a high classification accuracy using electroencephalogram (EEG) based Brain-Computer Interfaces (BCIs) is a big challenge. Maximising the classification accuracy requires sophisticated models, which rely on many channels. This brings limitations when targeting a practical embedded system, due to the high power and memory requirements for both data acquisition and processing. It is therefore beneficial to reduce the number of channels as well as the model size.</p>
        <p>This project investigates channel selection for low power Motor-Imagery Brain-Computer Interfaces (MI-BCIs). It develops a systematic method of channel selection by targeting areas with high Motor-Imagery (MI) neural activity in the brain. To determine channels with the most significant neural activity, an investigation is conducted using Common Spatial Pattern (CSP) filter weights and EEGNet filter weights.</p>
        <p>Using EEGNet filter weights, the 4-class global model with the optimum configuration (with Nch = 16, ds = 3 and T = 3 s) that satisfies the SRAM requirements of the Cortex-M4 processor obtains a validation accuracy of 63.45%, surpassing the state-of-the-art [1] by 0.94%. Moreover, Subject-Specific Transfer Learning (SS-TL) increases the validation accuracy by 5.28% on average. On this optimal model, SS-TL increases the validation accuracy by 4.44% to 67.89%.</p>
        <p>To satisfy the Flash memory requirements of Subject-Specific (SS) models, layer freezing is also investigated, which can drastically increase the number of SS models stored on a device with limited memory.</p>
        https://864635c9-798a-4749-93e9-d055af7cc667.filesusr.com/ugd/95e17a_237751470e924648a6a2459361de9fcf.pdf

        <p>Channel Selection for Low-Power Brain-Computer Interfaces (Spinoff)</p>
        <p>Additionally to the main project, I engaged in a mini-project that spins off the main project. This focuses on implementing machine learning models for motor-movement (rather than motor imagery) on a low-power microcontroller (ARM Cortex-M4 STM32L475VG) using STM32CubeIDE.</p>
      </div>
      <div className={div_2}>
        <p>LUDUM DARE 72H GAME HACKATHON "UN-FUR-MILIAR TERRITORY"</p>
        <p>18th - 21st April 2020</p>
        <p>2D game design for the 46th Ludum Dare 72 hour Hackathon (with my friend, Hung Bui Quang).</p>
        <p>For this game, we decided to create a simple game to focus on learning and implementation. In the space of 72 hours, we engaged in programming, illustration, and soundtrack arrangement for our 2D shooter game, "Unfurmiliar Territory". This featured a Cat vs Zogs (a.k.a. Zombie Dogs) design under the hackathon theme of "Keep it Alive". The game and concept were fully created from scratch within the 72 hours using the game engine Godot.</p>
        <p>This event was the first game hackathon I've participated in. I enjoyed the experience a lot and am immensely proud of the final outcome.</p>
        https://ldjam.com/events/ludum-dare/46/unfurmiliar-territory
      </div>
      <div className={div_1}>
        <p>MINIATURE WEATHER STATION</p>
        <p>Autumn Semester, 2019</p>
        <p>(ETH Zurich, Applied Circuit and PCB Design, Course Project, team of two)</p>
        <p>This course involved the development, analysis and implementation of a miniature weather station.</p>
        <p>The main software used was Altium Designer, utilising skills such as choosing and buying electronic parts, using component libraries, preparing schematic symbols + footprints, creating schematic diagrams, and simulation of product.</p>
        <p>Additionally, upon having the model successfully pass the simulation phase, PCB assembly skills (including component placement, soldering and circuit testing) were also applied.</p>
      </div>
      <div className={div_2}>
        <p>EMG MUSCLE MOVEMENT DETECTOR</p>
        <p>29th October - 2nd November 2018</p>
        <p>Building an EMG sensor, which detects muscle movement (UCL 2nd year project, leader of a team of four).</p>
        <p>We designed electrodes by soldering wires to 2p coins, which allowed EMG signals to be detected and processed using a series of personally designed and soldered amplifiers, filters and buffers. The processed signal was then fed into an Arduino Mega (programmed using C), which transferred the input signal into a series of outputs, including an LED bar, a meter (designed by adjusting the angle of a motor shaft), and sound (higher frequency note depicts more movement).</p>
      </div>
      <div className={div_1}>
        <p>DIGITAL POWER SUPPLY</p>
        <p>12th October 2018 - 8th March 2019</p>
        <p>Designing and implementing a 5 V and 12 V digital power supply (UCL 2nd year project, leader of a team of 5).</p>
        <p>Rigorous testing and verification of our proposed digital power supply (DPS) was conducted via analysis of theory, Multisim simulations and testing of circuitry, before a PCB design was implemented. Surface mount components were then assembled on the board using solder paste and a reflow oven, and vias manually connected by soldering. The assembled PCB was finally tested to ensure it passed all verification tests. The relevant documents (requirements specification, verification plan, datasheet, manufacturing plan, costing analysis) were composed and updated appropriately throughout the process. A DPS was produced, capable of providing two voltage outputs (5V and 12V) from a single input voltage (9V).</p>
      </div>
      <div className={div_2}>
        <p>RED BADGER INTERNSHIP</p>
        <p>July 2017, August 2018</p>
        <p>In the summer of 2017, I was introduced to an amazing design and software organisation, Red Badger, where I engaged in a week-long internship. I worked with each team within the company (including the design team and the development team) and gained an overall understanding of the agile methodology.</p>
        <p>In the summer of 2018, I was offered the opportunity to return and complete a two-week internship specifically with the development team, where I worked on an internal project. This involved programming a Slack bot using JavaScript and CoffeeScript for the company server.</p>
        <p>To read more, check out my blog posts ('a week at Red Badger' and 'Return of the badger intern') from the Red Badger website!</p>
        https://blog.red-badger.com/2017/8/3/a-week-at-red-badger
        https://blog.red-badger.com/2018/9/6/return-of-the-badger-intern
      </div>
      <div className={div_1}>
        <p>ABLEITIES PROJECT</p>
        <p>Summer, 2017</p>
        <p>In summer 2017,  I worked with a not-for-profit multidisciplinary organisation, PinPoint Inc, to create a video that spreads awareness of how disabled people are treated in society. The video takes the form of a draw-my-life, telling the story of a young, ambitious teen, facing a disability he was born with.</p>
        <p>The video was filmed using a smartphone and a creative, makeshift set-up, and encourages others to also step forward and share their story.</p>
        https://pinpointinc.org/
        https://www.youtube.com/watch?v=LwNajCE84Ko
      </div>
    </section>
  );
};

export default PortfolioPage;