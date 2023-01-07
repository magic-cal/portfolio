import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import { Box } from "@mui/system";
import { Grid, IconButton } from "@mui/material";
import ChipStack from "../components/ChipStack";
import BackgroundThreeD from "../components/BackgroundThreeD";
import ProjectSummaries from "../components/sections/ProjectSummaries";
import { highlightTechnologies } from "../components/data/technologies";
import { projects } from "../components/data/projects";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import About from "../components/sections/About";
import ContactSection from "../components/sections/ContactSection";
import Experience from "../components/sections/Experience";
import { experience } from "../components/data/workExperience";

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
            <Box component="div" alignItems="center">
              <ChipStack chips={highlightTechnologies} justify="center" />
            </Box>
            <Grid justifyItems="center">
              <Grid item>
                <Link href="#about" scroll={false}>
                  <IconButton aria-label="more" size="large" color="secondary">
                    <ExpandMore fontSize="large" />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </div>
        </BackgroundThreeD>
        <About />
        <ProjectSummaries projects={projects} />
        <Experience workExperience={experience} />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
