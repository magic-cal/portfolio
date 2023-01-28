import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { PropsWithChildren } from "react";
import ContentImageView from "../ContentImageView";
import { externalLinks } from "../data/links";
import LaptopContentFrame from "../LaptopContentFrame";
import SectionHeader from "../SectionHeader";
import SideBySideLayout from "../SideBySideLayout";

export type SectionBaseProps = PropsWithChildren & {
  sectionTitle: string;
};

export default function SectionBase(props: SectionBaseProps) {
  return (
    <Box component="div" id={props.sectionTitle} sx={{ pb: 8 }}>
      <SectionHeader>{props.sectionTitle}</SectionHeader>
      {props.children}
    </Box>
  );
}
