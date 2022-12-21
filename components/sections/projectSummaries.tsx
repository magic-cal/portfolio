import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Button,
} from "@mui/material";
import ChipStack from "../ChipStack";
import { ProjectSummary } from "../data/projects";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useState } from "react";

export interface ProjectSummariesProps {
  projects: ProjectSummary[];
}

export default function ProjectSummaries(props: ProjectSummariesProps) {
  const minNumberOfProjects = 3;
  const [areSummariesExpanded, setAreSummariesExpanded] = useState(false);

  const projects = areSummariesExpanded
    ? props.projects
    : props.projects.slice(0, minNumberOfProjects);

  const toggleExpanded = () => {
    setAreSummariesExpanded(!areSummariesExpanded);
  };

  return (
    <Box sx={{ pb: 2 }}>
      <Divider sx={{ bgcolor: "secondary.dark" }} />
      <Typography variant="h2" component="h2" gutterBottom id="projects">
        Projects
      </Typography>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ pb: 2 }}
      >
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={project.id}
            style={{ display: "flex" }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {project.title}
                </Typography>
                {project.image && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ pb: 2 }}
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
      {/* More button to expand and collapse the extra values */}
      <Grid container justifyContent="center">
        <Grid item>
          <Button
            variant="outlined"
            endIcon={areSummariesExpanded ? <ExpandLess /> : <ExpandMore />}
            onClick={toggleExpanded}
            size="large"
            color="secondary"
          >
            {areSummariesExpanded ? "Less" : "More"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
