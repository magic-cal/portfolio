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
import SideBySideLayout from "../sideBySideLayout";
import ContentImageView from "../contentImageView";

const aboutMagic = (
  <>
    <Typography variant="body1" color="text.secondary">
      <p>
        He is also a member of The Magic Circle, and is a professional magician.
        He is the creator of a robot magician&#39;s assistant called Vernon and
        has performed at the Royal Variety after-show party, and on{" "}
        <a href="https://www.bbc.co.uk/news/newsbeat-40847482">BBC News</a>. In
        his spare time, he enjoys playing tennis, developing new technology
        based magic tricks, and exploring new places.
      </p>
    </Typography>
  </>
);

const aboutMe = (
  <>
    <Typography variant="body1" color="text.secondary">
      <p>
        Callum is a Software Engineer and Magician based in the UK. He is
        currently working at{" "}
        <a href="https://premiersystems.com">Premier Systems</a> - Modernising
        the brewing and distilling industry with a SaaS product BrewMan.
      </p>
      <p>
        He is passionate about technology, and has a particular interest in the
        Front end development space. He has experience working with{" "}
        <a href="https://reactjs.org/">React</a>,{" "}
        <a href="https://vuejs.org/">Vue</a>, and{" "}
        <a href="https://nodejs.org/">Node.js</a>.
      </p>{" "}
    </Typography>
  </>
);

const technologies = (
  <>
    <Typography variant="body1" color="text.secondary">
      Callum is proficient in a wide range of languages, but is most comfortable
      with JavaScript and TypeScript in the front and backend, with Vue(TS) as
      the preferred framework for front end. React, C#, Python, Java, and PHP
      are also among a long list of technologies he has worked with both at work
      and in personal projects. He is also proficient in a wide range of tools
      and utilities, including Git, Docker, OpenApi, and GCP. Using and
      maintaining these as part of a CI/CD pipeline, he is able to work on the
      full development lifecycle, from design to deployment.
    </Typography>
  </>
);

export default function About() {
  return (
    <>
      <Divider sx={{ bgcolor: "secondary.dark" }} />
      <Typography variant="h2" component="h2" gutterBottom id="about">
        About
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ pb: 2 }}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            About Callum
          </Typography>
          <ContentImageView
            mainContent={aboutMe}
            imgSrc={"/images/projects/Amber.png"}
            imgAlt={"Callum"}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            Magic
          </Typography>
          <ContentImageView
            inverted={true}
            mainContent={aboutMagic}
            imgSrc={"/images/logos/theMagicCircle.png"}
            imgAlt={"The Magic Circle logo"}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" component="h2">
            Technologies
          </Typography>
          <ContentImageView
            mainContent={technologies}
            imgSrc={"/images/logos/technologies.png"}
            imgAlt={"Technologies"}
          />
        </Grid>
      </Grid>
    </>
  );
}
