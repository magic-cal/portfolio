import * as React from "react";
import { Chip, Avatar, Stack } from "@mui/material";

export interface ChipStackProps {
  chips: Chip[];
  direction?: "row" | "column";
  spacing?: number;
}

export interface Chip {
  label: string;
  avatar: string;
}

export default function ChipStack(props: ChipStackProps) {
  const chips = props.chips.map((chip) => {
    return (
      <Chip
        key={chip.label}
        label={chip.label}
        avatar={<Avatar src={chip.avatar} />}
      />
    );
  });

  return (
    <Stack direction={props.direction} spacing={props.spacing}>
      {chips}
    </Stack>
  );
}

ChipStack.defaultProps = {
  chips: [],
  direction: "row",
  spacing: 1,
};
