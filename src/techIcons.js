// src/techIcons.js
import {
  SiReact,
  SiJavascript,
  SiSpring,
  SiAngular,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiPython,
  SiGit,
  SiDocker,
  SiLinux,
  SiJira,
  SiHtml5,
  SiCss3
} from "react-icons/si";

import {
  FaNetworkWired,
  FaProjectDiagram,
  FaDatabase,
  FaCogs,
  FaCubes,
  FaJava
} from "react-icons/fa";

const techIcons = {
  react: SiReact,
  js: SiJavascript,

  // Java uses FontAwesome icon (FaJava) instead of missing SiJava
  java: FaJava,

  spring: SiSpring,
  angular: SiAngular,
  postgres: SiPostgresql,
  mysql: SiMysql,
  oracle: SiOracle,
  python: SiPython,
  git: SiGit,
  docker: SiDocker,
  linux: SiLinux,
  jira: SiJira,
  html5: SiHtml5,
  css3: SiCss3,

  api: FaNetworkWired,
  microservices: FaProjectDiagram,
  cicd: FaCogs,
  agile: FaCogs,
  database: FaDatabase,
  plm: FaCubes,

  // fallback icon
  _default: FaCogs
};

export default techIcons;
