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

export default function About() {
  return (
    <>
      <Divider sx={{ bgcolor: "secondary.dark" }} />
      <Typography variant="h2" component="h2" gutterBottom id="about">
        About
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ pb: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Personal Information
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I&apos;m a software developer based in the UK Currently working
                at Premier Systems - Modernising the brewing and distilling
                industry with a SaaS product BrewMan.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Technologies
              </Typography>
              <Typography variant="body2" color="text.secondary">
                I&apos;m proficient in a wide range of technologies, but
                I&apos;m most comfortable with JavaScript and TypeScript in the
                Front End. I&apos;ve also had experience with C#, Python, Java,
                PHP, and C++ in the past.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
