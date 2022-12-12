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
import { ProjectSummary } from "../data/projects";

export interface ProjectSummariesProps {
  projects: ProjectSummary[];
}

export default function ProjectSummaries(props: ProjectSummariesProps) {
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
        {props.projects.map((project) => (
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
                <ChipStack chips={project.technologies} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
