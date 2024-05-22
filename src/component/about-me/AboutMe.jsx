import { Flex, Image, Text } from "@mantine/core";
import Banner from "../../assets/img/about-banner.jpg";
import { IconInfoCircle } from "@tabler/icons-react";

// eslint-disable-next-line react/prop-types
const AboutMe = ({ section_ref }) => {
  return (
    <Flex
      gap={"xl"}
      className="about_section"
      ref={section_ref}
    >
      <Image src={Banner} maw={"750px"} className="about_section-banner" />
      <Flex direction={"column"} align={"start"} justify={"start"} gap={"md"}>
        <Text size="xl" className="block__title-text">
          Um pouco{" "}
          <Text c={"#9D70F6"} span={true} className="block__title-text">
            sobre mim <IconInfoCircle width={"25px"} height={"25px"} />
          </Text>
        </Text>
        <Text size="xl" className="about_subtitle">
          Sou um profissional com grande apreço por tecnologia e um entusiasta
          por programação, com trajetória marcante desde 2021, quando iniciei
          minha incursão no mundo da programação através do curso Técnico em
          Desenvolvimento de Sistemas do Senai. Desde então, tenho me dedicado a
          explorar as mais diversas áreas do desenvolvimento de software,
          solidificando uma base sólida de conhecimento e adquirindo
          competências valiosas ao longo desta jornada. Atualmente, estou
          cursando Ciência da Computação na Universidade UNIP para aprimorar
          ainda mais meu conhecimento técnico.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutMe;
