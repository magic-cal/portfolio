import * as React from "react";
import { Grid, Theme, useMediaQuery } from "@mui/material";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

export interface SideBySideLayoutProps {
  mainContent: React.ReactNode;
  additionalContent?: React.ReactNode;
  inverted?: boolean;
}

export default function SideBySideLayout(props: SideBySideLayoutProps) {
  const isMobileDisplay = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const content =
    props.inverted && !isMobileDisplay
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
