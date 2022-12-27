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
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "200px",
      }}
    >
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );

  const content = <div>{props.mainContent}</div>;

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
