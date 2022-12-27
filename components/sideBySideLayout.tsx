import * as React from "react";
import { Grid } from "@mui/material";

export interface SideBySideLayoutProps {
  mainContent: React.ReactNode;
  additionalContent?: React.ReactNode;
  inverted?: boolean;
}

export default function SideBySideLayout(props: SideBySideLayoutProps) {
  const content = props.inverted
    ? [props.additionalContent, props.mainContent]
    : [props.mainContent, props.additionalContent].filter(
        (c) => c !== undefined
      );
  return (
    <>
      <Grid
        container
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ pb: 2 }}
      >
        {content.map((c, index) => (
          <Grid item xs={12} sm={6} key={index} style={{ display: "flex" }}>
            {c}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
