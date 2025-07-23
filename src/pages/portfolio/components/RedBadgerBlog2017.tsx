import React from "react";
import RB1 from '../../../assets/portfolio/red-badger/2017/rb1.png';
import RB2 from '../../../assets/portfolio/red-badger/2017/rb2.png';
import RB3 from '../../../assets/portfolio/red-badger/2017/rb3.png';
import RB4 from '../../../assets/portfolio/red-badger/2017/rb4.png';
import RB5 from '../../../assets/portfolio/red-badger/2017/rb5.png';
import RB6 from '../../../assets/portfolio/red-badger/2017/rb6.png';
import RB7 from '../../../assets/portfolio/red-badger/2017/rb7.png';
import RB8 from '../../../assets/portfolio/red-badger/2017/rb8.png';
import RB9 from '../../../assets/portfolio/red-badger/2017/rb9.png';
import RB10 from '../../../assets/portfolio/red-badger/2017/rb10.png';

export interface RedBadgerBlog2017Props {};

const RedBadgerBlog2017:React.FC<RedBadgerBlog2017Props> = ({}) => {
    React.useEffect(() => {
        document.documentElement.scrollTo({top: 0, behavior: "instant"});
    }, []);

    return (
        <section className='flex flex-col mt-36 w-screen bg-white text-black items-center p-10'>
            <div className="flex flex-col gap-4 max-w-[800px]">
                <p className="text-4xl">A WEEK AT RED BADGER</p>
                <img
                    className="w-full xl:px-36"
                    src={RB1}
                    alt="red-badger.png"
                />
                <p>After circling the block a second time, I finally stumbled across the entrance to Red Badger's new office building, camouflaged by construction workers adding finishing touches to the surrounding area (I'll admit - I needed some help from Saadia, who provided me with essential directions).</p>
                <p>Things progressed smoothly from there, however, and I was warmly greeted by Saadia and many members of the team (including the adorable office dog Milo). I was given a tour around the new office, a square space separated by three central meeting rooms with side walls made of glass. Many of the other walls entertained stylish drawings, including a fireplace near the dining area and Stevie the pigeon, resident at one of Red Badger's many windows. The work environment proved to be modern and open. After being introduced to the kitchen, stocked with free drinks and equipped with all necessities, and the bathrooms, I was provided with a door pass, laptop, email address and slack account (full Badger gear) and integrated into my first role of the week - designer.</p>
                <img
                    className="w-full xl:px-36"
                    src={RB2}
                    alt="red-badger.png"
                />

                <p className="text-xl">— Design —</p>
                <img
                    className="w-full xl:px-36"
                    src={RB3}
                    alt="red-badger.png"
                />
                <p>On day one, I worked under the guidance of Sari and her team. For the first half of the day, I was set the task of designing some stickers for the React London Meetup, a monthly gathering hosted by Red Badger, using Illustrator. Given my Illustrator and Photoshop skills were a little rusty (my free trial expired a few years back), I was grateful to have the help of Clem, who guided me through the basics before giving me space to explore the softwares alone. I'm glad to announce my skills in both the Adobe products improved drastically by the end of the week. During the process, I was taught about style guides, which includes things like the colours, typography and icons used in each project, and the design aspect of Agile methodology.</p>
                <p>I was initially worried about where and when to go for lunch, but as it turned out, my worries were completely unfounded. When the team and I started feeling hungry, I was led by Sari, Clem and Monika to Itsu, home of sushi and other varieties of Japanese cuisine. My lunch was even paid for by Sari (thank you!). With our lunch in hand, we headed back to the office to eat in the office dining area.</p>
                <img
                    className="w-full xl:px-36"
                    src={RB4}
                    alt="red-badger.png"
                />
                <p>The second half of the day was spent working on Photoshop, editing and colouring in an illustration for a CMS (Content Management System) cover photo to Red Badger specifications. For this exercise, I had the chance to use Clem's Wacom Intuos Pro. As expected, the tablet was amazing and the pressure sensitivity of it in Photoshop surprised me.</p> 
                <p>Throughout the rest of the week, I also worked on two illustrations to be used in Red Badger's Twitter and Instagram. I was briefed and guided throughout the project (which really helped to consolidate some of my newly found Photoshop and Illustrator skills) by Nathalie. The exercises really provided me with insight to the design process, which not only required high quality design work, but also designs which fit the branding specifications of each project. Each design is also reviewed by several people before approval.</p>

                <p className="text-xl">— Development —</p>
                <img
                    className="w-full xl:px-36"
                    src={RB5}
                    alt="red-badger.png"
                />
                <p>On my second day at Red Badger, I was introduced by Greg, project manager of one of the Dev teams, to Martin and Matt, who are part of the Dev team. After being briefed on the development aspect of the Agile methodology, I had the chance to work on updating the technology page of the Red Badger site, which I'd like to think I helped out on (although Martin did most of the real work). I did, however, learn a lot about the application of HTML, Javascript and React to the completion of the website. The updates involved changing a link on the page to the standard Red Badger button, in order to increase visibility, and adding a hyperlink to the round tech table image. It was interesting to see how the changes affected the format of the page in different models (i.e. on a laptop as opposed to a mobile phone), and how the CSS code had to be modified to accommodate the different formats.</p>
                <p>Throughout the process, Martin did a great job at explaining how and why each change was implemented, and how the changes affected the site (I was also glad to find that I hadn't been accidentally messing up entire websites when playing with developer tools). It was interesting to learn that updates were first applied to a branch of the main site and only merged to the master site after completion of the updates and review of the code via pull requests (which really made me question the downtime on some sites claiming to be implementing updates). A particularly fun job I got to do was typing the custom 'make prettier' and 'make lint' commands into terminal, which basically ensured consistency of code (as different programmers have different programming styles) and checked for errors. I was also given the chance to write my first update log.</p>
                <img
                    className="w-full xl:px-36"
                    src={RB6}
                    alt="red-badger.png"
                />
                <p>Matt then introduced me to Google Analytics (used for tracking on the Red Badger site). This provided statistics to show things like how people navigate the site, which pages are visited most frequently and how many times each page is visited. Tracking can be added to each link on the site, and are generally used to help improve the performance of the site. It was these statistics that helped make clear the need for the aforementioned update.</p>

                <p className="text-xl">— Review —</p>
                <img
                    className="w-full xl:px-36"
                    src={RB7}
                    alt="red-badger.png"
                />
                <p>Towards the end of the week, I was able to join a brief meeting to review and discuss the current status of tasks associated with the Fortnum and Mason project. It was really interesting to see how a large team of developers was able to work on one project cohesively whilst splitting up the workload between them to allow an efficient flow. I was also provided insight to the role of project manager by Andy, which involves a variety of tasks from organising schedules and ensuring deadlines are met to providing opinions and advice to team members. When prompted for a visual image to describe his job, I was rewarded with the image of a person spinning plates.</p> 

                <p className="text-xl">— Testing —</p>
                <img
                    className="w-full xl:px-36"
                    src={RB8}
                    alt="red-badger.png"
                />
                <p>Andy then introduced me to Sam, who had the job of testing updated or newly written features for bugs before merging them with the master site. I was shown different methods of testing, including the use of bots (programmed with Ruby by the testers) and manual testing. It was fun to watch one of the bots at work, controlling the browser to perform a variety of tasks whilst emulating a possible user. The tests needed to be run on different browsers (using Browserstack) as well as different models of computers and takes up to 14 hours for some of the more important or more complicated features. Other jobs required around the clock monitoring by at least one team member so that if bugs were found, immediate support could be provided.</p>

                <p className="text-xl">— Discovery —</p>
                <img
                    className="w-full xl:px-36"
                    src={RB9}
                    alt="red-badger.png"
                />
                <p>One aspect of the Agile methodology I have yet to mention is the discovery section. This is generally the first part of the process, where a team gathers before the start of a project to scope out user needs and how to satisfy them. I had the chance to attend two of these workshop meetings throughout the duration of the week, which essentially started out as a goal to be achieved and ended with the most prominent problems that can be tackled. During the workshop, everyone was able to contribute ideas and a visible map was formed using post-it notes of the 'pains', 'gains' and 'jobs' of a potential client. Everyone was then able to vote on the most important 'pains', 'gains' and 'jobs' using a dot notation, before creating a journey that helped tackle the major 'pains'. There was also 'crazy eights', which is where everyone sketches out eight potential solutions to the given problems before a vote is commenced on the best solutions. The great thing about this process is that everyone was able to get their ideas across in an organised manner.</p>
                <img
                    className="w-full xl:px-36"
                    src={RB10}
                    alt="red-badger.png"
                />

                <p className="text-xl">— The Agile Methodology —</p>
                <p>After being exposed to all stages of the Agile methodology, I found that the method was great at keeping a steady workflow throughout each project. The boards placed strategically around the office ensured everyone knew what they needed to accomplish and the progress on each project. They also helped communication between different teams. The main stages of the Agile methodology are 'Discovery', 'User Experience/User Design', 'Development', 'Review', 'Testing' and 'Done', with a specific team dedicated to most sections (except the obvious).</p>

                <p>Thank you to everyone at Red Badger, especially Sari, Andy and Saadia (who helped arrange and organise my week), Clem, Monika and Froso (who helped me integrate into the world of design, and gave me a heads up to the job application process), Martin and Matt (who provided me with insight to dev work, and introduced me to some useful sites and applications), Nathalie (who gave me a exciting design brief and guided me through it), Sam (who showed and explained the testing process to me), Amy (for sending me a fun coding challenge - which I will finish after writing this blog) and Ben (for providing me with insight to the internship process). Thank you also to Lillian from Pinpoint, who introduced me to Red Badger and this awesome work experience placement. I felt extremely welcome for the week I was there and I'll definitely try to apply for an internship next year!</p>
            </div>
        </section>
    )
};

export default RedBadgerBlog2017;