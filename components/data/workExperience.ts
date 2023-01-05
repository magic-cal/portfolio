import { technologies, Technology } from "./technologies";

export interface ExperienceSummary {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: Technology[];
  github?: string;
  url?: string;
  startDate?: Date;
  endDate?: Date;
}

export const PremierSystems = {
  id: "1",
  title: "Premier Systems",
  description:
  "
  
  "

}
 

export const projects: ProjectSummary[] = [
  theChase,
  amber,
  subversive,
  finsult,
  liveScore,
];
