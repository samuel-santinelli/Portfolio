import {
  IconBrandAngular,
  IconBrandBootstrap,
  IconBrandCypress,
  IconBrandDocker,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandKotlin,
  IconBrandMantine,
  IconBrandMysql,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
} from "@tabler/icons-react";
import { AiOutlineKubernetes } from "react-icons/ai";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
  FaAws,
  FaGitlab,
  FaJava,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiApache,
  SiApachejmeter,
  SiAxios,
  SiDatadog,
  SiExpress,
  SiGooglecloud,
  SiInsomnia,
  SiJunit5,
  SiKoa,
  SiMicrosoftazure,
  SiMocha,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiXampp,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skill = [
  // Front-end
  {
    name: "React",
    icon: <FaReact color="inherit" size={"70px"} />,
    type_skill: "front-end",
    color: "#61DAFB",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative size={"70px"} />,
    type_skill: "front-end",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill size={"70px"} />,
    type_skill: "front-end",
    color: "#61DAFB",
  },
  {
    name: "Vue.js",
    icon: <IconBrandVue size={"70px"} />,
    type_skill: "front-end",
    color: "#4FC08D",
  },
  {
    name: "Angular",
    icon: <IconBrandAngular size={"70px"} />,
    type_skill: "front-end",
    color: "#DD0031",
  },
  {
    name: "JavaScript",
    icon: <IconBrandJavascript size={"70px"} />,
    type_skill: "front-end",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: <IconBrandTypescript size={"70px"} />,
    type_skill: "front-end",
    color: "#3178C6",
  },
  {
    name: "Mantine",
    icon: <IconBrandMantine size={"70px"} />,
    type_skill: "front-end",
    color: "#339AF0",
  },
  {
    name: "Tailwind",
    icon: <IconBrandTailwind size={"70px"} />,
    type_skill: "front-end",
    color: "#06B6D4",
  },
  {
    name: "Sass",
    icon: <FaSass size={"70px"} />,
    type_skill: "front-end",
    color: "#CD6799",
  },
  {
    name: "Bootstrap",
    icon: <IconBrandBootstrap size={"70px"} />,
    type_skill: "front-end",
    color: "#7952B3",
  },
  {
    name: "Redux",
    icon: <IconBrandRedux size={"70px"} />,
    type_skill: "front-end",
    color: "#764ABC",
  },
  {
    name: "Axios",
    icon: <SiAxios size={"70px"} />,
    type_skill: "front-end",
    color: "#764ABC",
  },

  // Back-end
  {
    name: "Node.js",
    icon: <IconBrandNodejs size={"100px"} />,
    type_skill: "back-end",
    color: "#339933",
  },
  {
    name: "Java",
    icon: <FaJava size={"100px"} />,
    type_skill: "back-end",
    color: "red",
  },
  {
    name: "Kotlin",
    icon: <IconBrandKotlin size={"100px"} />,
    type_skill: "back-end",
    color: "#0095D5",
  },
  {
    name: "PHP",
    icon: <IconBrandPhp size={"100px"} />,
    type_skill: "back-end",
    color: "#777BB4",
  },
  {
    name: "Python",
    icon: <FaPython size={"100px"} />,
    type_skill: "back-end",
    color: "#3776AB",
  },
  {
    name: "Express",
    icon: <SiExpress size={"100px"} />,
    type_skill: "back-end",
    color: "#000000",
  },
  {
    name: "SpringBoot",
    icon: <BiLogoSpringBoot size={"100px"} />,
    type_skill: "back-end",
    color: "#6AAD3D",
  },
  {
    name: "Koa",
    icon: <SiKoa size={"100px"} />,
    type_skill: "back-end",
    color: "#AA8B4B",
  },

  // Databases
  {
    name: "MySQL",
    icon: <IconBrandMysql size={"100px"} />,
    type_skill: "database",
    color: "#4479A1",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={"100px"} />,
    type_skill: "database",
    color: "#336791",
  },
  {
    name: "Prisma",
    icon: <SiPrisma size={"100px"} />,
    type_skill: "database",
    color: "#0084FF",
  },

  // DevOps
  {
    name: "Docker",
    icon: <IconBrandDocker size={"70px"} />,
    type_skill: "devops",
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: <AiOutlineKubernetes size={"70px"} />,
    type_skill: "devops",
    color: "#0091C8",
  },
  {
    name: "Git",
    icon: <IconBrandGithub size={"70px"} />,
    type_skill: "devops",
    color: "#F05032",
  },
  {
    name: "Gitlab",
    icon: <FaGitlab size={"70px"} />,
    type_skill: "devops",
    color: "#FC6D26",
  },
  {
    name: "Apache",
    icon: <SiApache size={"70px"} />,
    type_skill: "devops",
    color: "#EC7E36",
  },
  {
    name: "Xampp",
    icon: <SiXampp size={"70px"} />,
    type_skill: "devops",
    color: "#F05032",
  },
  {
    name: "Datadog",
    icon: <SiDatadog size={"70px"} />,
    type_skill: "devops",
    color: "#6F2DBD",
  },
  {
    name: "AWS",
    icon: <FaAws size={"70px"} />,
    type_skill: "devops",
    color: "#FF9900",
  },
  {
    name: "Google Cloud",
    icon: <SiGooglecloud size={"70px"} />,
    type_skill: "devops",
    color: "#4285F4",
  },
  {
    name: "Azure",
    icon: <SiMicrosoftazure size={"70px"} />,
    type_skill: "devops",
    color: "#0078D7",
  },

  // Ferramentas de Teste
  {
    name: "JMeter",
    icon: <SiApachejmeter size={"70px"} />,
    type_skill: "test",
    color: "#D22128",
  },
  {
    name: "Cypress",
    icon: <IconBrandCypress size={"70px"} />,
    type_skill: "test",
    color: "#17202C",
  },
  {
    name: "Postman",
    icon: <SiPostman size={"70px"} />,
    type_skill: "test",
    color: "#FF6C37",
  },
  {
    name: "Insomnia",
    icon: <SiInsomnia size={"70px"} />,
    type_skill: "test",
    color: "#5849BE",
  },
  {
    name: "Mocha",
    icon: <SiMocha size={"70px"} />,
    type_skill: "test",
    color: "#8D6748",
  },
  {
    name: "Junit",
    icon: <SiJunit5 size={"70px"} />,
    type_skill: "test",
    color: "#99CC00",
  },
];

export default skill;
