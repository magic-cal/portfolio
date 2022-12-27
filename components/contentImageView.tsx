import * as React from "react";
import { Card, Grid } from "@mui/material";
import SideBySideLayout from "./sideBySideLayout";
import Image from "next/image";

export interface ContentImageViewProps {
  imgSrc: string;
  imgAlt: string;
  mainContent: React.ReactNode;
  inverted?: boolean;
}

export default function ContentImageView(props: ContentImageViewProps) {
  const image = (
    <Image src={props.imgSrc} alt={props.imgAlt} height="100%" width="100%" />
    // <div style={{ border: "1px solid red" }}>
    //   <Image src={props.imgSrc} alt={props.imgAlt} height="100%" width="100%" />
    // </div>
  );

  const content = (
    <Card
      sx={{
        padding: "1rem",
      }}
    >
      {props.mainContent}
    </Card>
  );

  return (
    <>
      <SideBySideLayout
        mainContent={content}
        additionalContent={image}
        inverted={props.inverted}
      />
    </>
  );
}
