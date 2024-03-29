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
import ChipStack from "../ChipStack";
import { externalLinks, socialLinks } from "../data/links";
import { linkToChip } from "../data/linkService";
import SideBySideLayout from "../SideBySideLayout";
import ContactForm from "../ContactForm";
import SectionHeader from "../SectionHeader";
import SectionBase from "./SectionBase";

const contactChips = socialLinks.map(linkToChip);

export default function ContactSection() {
  return (
    <SectionBase sectionTitle="Contact">
      <SideBySideLayout
        additionalContent={
          <Card>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        }
        mainContent={
          <Box component="div" sx={{ pb: 2 }}>
            <Grid container spacing={2} direction="row">
              <Grid item xs={12}>
                <ChipStack chips={contactChips} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" gutterBottom>
                  If you would like to get in touch with me, please send me an
                  email to{" "}
                  <a href="mailto:callum.mcclure98@gmail.com">
                    callum.mcclure98@gmail.com
                  </a>{" "}
                  or find me on{" "}
                  <a href={externalLinks.linkedIn.url}>LinkedIn</a> or{" "}
                  <a href={externalLinks.github.url}>GitHub</a>.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        }
      />
    </SectionBase>
  );
}
