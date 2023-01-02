import { Chip } from "../ChipStack";
import { ExternalLink } from "./links";
import Router from "next/router";

export const linkToChip = (link: ExternalLink, params: {}): Chip => {
  return {
    label: link.text,
    avatar: link.imgSrc || link.icon!,
    clickable: true,
    onClick: () => Router.push(link.url),
  };
};
