import { Box, Divider, Typography } from "@mui/material";

export interface SectionHeaderProps extends React.PropsWithChildren<{}> {}

export default function SectionHeader(props: SectionHeaderProps) {
  return (
    <Box component="div">
      <Divider sx={{ bgcolor: "secondary.dark" }} />
      <Typography variant="h3" component="h3" gutterBottom id="projects">
        {props.children}
      </Typography>
    </Box>
  );
}
