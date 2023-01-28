import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ContentImageView from "../ContentImageView";
import { externalLinks } from "../data/links";
import LaptopContentFrame from "../LaptopContentFrame";
import SectionHeader from "../SectionHeader";
import SideBySideLayout from "../SideBySideLayout";
import SectionBase from "./SectionBase";
import { Link } from "@mui/icons-material";

const framedImage = (src: string, alt: string) => (
  <LaptopContentFrame
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: "300px",
    }}
  >
    <div>
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
  </LaptopContentFrame>
);

const aboutMe = (
  <div>
    <Typography variant="h5" component="h2">
      About Callum
    </Typography>
    <Typography color="text.secondary">
      Callum is a Software Engineer and Magician based in the UK. He is
      currently working at{" "}
      <a href="https://premiersystems.com">Premier Systems</a> - Modernising the
      brewing and distilling industry with a SaaS product BrewMan.
    </Typography>
    <Typography color="text.secondary">
      He is passionate about technology, and has a particular interest in the
      Front end development space. He has experience working with{" "}
      <a href="https://reactjs.org/">React</a>,{" "}
      <a href="https://vuejs.org/">Vue</a>, and{" "}
      <a href="https://nodejs.org/">Node.js</a>.
    </Typography>
    <Typography color="text.secondary">
      In his spare time, he enjoys playing tennis, developing new technology
      based magic tricks, and exploring new places.
    </Typography>
  </div>
);

const aboutMagic = (
  <div>
    <Typography variant="h5" component="h2">
      Magic
    </Typography>
    <Typography color="text.secondary">
      Callum is a member of{" "}
      <a href="https://www.themagiccircle.co.uk">The Magic Circle</a>, the
      world&#39;s oldest and most prestigious magic society. His specialty lies
      in performing close-up magic at Weddings, Dinners, Balls and Parties of
      all kinds. Combining classic magic and modern technology his goal is to to
      create unique and engaging experiences. During his decade of performing
      experience, he has performed at the Royal Variety after-show party, and
      for <a href="https://www.bbc.co.uk/news/newsbeat-40847482">BBC News</a>.
    </Typography>
  </div>
);

const technologies = (
  <div>
    <Typography variant="h5" component="h2">
      Technologies
    </Typography>
    <Typography color="text.secondary">
      Callum is proficient in a wide range of languages, but is most comfortable
      with JavaScript and TypeScript in the front and backend, with Vue(TS) as
      the preferred framework for front end. React, C#, Python, Java, and PHP
      are also among a long list of technologies he has worked with both at work
      and in personal projects. He is also proficient in a wide range of tools
      and utilities, including Git, Docker, OpenApi, and GCP. Using and
      maintaining these as part of a CI/CD pipeline, he is able to work on the
      full development lifecycle, from design to deployment.
    </Typography>
  </div>
);

export default function About() {
  return (
    <SectionBase sectionTitle="About">
      <Grid container spacing={2} justifyContent="center" sx={{ pb: 2 }}>
        <Grid item xs={12}>
          <SideBySideLayout
            inverted={true}
            mainContent={aboutMe}
            additionalContent={framedImage(
              "/images/projects/Amber.png",
              "Callum"
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <ContentImageView
            mainContent={aboutMagic}
            imgSrc={"/images/logos/theMagicCircle.png"}
            imgAlt={"The Magic Circle logo"}
          />
        </Grid>
        <Grid item xs={12}>
          <SideBySideLayout
            inverted={true}
            mainContent={technologies}
            additionalContent={framedImage(
              "/images/projects/vscodeScreenshot.png",
              "IDE screenshot"
            )}
          />
        </Grid>

        {/* Center aligned button */}

        <Grid item justifyItems="center" justifySelf="center">
          {/* <Grid item xs={3}> */}
          <Button
            variant="outlined"
            color="secondary"
            href={externalLinks.cv.url}
          >
            View CV
            <Link sx={{ ml: 1 }} />
          </Button>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </SectionBase>
  );
}
