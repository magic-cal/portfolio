import { Link } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export interface LinkIconButton {
  link?: string;
  newTab?: boolean;
}

export default function LinkIconButton(props: LinkIconButton) {
  return props.link ? (
    <IconButton href={props.link} className="no-animation">
      <Link />
    </IconButton>
  ) : null;
}
