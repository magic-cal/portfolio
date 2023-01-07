import { Box, Divider, Grid, Typography } from "@mui/material";
import { ExperienceSummary } from "../data/workExperience";
import ExpandButton from "../ExpandButton";
import ExperienceCard from "../ExperienceCard";
import { useExpander } from "../hooks/expander";
import SectionHeader from "../SectionHeader";

export interface ExperienceProps {
  workExperience: ExperienceSummary[];
}

export default function Experience(props: ExperienceProps) {
  const {
    isExpanded,
    toggleExpanded,
    itemsToDisplay: workExperience,
  } = useExpander(props.workExperience, 3);

  return (
    <Box component="div" sx={{ pb: 2 }}>
      <SectionHeader>Experience</SectionHeader>
      <Grid
        container
        direction="row"
        spacing={2}
        sx={{ pb: 2 }}
        justifyContent="center"
      >
        {workExperience.map((experience) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={experience.title}
            style={{ display: "flex" }}
          >
            <ExperienceCard experience={experience} />
          </Grid>
        ))}
      </Grid>
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
