export interface ExternalLink {
  url: string;
  text: string;
  icon?: string;
  imgSrc?: string;
}

export const externalLinks = {
  cv: {
    url: "https://drive.google.com/file/d/1GlwyTWSLw8eKNfviW1C9CEfxRYu4HxPX/view?usp=sharing",
    text: "CV",
    icon: "file",
  },
  linkedIn: {
    url: "https://www.linkedin.com/in/callum-mcclure",
    text: "LinkedIn",
    imgSrc: "/images/logos/linkedIn.svg",
  },
  github: {
    url: "https://www.github.com/magic-cal",
    text: "GitHub",
    imgSrc:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  email: {
    url: "mailto:callum.mcclure98@gmail.com",
    text: "Email",
    imgSrc: "/images/logos/email.png",
  },
};

export const socialLinks = [
  externalLinks.linkedIn,
  externalLinks.github,
  externalLinks.email,
];
