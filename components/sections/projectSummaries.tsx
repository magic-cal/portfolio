import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ChipStack from "../ChipStack";
import AmberImage from "../../public/images/projects/Amber.png";
import Image from "next/image";
import { technologies } from "../data/technologies";

const projects = [
  {
    id: "1",
    title: "Amber - Vessel Scheduler",
    description:
      "A web application for planning and scheduling vessels for breweries and distilleries.",
    image: "/images/projects/Amber.png",
    technologies: [
      technologies.Vue,
      technologies.TypeScript,
      technologies.NodeJs,
      technologies.Express,
      technologies.SQL,
      technologies.Swagger,
    ],
  },
  {
    id: "2",
    title: "The Chase Web app Game",
    description:
      "A web application for playing The Chase game with friends. Live questions are fetched from a Quiz API and answered live with WebSockets.",
    image: null,
    technologies: [
      technologies.Vue,
      technologies.JavaScript,
      technologies.NodeJs,
      technologies.Express,
      technologies.WebSockets,
    ],
  },
  {
    id: "3",
    title: "IBM Subversive",
    description:
      "International competition to highlight security vulnerabilities in every day locations. A small team of 4 created a real shopping center model and a web application to simulate a cyber attacks.",
    image: null,
    technologies: [
      technologies.Python,
      technologies.CPP,
      technologies.Arduino,
      technologies.RasPi,
      technologies.HTML,
      technologies.CSS,
      technologies.JavaScript,
    ],
  },
  {
    id: "4",
    title: "FInsult",
    description:
      "A fun project to identify people in images and generate insults based on their facial expressions.",
    image: null,
    technologies: [
      technologies.JavaScript,
      technologies.NodeJs,
      technologies.Express,
    ],
    github: "https://github.com/up730418/subversive",
  },
];

export default function ProjectSummaries() {
  return (
    // @ts-ignore - type complex
    <Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Projects
      </Typography>
      <Grid
        container
        spacing={2}
        gridTemplateColumns="1fr"
        gridAutoFlow="column"
      >
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {project.title}
                </Typography>
                {project.image && (
                  <CardMedia
                    component="img"
                    height="194"
                    image={project.image}
                    alt={project.title}
                  />
                )}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ pb: 2 }}
                >
                  {project.description}
                </Typography>
                <ChipStack
                  chips={project.technologies}
                  // add padding top
                  sx={{ pt: 4 }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
