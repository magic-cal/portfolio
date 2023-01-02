import * as React from "react";
import { Chip, Avatar, Stack, Grid } from "@mui/material";

export interface ChipStackProps {
  chips: Chip[];
  direction?: "row" | "column";
  spacing?: number;
  justify?: "center" | "flex-start" | "flex-end";
}

export interface Chip {
  label: string;
  avatar: string;
  clickable?: boolean;
  onClick?: () => void;
}

export default function ChipStack(props: ChipStackProps) {
  const chips = props.chips.map((chip) => {
    return (
      <Grid item key={chip.label}>
        <Chip
          label={chip.label}
          avatar={<Avatar src={chip.avatar} />}
          clickable={true}
          onClick={chip.onClick}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={props.spacing} justifyContent={props.justify}>
      {chips}
    </Grid>
  );
}

ChipStack.defaultProps = {
  chips: [],
  direction: "row",
  spacing: 1,
  clickable: true,
};
