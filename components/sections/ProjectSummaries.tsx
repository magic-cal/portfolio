import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ChipStack from "../ChipStack";
import { ProjectSummary } from "../data/projects";
import ExpandButton from "../ExpandButton";
import { useExpander } from "../hooks/expander";
import LinkIconButton from "../LinkIconButton";
import SectionHeader from "../SectionHeader";

export interface ProjectSummariesProps {
  projects: ProjectSummary[];
}

export default function ProjectSummaries(props: ProjectSummariesProps) {
  const minNumberOfProjects = 3;
  const {
    isExpanded,
    toggleExpanded,
    itemsToDisplay: projects,
  } = useExpander(props.projects, minNumberOfProjects);

  return (
    <Box component="div" sx={{ pb: 2 }}>
      <SectionHeader>Projects</SectionHeader>
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
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5" component="h2">
                      {project.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <LinkIconButton link={project.url || project.github} />
                  </Grid>
                </Grid>
                {project.image && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ pb: 2, objectFit: "scale-down" }}
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
          <ExpandButton
            isExpanded={isExpanded}
            toggleExpanded={toggleExpanded}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
