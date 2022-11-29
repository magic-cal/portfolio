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
              <ChipStack
                chips={[
                  {
                    label: "Vue",
                    avatar: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
                  },
                  {
                    label: "React",
                    avatar: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                  },
                  {
                    label: "Nuxt.js",
                    avatar: "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg",
                  },
                  {
                    label: "Node.js",
                    avatar:
                      "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
                  },
                  {
                    label: "TypeScript",
                    avatar:
                      "https://cdn.worldvectorlogo.com/logos/typescript.svg",
                  },
                  {
                    label: "JavaScript",
                    avatar:
                      "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
                  },
                ]}
              />
            </Box>
          </div>
        </BackgroundThreeD>

        {/* A section with a picture of me, a short bio and a link to my CV */}
        <p className={styles.description}>
          I am a software engineer based in the UK. I have a passion for
          developing websites and applications. I am currently working at
          Premier Systems Ltd as a Software Engineer
        </p>
        <p className={styles.description}>
          I am a passionate and dedicated software engineer. I am always looking
          to learn new technologies and improve my skills.
        </p>
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
