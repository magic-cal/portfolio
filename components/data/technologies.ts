export const technologies = {
  Vue: {
    label: "Vue",
    avatar: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
    highlight: true,
  },
  TypeScript: {
    label: "TypeScript",
    avatar: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    highlight: true,
  },
  JavaScript: {
    label: "JavaScript",
    avatar: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    highlight: true,
  },
  React: {
    label: "React",
    avatar: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    highlight: true,
  },
  NuxtJs: {
    label: "Nuxt.js",
    avatar: "https://cdn.worldvectorlogo.com/logos/nuxt-2.svg",
    highlight: true,
  },
  NodeJs: {
    label: "Node.js",
    avatar: "https://cdn.worldvectorlogo.com/logos/nodejs-2.svg",
    highlight: true,
  },
  Python: {
    label: "Python",
    avatar: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
    highlight: true,
  },
  PHP: {
    label: "PHP",
    avatar: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
    highlight: true,
  },
  SQL: {
    label: "SQL",
    avatar: "https://cdn.worldvectorlogo.com/logos/sql.svg",
    highlight: true,
  },
  WebSockets: {
    label: "WebSockets",
    avatar: "https://cdn.worldvectorlogo.com/logos/websockets.svg",
    highlight: true,
  },
  CPP: {
    label: "C++",
    avatar: "https://cdn.worldvectorlogo.com/logos/c.svg",
    highlight: false,
  },
  Arduino: {
    label: "Arduino",
    avatar: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
    highlight: false,
  },
  RasPi: {
    label: "Raspberry Pi",
    avatar: "https://cdn.worldvectorlogo.com/logos/raspberry-pi.svg",
    highlight: false,
  },
  HTML: {
    label: "HTML",
    avatar: "https://cdn.worldvectorlogo.com/logos/html5.svg",
    highlight: false,
  },
  CSS: {
    label: "CSS",
    avatar: "https://cdn.worldvectorlogo.com/logos/css-5.svg",
    highlight: false,
  },
  Express: {
    label: "Express",
    avatar: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    highlight: false,
  },
  Swagger: {
    label: "Swagger",
    avatar: "https://cdn.worldvectorlogo.com/logos/swagger.svg",
    highlight: false,
  },
  Java: {
    label: "Java",
    avatar: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    highlight: false,
  },
  MySQL: {
    label: "MySQL",
    avatar: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
    highlight: false,
  },
  MongoDB: {
    label: "MongoDB",
    avatar: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    highlight: false,
  },
  Docker: {
    label: "Docker",
    avatar: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    highlight: false,
  },
  Linux: {
    label: "Linux",
    avatar: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg",
    highlight: false,
  },
  Git: {
    label: "Git",
    avatar: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    highlight: false,
  },
  GitHub: {
    label: "GitHub",
    avatar: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    highlight: false,
  },
  GitLab: {
    label: "GitLab",
    avatar: "https://cdn.worldvectorlogo.com/logos/gitlab.svg",
    highlight: false,
  },
};

export const highlightTechnologies =
  Object.values(technologies).filter((technology) => technology.highlight) ||
  [];