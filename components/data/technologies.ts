export interface Technology {
  label: string;
  avatar: string;
  highlight: boolean;
}

// @todo: move images to static folder
export const technologies = {
  vue: {
    label: "Vue",
    avatar: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
    highlight: true,
  },
  typeScript: {
    label: "TypeScript",
    avatar: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    highlight: true,
  },
  javaScript: {
    label: "JavaScript",
    avatar: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    highlight: false,
  },
  react: {
    label: "React",
    avatar: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    highlight: true,
  },
  nuxtJs: {
    label: "Nuxt.js",
    avatar: "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg",
    highlight: false,
  },
  nodeJs: {
    label: "Node.js",
    avatar: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
    highlight: true,
  },
  python: {
    label: "Python",
    avatar: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    highlight: true,
  },
  php: {
    label: "PHP",
    avatar: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
    highlight: true,
  },
  sql: {
    label: "SQL",
    avatar: "/images/logos/sql.png",
    highlight: true,
  },
  webSockets: {
    label: "WebSockets",
    avatar: "/images/logos/websocket.png",
    highlight: false,
  },
  cpp: {
    label: "C++",
    avatar: "https://cdn.worldvectorlogo.com/logos/c.svg",
    highlight: false,
  },
  arduino: {
    label: "Arduino",
    avatar: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
    highlight: false,
  },
  rasPi: {
    label: "Raspberry Pi",
    avatar: "https://cdn.worldvectorlogo.com/logos/raspberry-pi.svg",
    highlight: false,
  },
  html: {
    label: "HTML",
    avatar: "/images/logos/html.svg",
    highlight: false,
  },
  css: {
    label: "CSS",
    avatar: "/images/logos/css.svg",
    highlight: false,
  },
  express: {
    label: "Express",
    avatar: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    highlight: false,
  },
  swagger: {
    label: "Swagger",
    avatar: "/images/logos/swagger.svg",
    highlight: false,
  },
  java: {
    label: "Java",
    avatar: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    highlight: false,
  },
  postgres: {
    label: "Postgres",
    avatar: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
    highlight: false,
  },
  docker: {
    label: "Docker",
    avatar: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    highlight: false,
  },
  linux: {
    label: "Linux",
    avatar: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg",
    highlight: false,
  },
  git: {
    label: "Git",
    avatar: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    highlight: false,
  },
  github: {
    label: "GitHub",
    avatar: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    highlight: false,
  },
  gitLab: {
    label: "GitLab",
    avatar: "https://cdn.worldvectorlogo.com/logos/gitlab.svg",
    highlight: false,
  },
  dotNet: {
    label: ".NET",
    avatar: "/images/logos/dotnet.png",
    highlight: false,
  },
  gcp: {
    label: "GCP",
    avatar: "https://cdn.worldvectorlogo.com/logos/google-cloud-platform.svg",
    highlight: false,
  },
  threeJs: {
    label: "Three.js",
    avatar: "https://cdn.worldvectorlogo.com/logos/threejs-1.svg",
    highlight: false,
  },
};

export const highlightTechnologies =
  Object.values(technologies).filter((technology) => technology.highlight) ||
  [];
