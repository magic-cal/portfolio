import { Box, Typography, Grid } from "@mui/material";
import { socialLinks } from "../data/links";

export default function Footer() {
  return (
    <Box
      component="div"
      sx={{ bgcolor: "secondary.main", color: "secondary.contrastText", p: 2 }}
    >
      <Grid container justifyContent="center" spacing={2}>
        {socialLinks.map((link, index) => (
          <Grid item key={index}>
            <Typography variant="body1" component="p" align="center">
              <a href={link.url}>{link.text}</a>
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" component="p" align="center">
        © {new Date().getFullYear()} - Callum McClure
      </Typography>
    </Box>
  );
}
