import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import { Box } from "@mui/system";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";

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

      <main className={styles.main}>
        <h1 className={styles.title}>Callum McClure</h1>
        <h2 className={styles.subtitle}>Software Engineer</h2>
        <Stack direction="row" spacing={1}>
          <Chip
            label="Vue"
            avatar={<Avatar src="/images/vue.svg" alt="Vue Logo" />}
          />
          <Chip
            label="React"
            avatar={<Avatar src="/images/react.svg" alt="React Logo" />}
          />
          <Chip
            label="Node"
            avatar={<Avatar src="/images/node.svg" alt="Node Logo" />}
          />
          <Chip
            label="TypeScript"
            avatar={
              <Avatar src="/images/typescript.svg" alt="TypeScript Logo" />
            }
          />
          <Chip
            label="JavaScript"
            avatar={
              <Avatar src="/images/javascript.svg" alt="JavaScript Logo" />
            }
          />
        </Stack>

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
      </main>
    </div>
  );
};

export default Home;
