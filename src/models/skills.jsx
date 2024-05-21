import {
    IconBrandAngular,
    IconBrandBootstrap,
    IconBrandCypress,
    IconBrandDocker,
    IconBrandGithub,
    IconBrandJavascript,
    IconBrandKotlin,
    IconBrandMantine,
    IconBrandMongodb,
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
  import { FaGitlab, FaJava, FaPython, FaReact, FaSass } from "react-icons/fa";
  import { RiNextjsFill } from "react-icons/ri";
  import { SiApache, SiApachejmeter, SiAxios, SiDatadog, SiExpress, SiInsomnia, SiJunit5, SiKoa, SiMocha, SiPostgresql, SiPostman, SiPrisma, SiXampp } from "react-icons/si";
  import { TbBrandReactNative } from "react-icons/tb";

const skill = [
    // Front-end
    {
      name: "React",
      icon: <FaReact color="#61DAFB" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "React Native",
      icon: <TbBrandReactNative color="#61DAFB" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill color="#61DAFB" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "Vue.js",
      icon: <IconBrandVue color="#4FC08D" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "Angular",
      icon: <IconBrandAngular color="#DD0031" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "JavaScript",
      icon: <IconBrandJavascript color="#F7DF1E" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "TypeScript",
      icon: <IconBrandTypescript color="#3178C6" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "Mantine",
      icon: <IconBrandMantine color="#339AF0" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "Tailwind",
      icon: <IconBrandTailwind color="#06B6D4" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "Sass",
      icon: <FaSass color="#CD6799" size={"70px"} />, // Azul claro
      type_skill: "front-end",
    },
    {
      name: "Bootstrap",
      icon: <IconBrandBootstrap color="#7952B3" size={"70px"} />,
      type_skill: "front-end",
    },
    {
      name: "Redux",
      icon: <IconBrandRedux color="#764ABC" size={"70px"} />, // Roxo
      type_skill: "front-end",
    },
    {
      name: "Axios",
      icon: <SiAxios color="#764ABC" size={"70px"} />, // Roxo
      type_skill: "front-end",
    },
    
    // Back-end
    {
      name: "Node.js",
      icon: <IconBrandNodejs color="#339933" size={"100px"} />,
      type_skill: "back-end",
    },
    {
      name: "Java",
      icon: <FaJava color="red" size={"100px"} />,
      type_skill: "back-end",
    },
    {
      name: "Kotlin",
      icon: <IconBrandKotlin color="#0095D5" size={"100px"} />,
      type_skill: "back-end",
    },
    {
      name: "PHP",
      icon: <IconBrandPhp color="#777BB4" size={"100px"} />,
      type_skill: "back-end",
    },
    {
      name: "Python",
      icon: <FaPython color="#3776AB" size={"100px"} />, // Azul mais escuro
      type_skill: "back-end",
    },
    {
      name: "JavaScript",
      icon: <IconBrandJavascript color="#F7DF1E" size={"70px"} />,
      type_skill: "back-end",
    },
    {
      name: "TypeScript",
      icon: <IconBrandTypescript color="#3178C6" size={"70px"} />,
      type_skill: "back-end",
    },
    {
      name: "Express",
      icon: <SiExpress color="#000000" size={"100px"} />, // Preto
      type_skill: "back-end",
    },
    {
      name: "SpringBoot",
      icon: <BiLogoSpringBoot color="#6AAD3D" size={"100px"} />, // Verde
      type_skill: "back-end",
    },
    {
      name: "Koa",
      icon: <SiKoa  color="#AA8B4B" size={"100px"} />, // Marrom claro
      type_skill: "back-end",
    },
    {
      name: "Axios",
      icon: <SiAxios color="#764ABC" size={"70px"} />, // Roxo
      type_skill: "back-end",
    }
    ,
  
    // Databases
    {
      name: "MySQL",
      icon: <IconBrandMysql color="#4479A1" size={"100px"} />,
      type_skill: "database",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql color="#336791" size={"100px"} />,
      type_skill: "database",
    },
    {
      name: "MongoDB",
      icon: <IconBrandMongodb color="#47A248" size={"100px"} />,
      type_skill: "database",
    },
    {
      name: "Prisma",
      icon: <SiPrisma color="#0084FF" size={"100px"} />, // Azul
      type_skill: "database",
    },
  
    // DevOps
    {
      name: "Docker",
      icon: <IconBrandDocker color="#2496ED" size={"70px"} />,
      type_skill: "devops",
    },
    {
      name: "Kubernetes",
      icon: <AiOutlineKubernetes color="#0091C8" size={"70px"} />, // Azul
      type_skill: "devops",
    },
    {
      name: "Git",
      icon: <IconBrandGithub color="#F05032" size={"70px"} />,
      type_skill: "devops",
    },
    {
      name: "Gitlab",
      icon: <FaGitlab color="#FC6D26" size={"70px"} />, // Laranja mais claro
      type_skill: "devops",
    },
    {
      name: "Apache",
      icon: <SiApache color="#EC7E36" size={"70px"} />, // Laranja avermelhado
      type_skill: "devops",
    },
    {
      name: "Xampp",
      icon: <SiXampp color="#F05032" size={"70px"} />, // Laranja amarelado
      type_skill: "devops",
    },
    {
      name: "Datadog",
      icon: <SiDatadog color="#6F2DBD" size={"70px"} />, // Roxo
      type_skill: "devops",
    },  
    // Ferramentas de Teste
    {
      name: "JMeter",
      icon: <SiApachejmeter color="#D22128" size={"70px"} />,
      type_skill: "test",
    },
    {
      name: "Cypress",
      icon: <IconBrandCypress color="#17202C" size={"70px"} />,
      type_skill: "test",
    },
    {
      name: "Postman",
      icon: <SiPostman color="#FF6C37" size={"70px"} />,
      type_skill: "test",
    },
    {
      name: "Insomnia",
      icon: <SiInsomnia color="#5849BE" size={"70px"} />, // Roxo
      type_skill: "test",
    },
    {
      name: "Mocha",
      icon: <SiMocha color="#8D6748" size={"70px"} />,
      type_skill: "test",
    },
    {
      name: "Junit",
      icon: <SiJunit5 color="#99CC00" size={"70px"} />,
      type_skill: "test",
    },
  ];

  export default skill