import { MasterProfile } from './interfaces';

export const masterProfile: MasterProfile = {
    identity: {
        name: 'Eric Smith',
        contact: {
            phone: '253-229-1679',
            email: 'ericsmithalan@gmail.com',
            address: {
                street: '5645 Mauna Loa Blvd Apt 204',
                city: 'Sarasota',
                state: 'FL',
                zip: '34240',
            },
        },
        online: {
            website: 'smithfurnituredesign.com',
            github: 'github.com',
            linkedin: 'linkedin.com',
            vercelDeploy: 'vercel.app',
        },
    },

    military: {
        branch: 'U.S. Navy',
        rank: "Aviation Boatswain\'s Mate Fuels (ABF) E5",
        stationed: 'USS Carl Vinson (sea duty)',
        entryDate: new Date(1993, 6, 12),
        separationDate: new Date(1997, 7, 6),
        dischargeStatus: 'Honorable',
        disabilityRatingPercent: 80,
        veteransPreference: '10-point CPS',
        coreDuties: [
            'Operated and maintained aircraft fueling systems, ensuring fuel quality and strict safety compliance.',
            'Supervised fueling and defueling operations afloat and trained personnel crews.',
            'Performed significant administrative, command record-keeping, and supply inventory tracking duties.',
        ],
    },

    healthAndLimitations: {
        workplaceRestrictions: [
            'Lifting weighted objects aggravates neck and left-arm symptoms; light-duty preferred (<20 lbs).',
            'All-day, repeated, or overhead lifting is restricted.',
            'Prolonged looking down (downward reading or keyboard posture) aggravates symptoms.',
            'Continuous or rapid scanning of the environment / repetitive head turning triggers radiating pain.',
            'Driving tolerance is limited during acute symptom flare-ups.',
        ],
    },

    skillsLibrary: {
        designAndPrototyping: [
            'Photoshop',
            'Illustrator',
            'Sketch',
            'Figma',
            'Fireworks',
            'Affinity Designer',
            'Affinity Photo',
            'Justinmind',
            'Framer',
            'Paint Code',
            'Quartz Code',
        ],
        frontendEngineering: [
            'HTML',
            'CSS',
            'SASS',
            'LESS',
            'JavaScript',
            'TypeScript',
            'ES6',
            'jQuery',
            'React',
            'React Native',
            'Redux',
            'Angular 1',
            'Backbone.js',
            'XAML',
            'XML',
            'XSLT',
        ],
        backendToolsAndFullStack: [
            'Node.js',
            'MongoDB',
            '.NET / C#',
            'WPF',
            'Silverlight',
            'ASP.NET',
            'MVC',
            'SQL',
            'NPM',
            'Gulp',
            'Grunt',
            'Bower',
            'Webpack',
            'Babel',
            'Git',
            'Yeoman',
            'Visual Studio',
            'Visual Studio Code',
        ],
        mobileAndWebPlatforms: [
            'Xamarin',
            'Cordova',
            'iOS (Xcode)',
            'WordPress (Strong frontend template customization; beginner backend/PHP/API)',
            'Squarespace (Stylesheet overrides and hosting architecture)',
        ],
        manufacturingAnd3D: [
            'Blender (3D Modeling & digital texture maps)',
            'Three.js (Interactive web renders)',
            'Maya',
            'CNC machine operation (Height-map generating via nodes)',
            '3D Printing tool/jig fabrication',
        ],
        administrativeAndOperational: [
            'Microsoft Office (Advanced Word, Excel formulas, Access relational databases)',
            'Process mapping and workflow automation',
            'Requirements gathering and functional documentation',
            'Records management and data validation',
            'Cross-cultural / multi-location team coordination (including team management in India)',
            'Structured peer mentoring and crisis communication',
            'Strict adherence to confidentiality and professional boundaries',
        ],
    },

    workHistory: [
        {
            company: 'Palm Aire Country Club',
            location: {
                city: 'Sarasota',
                state: 'FL',
                zip: '34243',
                street: '5601 Country Club Way',
            },
            phone: '(941) 355-9733',
            title: 'Groundskeeper',
            startDate: new Date(2025, 8, 1),
            endDate: new Date(2026, 6, 1),
            contacts: [
                {
                    name: 'Brian',
                    title: 'Superintendent',
                    contactMethod: 'Via Main Phone',
                },
                {
                    name: 'Annette Iversen',
                    title: 'HR Manager',
                    contactMethod: 'Via Main Phone',
                },
                {
                    name: 'Michael Saldana',
                    title: 'Groundskeeper Reference',
                    contactMethod: 'Mikeysaldana01@icloud.com',
                },
            ],
            responsibilitiesSummary:
                'Responsible for managing the physical condition, aesthetic detailing, and landscape infrastructure around the clubhouse and primary course grounds.',
            resumeBullets: [
                'Single-handedly took over full maintenance of the clubhouse common areas and landscape grounds covering roughly 14 acres, safely assuming responsibilities that historically required a two-person team.',
                'Stepped into a completely unguided role, independently evaluating operational gaps to build structural work schedules and predictable background maintenance routines.',
                'Trained a Spanish-speaking assistant on complex machinery paths, large utility vehicle controls, and chemical handling procedures without shared verbal language.',
                'Maintained constant professional interactions with private members and guests, adjusting tasks around active course traffic and immediate hazard reporting.',
                'Position ended safely due to the heavy physical lifting and posture demands of the role.',
            ],
            userStories: [
                "I was given the clubhouse grounds role with no instructions on what all needed to be done. No one really knew everything that was needed. This is something that didn't need training but the ability to identify areas that needed work.",
                'Using the skills I had gotten in tech, I was able to quickly identify areas that I could quickly do which gave the biggest impact and made the area feel a lot cleaner even though I only did a couple of things. My ability to prioritize and see ways to manipulate people through design was key. That also gave me time to figure out other things that needed to be done.',
                'Over time, I gained an understanding of every task and was able to prioritize them in a way that focused on areas that had the biggest impact while also taking time to do the other tasks randomly. By doing this I was able to give the appearance that I was staying ahead which opened up room to also do larger projects. I was constantly having to deviate from my tasks to do unanticipated things. Some required I spend a couple of days doing them.',
                'Prior to me, the job required two people. I\'ve been able to maintain it on my own and the general member feedback is, "the place never looked this good".',
                'I was given another helper who spoke no english but was able to train her on everything. I even trained her on big equipment which is something no one else had done for her.',
            ],
            sideConcepts: {
                title: 'Groundskeeping Task Management App Proof-of-Concept',
                details:
                    "Noticed a total lack of task logging or systematic coordination on the job. Built a small functional proof-of-concept system using Google Maps coordinate tracking to streamline team work. Wrote code utilizing geographical matrix boundaries so that an operator taking a cell phone photo would automatically extract the image metadata, pinpoint the GPS location, and map it directly to a friendly course area name (e.g., 'Hole 1') with zero manual typing. Standardized common tasks into static dropdown tags (mow, weed, blow, cleanup) to ensure data sorting compliance.",
            },
        },
        {
            company:
                'Lenawee County 39th Circuit Court / Veterans Treatment Court',
            location: {
                city: 'Adrian',
                state: 'MI',
                zip: '49221',
                street: '425 N. Main Street',
            },
            phone: '517-264-4697',
            title: 'veteran Peer Mentor Coordinator',
            startDate: new Date(2024, 9, 1),
            endDate: new Date(2025, 5, 1),
            contacts: [
                {
                    name: 'Theresa M. Rupley',
                    title: 'Program Coordinator',
                    contactMethod: '517-264-4697',
                },
            ],
            responsibilitiesSummary:
                'Coordinated the recruitment, screening, assignment, and operational compliance of the veteran mentor program pairing justice-involved veterans with peer coaches.',
            resumeBullets: [
                'Managed the operational coordination of the volunteer infrastructure for the specialty treatment court, matching clients with trained peer mentors.',
                'Ran targeted online recruitment campaigns using social media and database searches alongside in-person public presentations to source qualified volunteers.',
                'Maintained absolute legal confidentiality and strict data boundaries, communicating updates directly with the court team including judges, defense counsel, and probation leads.',
                'Logged operational hours independently, providing administrative support for twice-monthly review hearings.',
                'Provided direct, high-trust veteran peer mentoring in residential, telephone, and court environments while adhering fully to program rules.',
            ],
            userStories: [
                'Primary responsibility was to find and manage veterans volunteers to help veterans navigate through the court system... Along with being paid for coordinating, I also volunteered as a mentor to help veterans navigate the court system. Met and spoke with veterans going through the court system at their homes, on the phone, and where ever they needed to meet.',
                'My main goal was to find volunteers. I need that to be separated from my mentorship role. Focused on finding and recruiting volunteers through social media, online searches, and in-person outreach, then coordinated those volunteers to help other veterans navigate the court system.',
                "Mentored veterans directly, offering confidential support while staying within program guidelines and building trusted 'battle buddy' relationships.",
                'One prospect did not start because the supervisor wanted only me. I logged own time... did not log or file veteran information in any system; did not file veteran information in any system.',
            ],
        },
        {
            company: 'Ascendum Solutions',
            location: {
                city: 'Blue Ash',
                state: 'OH',
                zip: '45242',
                street: '10290 Alliance Rd',
            },
            phone: '(513) 792-5100',
            title: 'UX Lead / Product (Product Technologist)',
            startDate: new Date(2019, 6, 1),
            endDate: new Date(2021, 8, 1),
            contacts: [
                {
                    name: 'Kris Nair',
                    title: 'Chief Executive Officer',
                    contactMethod: 'Via Main Phone',
                },
            ],
            responsibilitiesSummary:
                'Led user experience design, front-end architecture direction, and feature translation for enterprise health applications.',
            resumeBullets: [
                'Gathered and translated complex medical software requirements into clear interactive mockups and operational technical specs.',
                'Managed a remote, distributed team of interface designers located in India, standardizing design sprint workflows to bypass timeline friction.',
                'Contracted and onboarded specialized technical staff, executing a team scale-up that resolved design backlogs two weeks ahead of deadlines.',
                'Spearheaded rapid product concepts to bridge gaps between separate business engineering divisions.',
                'Resigned abruptly following a structural contract misalignment, initiating a voluntary sabbatical from the technology sector.',
            ],
            userStories: [
                'Managed a team of designers in India while working on an Electronic Health Records (EHR) application. I worked with experienced professionals to gather requirements and often translated those requirements into mockups for the designers to follow which allowed a more efficient workflow.',
                'I contracted out positions for two designers and a web developer to help boost up the speed of UX being delivered to the 15 developers. We were able to get caught up in about four weeks which was about two weeks earlier than we expected.',
                'Developer Eric Smith, from the Ascendum team, helped create the OhioHelps web application, a tool developed through extra hours of teamwork to connect volunteers with people in need.',
                'When covid hit I came up with an idea that would allow people to ask for help by connecting them to volunteers. A progressive web app designed to connect volunteers with high-risk people in need of supplies. Today, we saw how this app has been able to help members of our community. A family of five with a 7-year old was able to get what they needed because of a volunteer on our app... Ascendum gave me some freedom to work on ideas as well since my OhioHelps idea was successful.',
            ],
        },
        {
            company: 'DISCUS',
            location: {
                city: 'Columbus',
                state: 'OH',
                zip: 'Not Provided',
                street: 'Not Provided',
            },
            phone: 'Not Provided',
            title: 'UX Designer & Developer (Product Technologist)',
            startDate: new Date(2018, 3, 1),
            endDate: new Date(2019, 7, 1),
            contacts: [],
            responsibilitiesSummary:
                'Evaluated and refactored enterprise web tools used to manage file accuracy within precision aerospace and defense manufacturing systems.',
            resumeBullets: [
                'Automated and streamlined the design pipeline for drawing components and complex manufacturing entities.',
                'Conducted user research, stakeholder tracking, and layout flows to isolate critical navigation roadblocks.',
                'Iterated structural updates to complex application headers, moving context controls directly adjacent to active components.',
                'Maintained componentized layout standards preferred by development teams to drive lower code integration overhead.',
                'Built dynamic frontend code blocks matching specifications mapped directly from layout logic.',
            ],
            userStories: [
                'Discus Navigator is a web application intended to streamline the manufacturing process. As the UX designer, my job is to study the existing application and come up with a new experience that will allow users to focus and perform tasks with speed and accuracy.',
                "Research: Being new to Navigator, my first step was to become familiar with it by meeting with stakeholders, reading the help files, creating flow diagrams, and trying to use the app. After I felt comfortable knowing the process and jargon, I sat with users and observed them while they worked... My observations showed many issues in the application but for this specific scenario, I observed a few common issues: Users ignored everything other than the lower right table columns; One beginner user couldn't figure out where to start; Directions were skipped due to user focusing on task.",
                'Focusing on the 3 issues, I created a few wire-frames that removed unnecessary elements to help provide a clear focus on the primary task. I then presented different options to users to get their feedback and to determine the best option. This process continued until I got buy-off from stakeholders and users. Having some confidence in the final wire-frames being a good solution, I created an fully interactive prototype to test with users.',
                'The prototype received high remarks from users, so I began finalizing the design and creating design specs. When finalizing, I break out the components and design them individually. This makes it easier for me to document events, states, animations, and interactions for each component and UI Developers seem to like this approach. As I design the components, I place them into the layout to ensure a good fit.',
                'A significant complaints from potential customers was the application looked too complicated and out-dated. Prior to doing a complete overhaul of the experience, I was asked to update the design to make it "look" less complex. The goal of this project was to make the application more presentable to potential customers while keeping development costs down.',
                'Solution: While observing users, I discovered they did not use most of the features being shown. Using the diagrams I created to understand the features, I was able to categorize those features into primary, secondary, and tertiary buckets. The header was the most cluttered area so I focused on that first. I removed many redundant actions and move others to be in context to the areas where the actions affect.',
            ],
        },
        {
            company: 'Vivomi',
            location: {
                city: 'Lake Stevens',
                state: 'WA',
                zip: '98258',
                street: 'Not Provided',
            },
            phone: 'Not Provided',
            title: 'Lead UX Designer (Product Technologist)',
            startDate: new Date(2018, 3, 1),
            endDate: new Date(2018, 6, 1),
            contacts: [],
            responsibilitiesSummary:
                'Owned dual track interface design and frontend shell development for mobile health tracking MVP software.',
            resumeBullets: [
                'Designed and developed mobile interface structures using Xamarin Forms, XAML, and C# under compressed product launch targets.',
                'Conducted competitive analysis of consumer health apps to define baseline data navigation habits and build logical layout rules.',
                'Created overall system flowcharts utilized simultaneously for design tracking and engineering asset management.',
                'Bypassed low-impact layout tasks to focus development time strictly on unique core data pages (Home and Activity tracking).',
                'Coached and paired with a senior programmer, setting up a wireframe-to-build workflow that secured a successful beta launch.',
            ],
            userStories: [
                'Puulse is a mobile application that communicates with a device that provides 24/7 Real Time ECG Heart Rate. I was responsible for designing the User Experience along with developing the UI using Xamarin Forms, XAML, & C#. Due to time constraints and my multiple roles, I took many UX shortcuts along the way to save time.',
                'Gathering Requirements & User Research: Because of time constraints, I limited UX research to looking at what other popular applications were doing. By looking at other apps, I was able to see patterns and make UX assumptions on why those patterns existed. I started out by diagramming the overall structure...',
                'Wireframes: Many pages like auth and settings were pretty standard so I skipped wire-framing them to save time. I focused on our Home and Activity page since these were going to be unique... Process & Execution: After setting up the initial Xamarin project (UI Development) , we brought on a more seasoned UI Developer to help out. This provided me with more time to work on the UX and design while working with stakeholders to get requirements and to set priorities.',
                'The developer and I set up a process where I would provide him basic wire-frames that exposed the controls and functionality needed for the UI. He would work off of those to create the functionality while I finalized the design. Either him or I would then implement the final design. Successfully launched beta application in July 2018 with very positive remarks about the design and experience.',
            ],
        },
        {
            company: 'Omax',
            location: {
                city: 'Kent',
                state: 'WA',
                zip: '98032',
                street: '21409 72nd Ave S',
            },
            phone: '(253) 872-2300',
            title: 'Lead UX Designer (Product Technologist)',
            startDate: new Date(2017, 4, 1),
            endDate: new Date(2018, 3, 1),
            contacts: [],
            responsibilitiesSummary:
                'Led user research and structural interface concepts for specialized industrial abrasive waterjet hardware control systems.',
            resumeBullets: [
                'Learned to operate heavy industrial machinery directly to document real-world shop safety and precision control constraints.',
                'Mapped decoupled legacy software workflows into a singular unified application desktop container concept.',
                'Designed a persistent machine-status tracking bar, utilizing early Windows tab layouts to group native tools while supporting floating third-party apps.',
                'Explored Unity 3D engine scripts to model real-time cutting simulations, providing machinists with visual data confirmation before executing cuts.',
                'Engineered logical drawing layout constraints modeled on mobile layouts to reduce file modification errors for customers.',
                'Conducted closed internal testing loops with advanced application staff to maintain strict competitive project security.',
            ],
            userStories: [
                'OMAX was using Unity (a game engine) as a major part of their application so I explored ways 3D could be used to improve the user experience... I spoke with many users and owners to understand the challenges they faced with the current set of applications. I was also able to observe some users but I was very limited in that area due to secrecy around the project. Learning to operate the machines helped fill that gap.',
                'My research helped me conclude that confidence was a key underlying factor in providing a better experience to users. There is no way a user can know if all the settings they chose will produce the desired result until after they make the cut. Therefore, I focused on ways the application could help provide users with more confidence prior to cutting.',
                "Pathing Scenario: Paths are created to tell the machine when and where to cut... By using 3D, the user can actually see what the object will look like after being cut, the paths are easier to understand since it can display depth and it's a more scalable solution... Material Setup Scenario: Machines need to know what is being cut so it can adjust the pressure settings accordingly. This scenario provided a perfect opportunity to allow the user to see a 3D representation of the final cut...",
                'Validation Scenario: Users can perform the same tasks all day so its important to prevent complacency. By validating, it could help users spot issues quickly... Simulation Scenario: Providing users the ability to see a simulation of the cut could also help provide more confidence. Conclusion: At the time of working on this, OMAX did not want their competitors to know they were re-designing their applications... To validate my work, I used internal people who were more advanced users.',
                'The two primary applications are Layout and Make. Challenge: In Manufacturing each facility can have uniquely different requirements and/or processes in place... The applications were decoupled in a way that allowed third party software to be used in different scenarios. Many larger facilities were able to take advantage of this while smaller ones were not, thus, creating an experience that required the use of multiple applications to complete a cut. The challenge was to create an experience that connected the applications together under a single experience without disrupting the experience of either case above...',
                'Through wire-framing, I came up with the concept of having a bar at the top of the desktop that is always visible. This bar would primarily focus on the machine it controlled but it would also provide a launchpad into OMAX applications... Prior to this project, I created several diagrams that laid out all the features, objects, and actions of the existing applications. I was able to reference those as I added features to the bar...',
                'Next, I looked at how the bar would interact with opened applications. UWP was planning to come out with a new tab UI so I used that as a way to contain all OMAX applications. Any third-party application would be a normal floating window. Next, I looked at how the bar would change to expose a cut in progress. By providing another bar, below the main one, this could show details of the cut while allowing the user to continue working within other applications. Finally, I turned the wire-frames into high-fidelity wire-frames...',
                "Since I also had to build the UI using UWP, Unity, and C#, I had to also do a little research to know whether or not the bar could be done. I knew WPF could handle the bar but I found out that UWP would not be able to since, at the time, it didn't allow full customization of the window. This presented a challenge but at the least, the bar could be built using WPF, while the rest used UWP.",
                'A benefit to having no experience with a particular product is that I come in with a fresh eye and can think outside the box... Reusable Parts: One thing I noticed when I looked at the different things people would cut is that a lot of what they cut, could have been broken out into reusable parts... Drawing Templates: There are cases where parts of drawings could be reused in other drawings... Problem: There is no way to create re-usable drawings that can be added to existing drawings. Solution: Provide a tool that allows users to create and re-usable drawings and to identify areas where the user can import other drawing templates into it.',
                "Pattern Maker App: Users typically create their patterns in an app like illustrator but there is no way to see or visualize how it might look after being cut. The pattern cannot be reused once it's sized to fit the material. Solution: Provide a tool that gives user the ability to import or draw generic patterns that can be scaled and applied to any drawing template. Responsive Drawings: Problem: If an existing drawing needed to be resized for a new client, to do this would require a lot of work. Solution: Inspired by iOS constraints (at the time) provide users the ability to identify how a drawing can be resized by using constraints. Mobile Controls: Provide users with the ability to control and setup the machine with mobile devices.",
            ],
        },
        {
            company: 'AudienceScience',
            location: {
                city: 'Bellevue',
                state: 'WA',
                zip: '98004',
                street: '1120 112th Avenue NE Suite 400',
            },
            phone: '(425) 201-3900',
            title: 'UI Developer & Principal Designer (Product Technologist)',
            startDate: new Date(2012, 4, 1),
            endDate: new Date(2017, 4, 1),
            contacts: [],
            responsibilitiesSummary:
                'Architected user interfaces, built front-end script controls, and managed agile design workflows for a massive global SaaS ad-automation suite.',
            resumeBullets: [
                'Designed and hand-developed single-page interface modules using Backbone.js model/view frameworks, HTML, CSS, and native JavaScript.',
                'Coded scalable large-scale testing prototypes using the MEAN stack, deploying custom data mockups and indexing strategies across millions of data rows.',
                'Engineered an information architecture taxonomy that mapped complex campaign structures, decreasing user data input fields via a top-down inheritance template rule.',
                'Sustained extreme production delivery targets as the single central designer coordinating output specifications for 12 to 15 concurrent web programmers.',
                'Sourced, vetted, and contracted an outside development firm and design helpers, liquidating a severe workflow backlog two weeks ahead of schedule.',
                'Coordinated agile development tracking, cross-location sprint planning, and daily scrum checkpoints across distributed engineering teams in Ukraine, Germany, and Boston.',
            ],
            userStories: [
                'In 2012, I was assigned to be a UI Developer on the segment management application. Although developing was my first responsibility, I had been given the additional task of redesigning the user experience for the application. I worked with one other UI developer on this project. We decided that we would build a single page application using backbonejs. My primary responsibility was to create all the UI controls. That meant creating all the models and views needed that met the requirements for the UI. That also included me building all the HTML, CSS, and Javascript functionality for the UI controls.',
                "Since I was the designer, I didn't need any specs or requirements to begin working on the UI. About 70% of the UI had been designed while I was developing it. I think I had a total of three PhotoShop files related to the design of this app. I faced many challenges while building the segment manager application. I would say the most challenging one was having to learn new scripting libraries as we went along. I made a lot of mistakes, but I was able to learn from them and keep moving forward. In the end, the UI turned out to be pretty good. The application shipped in 2013 and is still being used till this day.",
                'By the time Segment Manager finished, we had lost our other designer who was working on the Campaign Management application. I took on his work and began to think of ways to bring both applications together under a single user experience. Since this concept was challenging for many to grasp, I decided to use prototyping as a means of testing its validity. I decided to use the MEAN stack. Once the design was far enough along, I began my MEAN stack app... Later on, I used some node modules that converted our CSV reports and JSON. That generated millions of rows of data--where I learned the importance of indexing pretty quickly.',
                'Once the data problem was solved, I was able to build UI rapidly. The prototype was very useful in helping the company decided to move forward with building a single application that managed both segments and campaigns. I learned a lot during the prototyping phase. I got some good user feedback and was ready to fine tune the UI... A lot of time went into understanding and accounting for all the use cases and coming up with a taxonomy that would work.',
                'There are well over 100 inputs required for a campaign to be valid and completed. A campaign comprises of entities like budget groups, line items, and creatives. Users, who create campaigns, typically add several budget groups and line items. In doing so, the input count can go up into the hundreds. An average campaign contains about 3 budget groups, 12 line items, and 4 creatives. The challenge in simplifying the application all fell on reducing the number of inputs a user had to fill out. One thing that was very common was that many inputs in the budget groups and line items were the same...',
                'A campaign belongs to a brand. A brand belongs to an advertiser, and an advertiser belongs to a client. Instead of making the user duplicating items, we discovered we could place many of the required inputs to the brand level. Essentially the brand became a template for the campaign. This reduced the number of inputs needed considerably. Now, information can be inherited by the brand all the way down to the creative. Users only need to change inputs that differentiate that entity from others. I chose to highlight this small part of the app because it was the most important change that benefited the user. Also, it has nothing to do with actual photoshop/illustrator design work. It is a good example of how design is much more than a beautiful picture.',
                'This application was one of the largest I had ever worked on. At one point, I had to bring in a couple of designers to help me get caught up... As it sits today, I am the only designer working with 12 web developers... The team of UI developers the company hired, were in Ukraine and we also had to some in Germany and Boston. I coordinated the sprint planning and scrum meetings with them while creating the user experience and keeping 3 designers busy.',
            ],
        },
        {
            company: 'ValueAppeal',
            location: {
                city: 'Seattle',
                state: 'WA',
                zip: '98101',
                street: '1325 4th Ave',
            },
            phone: 'Not Provided',
            title: 'UI Developer & Principal Designer (Product Technologist)',
            startDate: new Date(2011, 5, 1),
            endDate: new Date(2012, 6, 1),
            contacts: [],
            responsibilitiesSummary:
                'Executed front-end development and core layout redesigns for web-based property tax evaluation software.',
            resumeBullets: [
                'Engineered a fully operational live code product prototype within three weeks, working directly from a basic five-column spreadsheet requirement list.',
                'Developed full-stack web elements utilizing the Microsoft .NET framework, C#, HTML, CSS, and jQuery scripts.',
                'Collaborated with core engineering staff to iterate prototype code cleanly into scalable, production-ready release software.',
                'Refactored high-traffic consumer landing pages to reduce user friction, leveraging Google Analytics data to measure verified gains in conversion metrics.',
                "Executed search engine optimization (SEO) tactics on structural copy, moving the company's rank for primary target keywords from Google page 24 up into the top 10 results.",
            ],
            userStories: [
                'In 2011 I was hired at ValueAppeal to be a UI Developer and UX Designer. I started out by working on the existing website where I had to redesign a few pages... Everything ran on the .NET framework. That was an easy transition for me to make, given that I had just left Microsoft after 11 years... Not long after being hired I was asked to think about an application that would allow tax professionals to find and manage property owners whose property was overassessed. If I remember correctly, I was given a spreadsheet with a few columns that outlined about five features. Within a few weeks, I had a working prototype of this new product up and running.',
                "I typically don't need a lot of information to get started on a project. i'm able to generate ideas and add value to a product without a lot of hand-holding. My mind is like an idea factory. The great thing about that is that I can take an idea, design it, and then build it all on my own. After getting the live prototype working, we all collaborated further and ended up creating a pretty slick product. I think it's important to note that many of my initial ideas were expanded upon by other team members. They also added new ideas of their own and together we built and shipped the final product. Because I was able to prototype in a live environment, we were able to make changes and adjustments to the UI rapidly. The prototype code was cleaned up along the way, and by the end became shippable code. The final product launched in 2012.",
            ],
        },
        {
            company: 'Microsoft',
            location: {
                city: 'Redmond',
                state: 'WA',
                zip: '98052',
                street: 'One Microsoft Way',
            },
            phone: '(800) 367-2884',
            title: 'UX Designer & UI Developer (Product Technologist)',
            startDate: new Date(2000, 6, 1),
            endDate: new Date(2011, 5, 1),
            contacts: [
                {
                    name: 'U.S. Verifications',
                    title: 'The Work Number Group',
                    contactMethod: '800-367-2884',
                },
            ],
            subTeams: [
                {
                    name: 'HealthVault',
                    startDate: new Date(2008, 1, 1), //estimated
                    endDate: new Date(2011, 1, 1), //estimated
                    summary:
                        'Elected as the first dedicated UI programmer for a new 20-member healthcare storage incubation division. Built production .NET server pages, front-end scripting controls, and high-fidelity interface models. Designed the structural layout for HealthVault Connection Center, cross-training in Windows Forms and high-realism WPF code to pass working software components to backend engineers. Independently developed and deployed Ghost, a native WPF overlay utility that superimposed layout files directly over functional builds to eliminate manual redlining from team sprints. Promptly stepped into critical production gaps when the lead web developer separated, accelerating site updates by translating flat wireframe images straight into code without dependent documentation.',
                },
                {
                    name: 'Office Live',
                    startDate: new Date(2004, 1, 1), //estimated
                    endDate: new Date(2008, 1, 1), //estimated
                    summary:
                        'Served as a key founding architect on a tight 8-member core proof-of-concept incubation division that converted standard SharePoint setups into scalable public business hosting platforms. Gathered requirements directly from codebase analysis and reverse-engineered source components. Hand-developed the layout infrastructure for the core V1 launch, including web engines and 20 integrated SharePoint apps. Coded a custom C# script hooking directly into the Photoshop DLL API, looping style tables to automatically batch-generate over 800,000 distinct theme asset combinations, eliminating thousands of hours of manual asset slicing. Awarded the prestigious Microsoft Gold Star recognition (granted to the top 3% of performance groups) for delivery alignment.',
                },
                {
                    name: 'bCentral',
                    startDate: new Date(2000, 1, 1), //estimated
                    endDate: new Date(2004, 1, 1), //estimated
                    summary:
                        'Hired initially to support online content layout and marketing assets. Proactively crossed technical divides into engineering when specialized backend programmers faced front-end layout friction. Independently mastered HTML, CSS, native JavaScript, ASP, and early .NET frameworks to implement original designs directly into internal content management engines. Maintained strict architectural componentization rules, reinforcing user interface consistency rules across early online business platform updates.',
                },
            ],
            responsibilitiesSummary:
                'Served across multiple internal startup groups (bCentral, Office Live, HealthVault) as a high-adaptability designer and frontend engineer, building proofs-of-concept and production system layouts.',
            resumeBullets: [
                'Hand-developed front-end .NET server controls, web pages, and reusable UI blocks for high-visibility V1 software releases.',
                "Engineered a native Windows WPF application asset (\'Ghost\') that superimposed design files directly over executing software code, eliminating manual redlining workflows.",
                'Coded high-fidelity, interactive prototypes in WPF and Windows Forms that accurately mimicked true application state, deployed directly to enhance usability research studies.',
                "Authored an automated C# script that pulled via Photoshop's native DLL API to auto-compile over 800,000 distinct visual web theme variants, saving major manual production design costs.",
                'Pioneered a dual-track designer-builder delivery model, independently updating production sites straight from layout reference comps to bypass spec-sheet dependencies.',
                'Awarded the selective internal Microsoft Gold Star honor (top 3% metric) for cross-functional deployment alignment during the launch of the Office Live infrastructure.',
            ],
            userStories: [
                "I was originally hired as a designer. I would design small components on the website and hand them over to a developer to develop. This process got frustrating because some of the developers wouldn't implement my designs according to my specs. So, in order to implement my own designs, I began learning HTML & CSS. Once I got that down I began learning ASP and JavaScript. Eventually, I got into .NET and C# but most of my time was spent developing what I designed using ASP, JavaScript, HTML & CSS. All of the developers on our team were hardcore backend devs. They hated doing HTML and CSS, so I jumped in to help out. I began designing my UI and then building it using HTML and CSS. That went over so well with the developers that they started tossing ASP and JavaScript at me. I soon started build my components and adding them to the content management system. Learned how to design and develop around Content Management systems. This requires a lot of componentization and re-use of designs. It’s also where I learned the fundamental rule about consistency and how it matters when it comes to UI.",
                "Someone at bCentral thought it would be interesting to turn SharePoint into a web hosting platform. I believe it was our GPM who thought of it and assigned me and another dev to work on a proof of concept. At the time, I was a designer, so my role was to design the user experience. Very quickly it became evident that I needed to more than just design to get this to work. Since there was only two of us, I had to gather all the user requirements myself. As If that weren't enough, I had to learn SharePoint inside and out. Luck would have it that I had just started to grasp ASP, Javascript, HTML and CSS. Instead of reading a book about SharePoint, I opened up the source code. At that moment I had inadvertently added UI Developer to my list roles. Within a few months, we were able to develop a proof of concept. We showed this to some higher-ups and got the approval to continue working on it. We must have gotten some budget as well. The team of two just became an official team of six. To kick this off, the six of us moved out of the main campus in Redmond to an office in downtown Seattle. We brought on a program manager that helped relieve the load from me to gather requirements. By this time, we had already had it working, and we were working on the tool that would allow a user to customize their website. The website tool was fascinating to me. We had an opportunity to try some cool things out. First of all, we did not want the website to look anything like a SharePoint site. This was a challenge because how could I give users a bunch of theme options when I was the only designer. That was too much work, but I had an idea. Photoshop provided an API that allowed me to write C# scripts that could create templates for me. I took the template idea a step further and decided to try creating UI components that could be modified by the scripted API. Once it knew it could work, we hired a contractor to come up with about ten different UI templates in photoshop. Within each template were several UI components. Things like buttons, images, backgrounds, gradients and so on. Next, I needed to come up with some color palettes. I think I created around 50 with each palette containing about four colors. The pallets were the key to what would guide the script through the template generating process. It created the loop needed to produce all the components in several different colors. Once the script was complete, it created many thousands of possible theme variations. I think it took the script about 30 hours to run and complete. It was a hog, but it worked! I chose to write about the PhotoShop script because it highlights my ability to think outside the box in order to solve a problem. I can't imagine how many designers it would have taken to prepare all the images by hand. Not too mention, how much it would have cost the company. In the end, we became OfficeLive when the GM responsible for starting OfficeLive, found out about us and added us to his team. At the time, it was just him and another program manager. With the addition of us, Office Live started out with only eight people. It then grew into a significantly large division.",
                "I started at HealthVault as a UI Developer in 2008. I was the first UI Developer hired and was also one of the first 20 members to join the HealthVault organization. My primary responsibility was to build all the UI for the new HealthVault application. HealthVault is the place where I started using my development and design skills to build prototypes. Within the first year, I was building elaborate prototypes that were used in focus groups and usability studies. During this time, I was also developing the first version of the application. We had hired on a couple more web developers, so that freed me up to do more prototyping work since this was proving to be valuable at the time. Eventually, my role changed to become more of a design role. In 2009, I became the primary designer for HealthVault Connection Center. A desktop app used to connect devices with their HealthVault Account. It was at this time I got sick of giving developers redlines and specs that showed them how the application should look and work. While I was designing, I began building an application called Ghost. A WPF application that had the sole purpose of eliminating red-lines from my workflow. I called it Ghost because the main feature was to superimpose an image on top of the developed UI. I began to take prototyping to a whole new level. I found WPF to be a very efficient way to prototype desktop apps, so I began building a version of the Connection Center application in WPF. It looked so real that it fooled developers who were working on the product. They thought I had built the real product. These realistic prototypes began finding their way into usability studies. Potential users were now able to get a \"real\" feel for how the application worked. Of all the things I could talk about with HealthVault, I bring up the prototyping because, in hindsight, I can see the value in having realistic prototypes. They were unheard of at this time. Designers were taught to use images or wireframe flows that showed a UI flow. I was showing a new way of doing this, but it didn't come without criticism or skepticism. At the end of my time at HealthVault, I switched back to development. That was a challenge because, by this period, there were hundreds of people in the organization. Most of them only knew me as a designer. Even though I had built some pretty amazing prototypes, I was still not seen as someone who could also develop. My opportunity came when the primary UI developer decided to leave. The other developers, I started with, moved up to do backend work. It was at this time I asked the Development Manager to give me a quick shot at updating the website. He allowed it, and I was not only able to prove myself, but I was also a lot faster than the other developer because of my design skills. I didn't require a ton of specs on how something should work or behave. Designers could give me an image and just tell me what they wanted rather than writing it down. They also loved it because they didn't need to give me redlines. I was using Ghost! Although I wouldn't realize it for years to come, it was at this time that I bridged the gap between design and development. I was faster than hardcore Javascript, HTML, & CSS developers because I didn't have any of the issues present in a structure where developers and designers are on different teams.",
            ],
        },
        {
            company: 'Urban Earth',
            location: {
                city: 'Seattle',
                state: 'WA',
                zip: 'Not Provided',
                street: 'Not Provided',
            },
            phone: 'Not Provided',
            title: 'UX Designer',
            startDate: new Date(1999, 7, 1),
            endDate: new Date(2000, 6, 1),
            contacts: [],
            responsibilitiesSummary:
                'Executed comprehensive user interface layouts and digital media assets for an early e-commerce startup portal.',
            resumeBullets: [
                'Sourced as an initial technical volunteer, quickly advancing into a full-time core design staff position based on output value.',
                'Produced comprehensive layout designs covering approximately 100 distinct production web pages.',
                'Created, formatted, and optimized over 1,000 unique digital images and brand assets for web publishing engines.',
                'Executed product photography workflows and structured layout drafts for physical national print magazine advertisements.',
            ],
            userStories: [
                'Started as a volunteer to gain experience and was hired on within a short period of time. I was responsible for the overall designing of the web and e-commerce site. Redesigned the website, photographed products and designed marketing material for magazine ad... While there, I designed about 100 web pages and created roughly 1,000 online images.',
            ],
        },
    ],
    volunteerWork: [
        {
            organization: 'Woodworking Warriors',
            location: {
                city: 'Tipton',
                state: 'MI',
                zip: '49287',
                street: '2821 M-50',
            },
            website: 'woodworkingforwarriors.org',
            title: 'Member of the Board of Trustees',
            startDate: new Date(2024, 0, 1),
            endDate: new Date(2025, 0, 1),
            contacts: [
                {
                    name: 'John Abbey',
                    title: 'President',
                    contactMethod: 'jabbey24@gmail.com',
                },
                {
                    name: 'Steve McCarroll',
                    title: 'Vice President',
                    contactMethod: 'Via Org',
                },
                {
                    name: 'Matt Roback',
                    title: 'VP of Operations',
                    contactMethod: 'Via Org',
                },
                {
                    name: 'Craig Courter',
                    title: 'Treasurer',
                    contactMethod: 'courterc@gmail.com',
                },
            ],
            summary:
                'Served on the executive board, providing leadership for facility setups and technical woodworking support for veteran recovery programs.',
            bullets: [
                "Provided hands-on structural layout and installation coordination to establish the organization's initial main machinery workshop.",
                'Taught baseline safety procedures and equipment operational practices to veterans transitioning from specialty court mentoring groups.',
            ],
            userStories: [
                "The idea came when I kept bumping into things as I transferred my wood parts from the storage unit at the school to the workshop. Especially when walking through doors I would always bump into things. So I looked online for some solutions but no corner protectors covered the thickness range needed. I started developing the concept and using the 3D printer to verify solutions and had gone through many iterations before finalizing on that one. I came up with the name, designed the logo and brand. I tend to think of how to make things that are modular. Even when designing software apps it's like building a component that can just plugin to the system... the end result this one thing could protect corners, be used to elevate wood when finishing, can also be used to secure corners while trying to glue parts together, and it all stacks nicely making them easy to store. It could also be used as a way to sticker wood... allows airflow between stacked wood. I even went as far as designing the packaging and how it could be presented on a shelf or someplace in a store... I didn't have the money to mass produce so I just decided to put it up on bambu labs makers world [around April 10, 2024]... the delay between completing and uploading the file was because I did research many different ways to try and manufacture it. In the end, it was a niche product and I didn't want to risk investing too much money into it.",
                'I use technology a lot during that class which gave me a leg up in some areas. Especially my ability to 3D model things. I also had a Bambu Lab 3D printer. I made many jigs and tools that helped make some processes go much easier and more efficient. One example is while wood turning, I had a 3D template of the leg (inverted) so while I was chiseling and it was spinning, i could use that 3D printed part to make sure my curves matched.',
            ],
        },
        {
            organization: 'Bay City Vets (Bay Veterans Foundation)',
            location: {
                city: 'Bay City',
                state: 'MI',
                zip: 'Not Provided',
                street: 'Not Provided',
            },
            website: 'bayveterans.org',
            title: 'Facility Volunteer',
            startDate: new Date(2023, 0, 1),
            endDate: new Date(2024, 0, 1),
            contacts: [
                {
                    name: 'Keith Markstrom',
                    title: 'President',
                    contactMethod: 'kdmark46@gmail.com',
                },
                {
                    name: 'Michael A. Jamrog',
                    title: 'Treasurer',
                    contactMethod: 'mjamrog2@chartermi.net',
                },
            ],
            summary:
                'Maintained daily morning cleanliness and provided general support across community-based veteran program operations.',
            bullets: [
                'Sustained highly consistent morning facility cleaning schedules to keep common areas presentable for daily operations.',
                'Assisted team coordinators with physical organization tasks on specialized community service assignments.',
            ],
            userStories: [],
        },
    ],
    references: [
        {
            name: 'Michael Saldana',
            phone: 'Not Provided',
            email: 'Mikeysaldana01@icloud.com',
            relationship:
                'Professional Reference / Co-worker at Palm Aire Country Club',
        },
    ],
    thinkingAndProblemApproach: {
        ecosystemMap: {
            title: 'Holistic Product Cognition & Problem-Solving Flow',
            asciiFlowDiagram:
                '[SYSTEM BOUNDARIES] -> [EMPATHIC SIMULATION] -> [GAP EXTRACTION] -> [MODULAR BLUEPRINTING] -> [LIVE PROTOTYPE] -> [DEPLOYMENT]',
            nodes: [
                {
                    label: 'System Boundaries & Ecosystem',
                    transitionsTo: ['Empathic Simulation', 'Gap Extraction'],
                },
                {
                    label: 'Empathic Simulation',
                    transitionsTo: ['Anomaly & Gap Extraction'],
                },
                {
                    label: 'Anomaly & Gap Extraction',
                    transitionsTo: ['Modular Componentization'],
                },
                {
                    label: 'Modular Componentization',
                    transitionsTo: ['Functional Wireframes'],
                },
                {
                    label: 'Functional Wireframes',
                    transitionsTo: ['High-Fidelity Live Code'],
                },
                {
                    label: 'High-Fidelity Live Code',
                    transitionsTo: ['Systemic Deployment'],
                },
            ],
        },
        architecturalPillars: [
            {
                id: 'dual_engine_processing',
                title: 'Dual-Engine Cognitive Processing',
                tagline: 'The Technologist Split',
                coreParadigm:
                    'Simultaneous execution of aesthetic form and functional architecture, processing visual layout hierarchy alongside its underlying data lineage as a single integrated stream.',
                manifestationParagraphs: [
                    'Your mind does not treat design and engineering as disconnected sequential tasks. Where an engineer sees flat image files and a graphic designer sees static art boards, your cognitive layout rules immediately bridge both worlds.',
                    "When analyzing a product feature, you concurrently map the visual layout (Figma/Photoshop), the structural framework (HTML/XAML), and the reactive program states (JavaScript/C#). This eliminates the translation gaps and 'redlining' cycles that stall traditional development teams, allowing you to build production-ready files straight out of raw conceptual requirements.",
                ],
                realWorldProofPoints: [
                    {
                        context: 'Microsoft',
                        action: 'Bridged the gap between backend engineers and design by implementing your own visual layouts using ASP, JavaScript, HTML, and CSS directly into the underlying Content Management System.',
                    },
                    {
                        context: 'Ascendum Solutions',
                        action: 'Bypassed architectural communication blocks on a high-density Electronic Health Records (EHR) system by independently translating abstract requirements straight into functional web interface shells, giving developers concrete controls to hook into backend databases.',
                    },
                ],
            },
            {
                id: 'empathic_simulation',
                title: 'Deep-State Empathic Simulation',
                tagline: 'User-Shoes Immersion',
                coreParadigm:
                    "Active, immersive simulation of an operator's physical workspace, cognitive limits, and focus variables rather than passive user research or analytics observation.",
                manifestationParagraphs: [
                    'You isolate user friction by physically submerging yourself into the target operational workspace. This allows you to experience the precise stresses, timing constraints, and physical environmental factors that a desk-bound analyst completely misses.',
                    "Your mind meticulously traces how a user's eyes selectively gather layout data under pressure. You use these findings to remove low-leverage visual noise and reposition high-priority controls directly adjacent to active real-time workspaces.",
                ],
                realWorldProofPoints: [
                    {
                        context: 'OMAX Waterjet Systems',
                        action: 'Physically learned to operate heavy industrial cutting machinery on the machine shop floor to capture the real-world safety constraints, operational anxiety, and visual tracking requirements of the machinists.',
                    },
                    {
                        context: 'DISCUS Aerospace & Defense',
                        action: 'Sat directly beside domain operators to map how beginners struggle with manufacturing jargon, leading to a wireframe strategy that categorized features into clean primary, secondary, and tertiary context levels.',
                    },
                    {
                        context: 'Ascendum Solutions',
                        action: 'Mentally stood in the chaotic environment of healthcare workers to map out how doctors interact with medical records under stress, isolating layout bottlenecks to design an Electronic Health Records (EHR) screen that prevented clinician alert fatigue.',
                    },
                ],
            },
            {
                id: 'macro_to_micro_taxonomy',
                title: 'Macro-to-Micro Taxonomy Topography',
                tagline: 'Ecosystem Structural Blueprinting',
                coreParadigm:
                    'The capacity to carry a massive, multi-tiered enterprise product vision in active memory and decompose it into highly structured, intuitive relational data hierarchies.',
                manifestationParagraphs: [
                    'You possess an innate ability to look at unstructured or messy application workflows and isolate the overarching system patterns hidden underneath.',
                    'By translating chaotic workflows into explicit semantic frameworks, you can leverage inheritance models and data templates. This allows you to streamline user data entry paths and significantly drop configuration friction without forcing deep backend database updates.',
                ],
                realWorldProofPoints: [
                    {
                        context: 'AudienceScience SaaS Suite',
                        action: 'Mapped an inheritance workflow across global advertising taxonomy tiers (Client to Brand to Campaign), automatically distributing down matching rules and reducing hundreds of repetitive user data input fields.',
                    },
                    {
                        context: 'Ascendum Solutions',
                        action: 'Held the entire multi-layered vision of an enterprise Electronic Health Records (EHR) system in active memory, mapping complex clinical workflows and compliance requirements into clean, modular data relationships that scaled across different hospital roles.',
                    },
                ],
            },
            {
                id: 'radical_automation',
                title: 'Radical Automation & Creative Optimization',
                tagline: 'Engineering Systemic Leverage',
                coreParadigm:
                    'An absolute intolerance for repetitive manual tasks, defaulting instantly to creating programmatic automation engines whenever encountering resource bounds.',
                manifestationParagraphs: [
                    'Your problem-solving model automatically rejects brute-force physical or creative output. When faced with an immediate production wall, you use custom code hooks to bypass manual labor.',
                    'You view broken operational landscapes or a lack of documentation not as a project roadblock, but as a clean slate to build background automation utilities that maintain strict accuracy standards without human intervention.',
                ],
                realWorldProofPoints: [
                    {
                        context: 'Microsoft Office Live Incubation',
                        action: 'Authored an automated C# script that pulled from the Photoshop DLL API to cycle layout components and color boards, automatically batch-compiling over 800,000 unique theme assets over a 30-hour machine run.',
                    },
                    {
                        context: 'Palm Aire Country Club',
                        action: 'Engineered a task-management app proof-of-concept using coordinate tracking and geographic boundaries, turning raw smartphone photo metadata into automated, typing-free location reports on the course.',
                    },
                ],
            },
            {
                id: 'functional_prototyping',
                title: 'High-Fidelity Functional Prototyping',
                tagline: 'Validation Over Explanation',
                coreParadigm:
                    'Utilizing highly responsive, live-code software simulations as the primary mechanism for concept proof, requirement gathering, and stakeholder consensus.',
                manifestationParagraphs: [
                    'You view text documentation and static layout drawings as weak communication channels that foster team misunderstandings. Your mind leverages interactive prototypes as a reliable, live playground for project testing.',
                    'You build highly polished, data-driven code prototypes within condensed timeframes. These environments are engineered so cleanly that they routinely convince engineers and stakeholders they are looking at production code, allowing you to capture high-value usability data early.',
                ],
                realWorldProofPoints: [
                    {
                        context: 'Microsoft HealthVault',
                        action: "Independently built 'Ghost', a custom native WPF overlay software, and created fully interactive application mockups that transformed user focus groups and eliminated manual UI spec sheet redlining.",
                    },
                    {
                        context: 'ValueAppeal Property Tax Platform',
                        action: 'Transformed a raw five-column data spreadsheet into a fully functional live code prototype in under three weeks, which was cleanly updated into the final shippable software release.',
                    },
                    {
                        context: 'Ascendum Solutions',
                        action: 'Translated high-density clinical specifications directly into highly interactive web mockups, eliminating miscommunications and creating an optimized workflow for an offshore team of designers in India to deliver UX components ahead of deadlines.',
                    },
                ],
            },
            {
                id: 'workspace_stabilization',
                title: 'Fragmented Environment Stabilization',
                tagline: 'Rapid Context Triage Protocol',
                coreParadigm:
                    'The implementation of quick visual and structural improvements to stabilize chaotic or completely unguided environments, buying room to systematically build deep, repeatable background systems.',
                manifestationParagraphs: [
                    'When entering an environment completely stripped of documentation, guidelines, or structured handoffs, your mind implements an immediate triage strategy.',
                    'You quickly target high-leverage visible areas to restore a sense of organization and operational flow. This creates an outward baseline of system health, giving you the necessary window to evaluate underlying gaps and build permanent, sustainable workflow routines.',
                ],
                realWorldProofPoints: [
                    {
                        context: 'Palm Aire Country Club',
                        action: 'Independently took charge of an unguided 14-acre landscape area with zero instructional history, systematically mapping missing workflows to successfully manage a historical two-person responsibility solo.',
                    },
                ],
            },
        ],
    },
    innovations: {
        hardwareInventions: [
            {
                title: 'Cornerer (Corner Multitool)',
                tagline: 'Protect your precious wood',
                originStory: [
                    'While moving wood parts between the storage unit and the workshop at school, I kept bumping into things—especially when walking through doorways—which caused damage that required time-consuming fixes later.',
                    'I searched online for pre-made solutions, but no corner protectors on the market covered the wide range of wood thicknesses required for fine woodworking.',
                ],
                initialRequirements: [
                    'Lightweight design',
                    'Support any wood thickness from 1/8in to 4in thick',
                    'Easy to use without complicated adjustments',
                    'High quality and visual appeal',
                    'Compact and easy to store away neatly',
                ],
                extendedFeatures: [
                    'Modular architecture to support multiple shop scenarios',
                    '90-degree corner clamping module for securing joints while glue dries',
                    'Nesting capability to serve as stickers, allowing airflow between stacked wood',
                    'Finishing stand modules (boots) to raise pieces off the bench during coating',
                ],
                developmentProcess: [
                    'Leveraged technical startup experience to establish an immediate proof of concept using simple wood blocks and rubber bands.',
                    'Transitioned into standard 3D modeling software and used a Bambu Lab 3D printer to rapidly iterate through functional designs.',
                    'Engineered mechanical adjustments over a 2-month development cycle, working long hours to resolve slipping and structural force failures.',
                ],
                engineeringChallenges: [
                    'The Teeter-Totter Effect: Discovered that as wood thickness increased, the original flat protector acted as a lever, causing the rubber band force to press down on the wrong spot and launch the guard off the board. Solved this by engineering an internal lip where the corner sat to counter the rotational force.',
                    'Material Slipping: Added custom rubberized padding to the internal faces where the protector met the wood to prevent rotational movement under load.',
                    'Force Scalability: Replaced volatile rubber bands with durable elastic Velcro straps, allowing the unit to dynamically clamp profiles from 0.75in to 4in without manual strap reconfiguration.',
                ],
                productOutcomes: [
                    'Successfully completed and fully field-tested functional, modular working prototypes.',
                    'Executed complete branding, logo creation, and retail display design concepts.',
                    'Replaced the strap setup with custom components and opened the side attachment hole to house the structural 90-degree clamp block.',
                ],
                designPhilosophy:
                    'Approached the hardware development precisely like software engineering—building a single, highly componentized base control that accepts modular plug-ins to solve a cluster of workflow issues without adding system clutter.',
                marketStrategy: {
                    brandingAndIdentity:
                        'Branded as the Corner Multitool for Fine Woodworking with standard geometric lines and a prominent integrated X visual logo.',
                    packagingConcept:
                        'Designed a vertical, shelf-ready tower display kit holding a baseline pack of 32 protectors (enough to secure 4 complete boards), short straps, long straps, and free STL download files for replacement components.',
                    pricingAnalysis:
                        'Targeted a manufacturing target price point of $30 per baseline kit. However, localized 3D printing production runs forced verified actual production costs over $60 per unit, identifying a fatal margin gap before risking capitalization.',
                },
                currentStatus:
                    "Shelved as a commercial physical product due to high initial injection molding capitalization risks. Released the open-source digital manufacturing files for free to the public on Bambu Lab's MakerWorld.",
            },
            {
                title: '3D-Printed Custom Lathe Templates',
                tagline:
                    'Real-time geometric validation for manual wood turning profiles',
                originStory: [
                    'While completing the formal furniture-making program, achieving exact duplicate accuracy across multiple manually turned table and chair legs was highly repetitive and error-prone using standard callipers.',
                ],
                initialRequirements: [
                    'Instant profile validation while stock is actively spinning on the lathe',
                    'Elimination of manual measurement pauses during stock reduction',
                    'Perfect curvature matching across separate component runs',
                ],
                extendedFeatures: [
                    'Inverted profile gauge matching specific furniture blueprint cuts',
                ],
                developmentProcess: [
                    'Modeled the precise furniture leg geometries inside standard 3D design software.',
                    'Utilized a Bambu Lab 3D printer to fabricate custom rigid, physical check-jigs matching the negative space of the target turnings.',
                ],
                engineeringChallenges: [
                    'Rotational Clearance Verification: Engineered the check-jigs with strict clearance spacing so the builder could safely slide the template over active, spinning wood stock to verify curves without catching the chisel tip or scarring the surface fibers.',
                ],
                productOutcomes: [
                    'Successfully integrated 3D-printed physical templates directly into manual shop workflows, drastically speeding up production consistency for complex turnings like Windsor chair spindles and Shaker table pedestals.',
                ],
                designPhilosophy:
                    'Using rapid desktop fabrication to inject automated precision checks into traditional, analog manufacturing processes.',
                currentStatus:
                    'Maintained as a personal operational method template library.',
            },
        ],
        softwareApplications: [
            {
                title: 'Smith Furniture Design - 3D Configurator Platform',
                tagline:
                    'Online store and interactive product detail tool for on-demand custom manufacturing',
                originStory: [
                    'Custom furniture makers face a thin profit margin when building spec items that may sit in an inventory cache without selling.',
                    'To eliminate the overhead of physical prototype surplus and material waste, I required a digital pipeline to present and customize unbuilt products with absolute visual realism directly to prospective clients.',
                ],
                initialRequirements: [
                    'High-fidelity interactive 3D model viewer optimized fully for standard web and mobile layouts',
                    'Real-time material and component switching mechanics',
                    'Automated, input-free dimension reporting extracted straight from model boundaries',
                ],
                extendedFeatures: [
                    'Contrasting material sub-assignment configurations (e.g., custom walnut pins highlighted against a primary maple base frame)',
                    'Animated explode-implode view states to peel back cabinetry frames and reveal joint assemblies',
                    'Dynamic camera viewport tracking with toggle controls for edge wireframes and technical component highlights',
                ],
                developmentProcess: [
                    'Built the front-end layout shell from scratch using TypeScript, React, and React Router.',
                    'Integrated Three.js and Tween.js to handle the interactive WebGL viewport rendering and fluid element animations.',
                    'Authored high-precision 3D geometries inside Blender, utilizing real-world furniture build dimensions as the hard source parameters.',
                    'Compiled a large personal texture library of high-resolution wood grains (Ash, Birch, Cherry, Hickory, Maple, Oak, Walnut) over a multi-year period to power the material switching engine.',
                    'Deployed the completed custom application framework safely using Vercel hosting infrastructure, connecting domains managed via GoDaddy.',
                ],
                engineeringChallenges: [
                    'CNC Relief Data Thresholds: Attempted to export complex door panel carvings as pure STL files, but the data density crashed local CNC machining software. Solved this by using Blender node logic to convert the 3D geometry into a flattened 2D grayscale displacement height-map, loading it into an intermediary utility to output a compressed, optimized STL file that the CNC unit processed successfully.',
                    'Asset Reusability and Inheritance: Structured the component scripts so that changing the primary drawing automatically allowed the web configuration to inherit previous material and machine parameters, preventing layout duplication across product detail variations.',
                ],
                productOutcomes: [
                    'Launched a live, operational configurator platform demonstrating successful real-time rendering of complex case pieces (such as custom sideboards and desks).',
                    'Eliminated text entry fields by mapping standard dimensions directly from the live 3D bounding boxes.',
                ],
                designPhilosophy:
                    'Automating the commercial pipeline by connecting interactive client customization inputs straight to clean, backend manufacturing specifications.',
                currentStatus:
                    'Active, live technical portfolio asset deployed at smithfurnituredesign.com and sfd-puce.vercel.app.',
            },
            {
                title: 'Smith Furniture Design - Room Scale Model Viewer',
                tagline:
                    'Interactive spatial visualization tool for residential custom interior planning',
                originStory: [
                    'When executing high-end custom furniture commissions, clients and interior designers often struggle to visualize exactly how large-scale installations will occupy their native room layouts.',
                ],
                initialRequirements: [
                    'Accurate digital replication of custom residential room spatial grids',
                    'Interactive placement of custom furniture models inside the virtual environment',
                    'Secure web-based publication for remote client verification loops',
                ],
                extendedFeatures: [
                    'Multi-angle perspective tracking matching real-world view corridors',
                ],
                developmentProcess: [
                    'Traveled directly to client residences to extract complete, absolute dimensional measurements of the target environment.',
                    'Modeled the architectural footprint and room structure inside a digital workspace application layout.',
                    'Placed the custom furniture geometries (e.g., custom poplar bunk bed systems) directly into the mapped virtual room shell.',
                ],
                engineeringChallenges: [
                    'Stakeholder Data Alignment: Designed the online interactive interface specifically to function as a unified communications bridge between the builder, the client, and their professional interior design staff, keeping variables transparent before physical manufacturing began.',
                ],
                productOutcomes: [
                    'Deployed a custom online room configuration tool for a major residential poplar bunk bed commission. The client and interior designer stated they had never seen that level of custom spatial assurance from an independent workshop, securing immediate execution buy-off.',
                ],
                designPhilosophy:
                    'Leveraging precise spatial modeling to validate complex physical assemblies before committing expensive hardwoods or shop hours to a build.',
                currentStatus:
                    'Wound down as a commercial project following a relocation to Florida where tools were placed into long-term storage.',
            },
            {
                title: 'Golf Maintenance App',
                tagline:
                    'A maintenance scheduling application that only requires a single picture to get started',
                originStory: [
                    'Observed severe operational friction while working as a groundskeeper at a private country club operating two 18-hole courses and a clubhouse.',
                    'The course superintendent managed complex maintenance tasks entirely from memory, which frequently failed and caused massive scheduling confusion.',
                    'Identified that existing commercial maintenance logistics software platforms were highly cost-prohibitive and overly data-dense for standard workers to navigate.',
                ],
                initialRequirements: [
                    'Purely lightweight task logging demanding near-zero manual data entry',
                    'A single-photo interface allowing supervisors to review, assess, and dispatch tickets right from a central desk',
                    'A workflow fully independent of language barriers to support non-English-speaking crew members',
                ],
                extendedFeatures: [
                    'Complete automated GIS location hierarchy parsing from image metadata',
                    'Multi-tiered user roles separating administrator, supervisor, and worker tracking spaces',
                    'Recurring task automation rules and background ticket assignment frameworks',
                ],
                developmentProcess: [
                    'Conducted spatial field research by capturing test photos across different zones of the 36-hole golf complex.',
                    'Built a custom location-mapping matrix by defining geometric boundaries inside Google Maps to capture the entire property layout.',
                    'Wrote a backend proof of concept to parse raw GPS metadata from incoming photos and match it directly against the mapped coordinate layers.',
                ],
                engineeringChallenges: [
                    'The Laziness/Interest Hurdle: Accounted for natural reporting friction and user apathy by designing the system so the front-line worker did not need to hold the camera. Pivoted to an automated camera model attached directly to moving utility carts or deployed via scheduled drone tracking flights.',
                    'Data Consistency: Bypassed open text inputs by coding a localized, search-filtered dropdown indexing standard tasks (mow, weed, blow, cleanup). This locked data inputs into uniform variables for accurate sorting, filtering, and priority metrics.',
                ],
                productOutcomes: [
                    'Proved that a single image could automatically map and print out a clean nested tracking string: Palm Aire Country Club > Course 1 > Hole 10 > Fairway.',
                    'Engineered the foundation for a predictive automated verification system, designed to daily cross-examine automated photos and alert supervisors only when visual changes breach a specific variance threshold.',
                ],
                designPhilosophy:
                    'Minimizing user data entry at the collection source by writing background scripts that maximize the informational yield of a single automated data point.',
                currentStatus:
                    'Completed as a validated architectural proof of concept and held as a private systems-design asset.',
            },
            {
                title: 'VeteransCore',
                tagline:
                    'Connecting veterans to resources, communities, and support',
                originStory: [
                    'Developed while serving as a Veteran Peer Mentor and experiencing the severe, time-consuming difficulty of sourcing local auxiliary services.',
                    'Discovered that standard search engine queries return scattered, un-vetted results that fail to map resources by precise geographic boundaries and specific service-delivery causes.',
                    'Noticed that 90% of veteran support organizations replicate the exact same core functional needs: processing donations, managing event listings, and selling support merchandise.',
                ],
                initialRequirements: [
                    'Centralized, cross-promotional directory matching organizations by exact location filters',
                    'Integrated event management and store management sub-modules',
                    'Secure payment processing systems and distinct user account managers',
                ],
                extendedFeatures: [
                    'Integrated volunteer coordination dashboards and fundraiser tracking widgets',
                    'Direct peer-to-peer and org-to-client messaging protocols',
                    'Localized weather almanac widgets to coordinate outdoor community meetups',
                ],
                developmentProcess: [
                    'Automated and distilled standard non-profit administration tasks into a single web presence package.',
                    'Designed high-fidelity layout interfaces and page diagrams mapping out interactive design controls, event publishing modules, and localized vendor registration pipelines.',
                ],
                engineeringChallenges: [
                    'System Fragmentation: Solved the visibility problem for small organizations by engineering a single dashboard that serves as a turnkey, low-overhead web presence, allowing groups with zero technical expertise to manage their contacts, stores, and event reporting under one compliant shell.',
                ],
                productOutcomes: [
                    'Engineered detailed layout configurations and page diagrams mapping out interactive design controls, event publishing modules, and localized vendor registration pipelines.',
                ],
                designPhilosophy:
                    'Consolidating fragmented community services into a standardized, component-driven directory platform that trades layout complexity for clean, structured utility.',
                currentStatus:
                    'Maintained as a fully articulated high-fidelity systems design package.',
            },
        ],
    },
};
