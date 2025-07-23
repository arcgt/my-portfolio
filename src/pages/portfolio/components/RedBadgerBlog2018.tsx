export interface RedBadgerBlog2018Props {};

const RedBadgerBlog2018:React.FC<RedBadgerBlog2018Props> = ({}) => {
    return (
        <div>
            RETURN OF THE BADGER INTERN	
            Second internship at Red Badger - Introducing the Red Badger Mystery Meals scheme.

            After my amazing experience at Red Badger last year (the one week placement passed in the blink of an eye), I just had to return. Expressing my desire to work with Red Badger once more, Andy gave me the opportunity to come back on a two week internship. And so, armed with the basic knowledge of all the different roles and responsibilities of Red Badgers' cross-functional  teams, this time I decided to delve back into Red Badger's internal cogwheel as a dev in training. 

            — The Brief —

            Upon arriving at Red Badger (glad to announce that this time, I managed to find the entrance without getting lost), I was welcomed by Becca, who provided me with my essential badger gear. Following this, I was briefed on my project for the next two weeks - to implement a method to organise mystery meals between badger members in different teams. The goal of the project is to help colleagues at different locations, who would otherwise not get many chances to interact, to get to know each other better. With this project, I would get a chance to implement and experience firsthand all the stages of the Agile methodology I was introduced to last year.

            The initial project meeting was held in one of the central meeting rooms, where I was first introduced to Pedro, Dominik and AJ, who would help me throughout the two weeks. We began by understanding the problem statement ('people don't know each other outside of their teams'), hypothesis ('helping people organise cross-team lunches will encourage people to meet more') and assumptions ('providing an easy way to organise lunches will encourage people to meet'). This helped us get into the right mindset. Following this, we went on to discuss the MVPs (Minimum Viable Products), organising ideas using post-it notes from low fidelity products (i.e. a spreadsheet organised by an admin) to high fidelity products (i.e. a web application), before finally deciding that building a Slack bot would be the most viable method at the present stage. 

            — Development and Testing—

            On the first day, Pedro, my mentor for the two weeks, helped me set up my programming environment, installing essential tools such as NVM (Node Version Manager), Yarn (a more efficient version of NPM, Node Package Manager), Brew, and ZSH (a more visually interactive shell for working with git). I was reminded of the fundamentals of working on a project as a team using GitHub, including how branching, commits and push and pull requests work, as well as taught the basic git commands in terminal and how to implement them whilst working on a real life project.

            Pedro explained many fundamentals to programming, which helped towards the overall completion of my project. This included things such as the difference between the syntax in ES4 and ES6 (one line of code written in ES6 could often replicate the function of lines of code in ES4), how to check the internal workings of programs in terminal, and old and new functionalities in web development.

            Utilising this, I was able to begin the implementation of the Mystery Meals bot, named Cantina. Throughout the process, one of the crossroad decisions included whether to use Hubot (which Red Badger already had a deployed instance of, however had some outdated modules) or Botkit (which was more up to date, however would be slightly more difficult to set up) as a framework for the bot. In the end, I decided to use Hubot as it was more convenient - I would only have to add in scripts to the existing instance of Badgerbot2, and I grew more accustomed to the syntax given in the examples on the Hubot website. 

            Another hurdle I had to overcome was the integration of the Redis Brain (which would permanently store data after programs finished running) into my code. This was a major challenge for me in the beginning, however after Pedro showed me the layout of the robot brain itself by printing it in terminal, I found it was actually very easy to adapt my code to integrate the storage. Throughout the two weeks, I was able to implement different variations of methods of generating four random people across different teams to select for the lunch, and with the help of Pedro and Dominik, eventually managed to produce working prototypes. 

            Upon producing some functional scripts, I also briefly got the chance to explore testing using a library called Jest, a unit testing framework. Dominik explained that it was a good practice to split code up into functions, which can then be tested, and the responses monitored, using Jest. This would allow us to more easily discover bugs in our code and to ensure everything worked as it should. 

            — UX and User Design —

            Throughout the two weeks, I also had the chance to work with Steve, who taught me the essentials in UX Design and helped me implement the process on the Mystery Meals project. First of all, we wrote down the steps the user would go through when interacting with the bot using post-it notes, then added hand-drawn screens to simulate the visual interactions. After getting down the complete user interaction, we used Marvel and Sketch to create interactive screens that emulated the stages a user would go through, which could then be used as a prototype for testing before an actual product is programmed with code.

            Using the completed prototype, we were able to conduct some testing to see how a user would respond to the product. Steve explained that although the functionality of the product may be obvious to us, the creators, it may not be as obvious to a user who has just been exposed to the product. The purpose of user testing is therefore to expose our prototype to a test user to see how they may interact with the product, and the usability and clarity of the product and its functions. After forming a script (some guidelines used to set the scene for our test user, and some open-ended prompts to discuss as our test user interacts with the product), I had the opportunity to help conduct one of these tests with the help of Steve. During these tests, generally two people will work with the user, one person communicating directly to the user using the prompts on the script, and the other taking notes on the user response throughout the process. From this, I was able to learn through the prototype which instructions needed to be clearer and which parts of the product needed more clarity.

            — Lunch Breaks and Badger Life—

            For a project dedicated to mystery meals with colleagues, a section dedicated to the lunch time adventures I did have is a must. During the two weeks, I had the chance to enjoy learning things from ultimate frisbee throwing techniques from Pedro, to duo Mario Kart racing tactics, all during my lunch breaks. I was also introduced to the Giant Oreo Ice Cream bar (the start of an addiction?!) and many of the delicious foods offered by the nearby market (shoutout to Cellyn, my lunch time buddy), including Katsu Curry, the best salad I've ever had, and the classic fish and chips. 

            I was able to catch up with many of the people who I worked with in the previous year, including Sari, Nathalie, Monika, Clem and Andy (nice seeing you all again!) and also had the chance to meet many new people. Upon expressing an interest in Red Badger's sporting events, I was invited to a morning session of badminton at the nearby Finsbury Leisure Centre, where I had a great time playing some 2v2 matches with Tim, Haines and Tom. It was a great start to the day, and whilst I must admit I was pretty exhausted by the afternoon, I do not regret playing one bit.


            — Final Day and Company Meeting —
            On my final day at the office, I was treated to a lunch with Becca, Pedro, Dominik, AJ and Andy at a Mexican restaurant, where I got to try the chicken and avocado burrito along with some pork tacos, which were delicious. At end the day, I had the opportunity to attend a monthly company meeting, where I was able to introduce myself to the people I had yet to meet, as well as the Mystery Meals bot I had been working on for the past two weeks. I was greeted by very positive responses, including many people joining the Mystery Meals slack channel (#mystery-meals) before the bot had even been deployed! 

            At the end of the meeting, I was lucky enough to view the company auction (items bought raised money for charity) hosted by Pedro, which had an absolutely amazing vibe! I was even allowed a private bid for a Bamboo Wacom Tablet, which I won. This brings us to a pretty perfect ending to my lovely two weeks at Red Badger. 

            Thank you to everyone at Red Badger for welcoming me back as an intern. In particular to Pedro and Dominik, who guided me throughout the project and taught me so much, and to Steve, who showed me the UX Design aspect of the process. Thank you also to Andy, Becca and Sari for putting together the placement for me on such short notice. I had a great time at Red Badger - it was really lovely seeing everyone again from last year as well as meeting new people this year - and I learnt a lot. All in all, it was an experience to remember, and if I ever get the chance, I will be sure to return once more!
        </div>
    )
};

export default RedBadgerBlog2018;