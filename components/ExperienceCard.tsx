import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ChipStack from "./ChipStack";
import { ExperienceSummary } from "./data/workExperience";
import { useExpander } from "./hooks/expander";
import { formatDatePeriod } from "./utils/formatters";

export interface ExperienceCardProps {
  experience: ExperienceSummary;
}

const MIN_BULLET_POINTS = 2;

const getBulletPointList = (points?: string[]) =>
  !points || points.length === 0 ? null : (
    <ul style={{ marginTop: 0 }}>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );

export default function ExperienceCard(props: ExperienceCardProps) {
  const { toggleExpanded, itemsToDisplay: filteredBulletPoints } = useExpander(
    props.experience.bulletPoints ?? [],
    MIN_BULLET_POINTS
  );

  const item = props.experience;
  return (
    <Card onClick={toggleExpanded}>
      <CardContent>
        <Typography variant="h5" component="h5">
          {item.role}
        </Typography>
        <Typography variant="h6" component="h6" color="text.secondary">
          {item.title}
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

        {getBulletPointList(filteredBulletPoints)}
        {(item.bulletPoints?.length ?? 0) > filteredBulletPoints.length && (
          <Typography color="text.secondary" sx={{ textAlign: "center" }}>
            More...
          </Typography>
        )}

        <Typography variant="body1" sx={{ pb: 2 }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
