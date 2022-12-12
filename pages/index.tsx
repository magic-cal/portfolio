import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import ChipStack from "../components/ChipStack";
import BackgroundThreeD from "../components/BackgroundThreeD";
import ProjectSummaries from "../components/sections/projectSummaries";
import { highlightTechnologies } from "../components/data/technologies";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Callum McClure Software Engineer</title>
        <meta
          name="description"
          content="portfolio for Callum McClure Software Engineer"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BackgroundThreeD>
          <div className={styles.main}>
            <h1 className={styles.title}>Callum McClure</h1>
            <h2 className={styles.subtitle}>Software Engineer</h2>
            {/* @TODO: Move clips to a content file */}
            <Box alignItems="center">
              <ChipStack chips={highlightTechnologies} />
            </Box>
          </div>
        </BackgroundThreeD>

        {/* A section with a picture of me, a short bio and a link to my CV */}
        <p className={styles.description}>
          I am a Software engineer who combines a passion magic with a passion
          for technology to create unique and engaging experiences.
        </p>

        <ProjectSummaries />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
};

export default Home;
