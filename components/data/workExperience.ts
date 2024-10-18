import { technologies, Technology } from "./technologies";

export type Present = "Present";
export interface ExperienceSummary {
  sequence: number;
  title: string;
  role?: string;
  description?: string;
  bulletPoints?: string[];
  image?: string;
  technologies: Technology[];
  github?: string;
  url?: string;
  startDate?: Date;
  endDate?: Date | Present;
}

export const pwc: ExperienceSummary = {
  sequence: 1,
  title: "PwC UK",
  role: "Full Stack Software Engineer",
  bulletPoints: [
   "Lead developer for PwC global AI extension with 2000+ weekly users (React, TS)",
    "Managed a team of developers, focusing on code quality and efficient feature delivery",
    "Built a scalable platform for democratising internal and third party data (C#, React, TS)",
    "Successfully managed support for critical data feeds (e.g. S&P UK data), applying innovative solutions to prevent service interruptions.",
    "Implemented CI/CD pipelines for automated testing and deployment (Azure, Docker)",
    "Volunteered 200+ hours for company initiatives, including PwC Panto and recruitment events"
  ],
  technologies: [
    technologies.react,
    technologies.typeScript,
    technologies.dotNet,
    technologies.docker,
  ],
  url: "https://www.pwc.co.uk/",
  startDate: new Date("2023-04-17"),
  endDate: "Present",
};

export const premierSystems: ExperienceSummary = {
  sequence: 2,
  title: "Premier Systems",
  role: "Junior Software Engineer",
  bulletPoints: [
    "Developed a large modern web application with Vue, Typescript and C# (.NET 6)",
    "Led Integrations with external services such as Square and EposNow",
    "Created end-to-end solutions, from inception to construction, deployment, and maintenance",
    "Drove product and technical decisions as the key knowledge holder for a standalone PWA",
    "Collaborated closely, cross-discipline, with the small and focused agile team",
    "Represented the company at International events and awards",
  ],
  technologies: [
    technologies.vue,
    technologies.typeScript,
    technologies.dotNet,
    technologies.docker,
    technologies.postgres,
    technologies.gitLab,
  ],
  url: "https://www.premiersystems.co.uk/",
  startDate: new Date("2019-08-01"),
  endDate: new Date("2023-04-17"),
};

const university: ExperienceSummary = {
  sequence: 3,
  title: "University of Portsmouth",
  role: "Computer Science BSc (Hons)",
  bulletPoints: [
    "Graduated as Valedictorian with 1st Class Honours, 4.25 GPA.",
    "Relevant Coursework: Data Structures and Algorithms, Distributed Systems and Security, Security And Cryptography, Discrete Mathematics and Functional Programming, Robotics.",
    "Dissertation: Vue, Node, TypeScript - Managing and Scheduling Vessels for Brewing and Distilling.",
    "Awarded Outstanding Contribution to University Sport Full colours by The Students Union.",
    "Received The British Computer Society’s Best Business Solution Dissertation Award.",
    "President of the University of Portsmouth Gymnastics and Trampolining society.",
  ],
  technologies: [
    technologies.sql,
    technologies.java,
    technologies.python,
    technologies.git,
    technologies.rasPi,
    technologies.arduino,
    technologies.html,
    technologies.css,
  ],
};

const sportingLeagues: ExperienceSummary = {
  sequence: 4,
  title: "British Trampolining & Gymnastics Leagues",
  role: "Technology Officer",
  bulletPoints: [
    "Developed and maintained competition systems and databases for 4,000 team members.",
    "Managed live scoring systems and displays for sporting events: Python, Vue JS, SQL.",
    "Implemented systems to improve manual tasks, reducing pre-competition workload by 60%.",
  ],
  technologies: [
    technologies.php,
    technologies.vue,
    technologies.javaScript,
    technologies.python,
    technologies.sql,
  ],
  url: "https://Sutleague.co.uk",
  startDate: new Date("2018-05-01"),
  endDate: "Present",
};

const technologyAmbassador: ExperienceSummary = {
  sequence: 5,
  title: "University of Portsmouth",
  role: "Technology Ambassador",
  bulletPoints: [
    "Motivated people of all ages at outreach programs and STEM public speaking events.",
    "Collaborated with academic staff and Promoted Science and Technology events",
  ],
  technologies: [technologies.python],
  startDate: new Date("2017-10-01"),
  endDate: new Date("2020-07-01"),
};

const magic: ExperienceSummary = {
  sequence: 6,
  title: "Callum McClure Magician",
  role: "Magician",
  bulletPoints: [
    "Performed at events such as The Royal Variety Performance aftershow party.",
    "Built a professional reputation and networked with clients at business events and functions.",
    "Marketed and promoted with considerable self-determination and motivation.",
    "Negotiated and discussed with clients to secure the best service for their events.",
  ],
  technologies: [
    technologies.python,
    technologies.arduino,
    technologies.vue,
    technologies.threeJs,
  ],

  url: "https://magic-cal.co.uk",
  startDate: new Date("2011-04-01"),
  endDate: "Present",
};

export const workExperience: ExperienceSummary[] = [
  pwc,
  premierSystems,
  sportingLeagues,
  technologyAmbassador,
  magic,
];
export const education: ExperienceSummary[] = [university];

export const experience: ExperienceSummary[] = [
  ...workExperience,
  ...education,
].sort((a, b) => a.sequence - b.sequence);
