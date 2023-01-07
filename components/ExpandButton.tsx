import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";

export interface ExpandButtonProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

export default function ExpandButton(props: ExpandButtonProps) {
  return (
    <Button
      variant="outlined"
      endIcon={props.isExpanded ? <ExpandLess /> : <ExpandMore />}
      onClick={props.toggleExpanded}
      size="large"
      color="secondary"
    >
      {props.isExpanded ? "Less" : "More"}
    </Button>
  );
}
