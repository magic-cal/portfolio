import { technologies, Technology } from "./technologies";

export interface ProjectSummary {
  id: string;
  title: string;
  description: string;
  image: string | null;
  technologies: Technology[];
  github?: string;
  url?: string;
}

export const theChase = {
  id: "1",
  title: "The Chase Multiplayer Game",
  description:
    "A web application for playing The Chase game with friends. Live questions are fetched from a Quiz API and answered live with WebSockets.",
  image: "/images/projects/TheChase.png",
  technologies: [
    technologies.Vue,
    technologies.JavaScript,
    technologies.NodeJs,
    technologies.Express,
    technologies.WebSockets,
  ],
};
export const amber = {
  id: "2",
  title: "Amber - Vessel Scheduler",
  description:
    "A web application for planning and scheduling vessels for breweries and distilleries.",
  image: "/images/projects/Amber.png",
  technologies: [
    technologies.Vue,
    technologies.TypeScript,
    technologies.NodeJs,
    technologies.Express,
    technologies.Postgres,
    technologies.Swagger,
  ],
};
export const subversive = {
  id: "3",
  title: "IBM Subversive",
  description:
    "International competition to highlight security vulnerabilities in every day locations. A small team of 4 created a real shopping center model and a web application to simulate a cyber attacks.",
  image: "/images/projects/SubversiveIBM.png",
  technologies: [
    technologies.Python,
    technologies.CPP,
    technologies.Arduino,
    technologies.RasPi,
    technologies.HTML,
    technologies.CSS,
    technologies.JavaScript,
  ],
};
export const finsult = {
  id: "4",
  title: "FInsult",
  description:
    "A fun project to identify people in images and generate insults based on their facial expressions.",
  image: "/images/projects/FInsult.png",
  technologies: [
    technologies.JavaScript,
    technologies.NodeJs,
    technologies.Express,
  ],
  github: "https://github.com/up730418/subversive",
};
export const liveScore = {
  id: "5",
  title: "Live Trampolining Scoreboard",
  description:
    "A live scoreboard that retrieves scores from `swescore` and displays them on a scoreboard in realtime. Scores are collated from many active devices with WebSockets and updated live, stacking the incoming scores. Built to support unreliable internet connections at SUTL events.",
  image: "/images/projects/LiveScore.png",
  technologies: [
    technologies.Vue,
    technologies.TypeScript,
    technologies.NodeJs,
    technologies.Express,
    technologies.SQL,
    technologies.WebSockets,
  ],
};

export const projects: ProjectSummary[] = [
  theChase,
  amber,
  subversive,
  finsult,
  liveScore,
];
