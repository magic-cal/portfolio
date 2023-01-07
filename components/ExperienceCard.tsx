import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import ChipStack from "./ChipStack";
import { ExperienceSummary } from "./data/workExperience";
import { useExpander } from "./hooks/expander";
import { formatDatePeriod } from "./utils/formatters";

export interface ExperienceCardProps {
  experience: ExperienceSummary;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  const item = props.experience;
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" component="h4">
          {item.title}
        </Typography>
        <Typography variant="h5" component="h5" color="text.secondary">
          {item.role}
        </Typography>
        <Typography color="text.secondary" sx={{ pb: 2 }}>
          {formatDatePeriod(item.startDate, item.endDate)}
        </Typography>
        <ChipStack chips={item.technologies} />

        {item.image && (
          <CardMedia
            component="img"
            height="200"
            image={item.image}
            alt={item.title}
            sx={{ pb: 2 }}
          />
        )}
        <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
