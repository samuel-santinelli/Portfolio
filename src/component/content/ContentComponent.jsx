import { Flex, Image, Text } from "@mantine/core";
import Banner from "../../assets/img/profile-picture-banner.png";
import { useSpring, animated } from "react-spring";
import TypeWritter from "../writter/TypeWritter";
import AboutMe from "../about-me/AboutMe";
// import { useEffect, useRef } from "react";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
// import Projects from "../projects/Projects";

const ContentComponent = () => {
  const springs = useSpring({
    from: { transform: "translateY(0px)" },
    to: [{ transform: "translateY(50px)" }, { transform: "translateY(0px)" }],
    config: { mass: 1, tension: 80, friction: 40, duration: 4000 },
    loop: { reverse: true },
  });
  // const section1Ref = useRef(null);
  // const section2Ref = useRef(null);
  // const section3Ref = useRef(null);
  // const section4Ref = useRef(null);

  // const sectionRefs = [section1Ref, section2Ref, section3Ref];

  // let currentSectionIndex = 0;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScroll = window.scrollY;
  //     const currentSection = sectionRefs[currentSectionIndex].current;
  //     const nextSection = sectionRefs[currentSectionIndex + 1]?.current;

  //     if (nextSection && currentScroll >= nextSection.offsetTop) {
  //       currentSectionIndex++;
  //       nextSection.scrollIntoView({ behavior: "smooth" });
  //     } else if (currentScroll < currentSection.offsetTop) {
  //       if (currentSectionIndex > 0) {
  //         currentSectionIndex--;
  //         const prevSection = sectionRefs[currentSectionIndex].current;
  //         prevSection.scrollIntoView({ behavior: "smooth" });
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Flex direction={"column"}>
      <Flex
        gap={"xl"}
        mt={-100}
        justify={"center"}
        align={"center"}
        className="content"
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <Flex direction="column" className="block" gap={"xs"} >
          <Text className="block__title-text">
            <TypeWritter
              strings={[
                "Olá, eu sou Samuel Santinelli!",
                "Hello, I'm Samuel Santinelli!",
                "¡Hola, soy Samuel Santinelli!",
                "Bonjour, je suis Samuel Santinelli!",
                "Ciao, sono Samuel Santinelli!",
                "मस्ते, मैं सैमुअल संतिनेली हूँ!",
              ]}
            />
          </Text>
          <Text className="block__subtitle-text">Software Developer</Text>
        </Flex>
        <animated.div
          style={{
            transform: springs.transform,
          }}
        >
          <Image src={Banner} />
        </animated.div>
      </Flex>
      <AboutMe />
      <Experience />
      <Skills />
      {/* <Projects/> */}
    </Flex>
  );
};

export default ContentComponent;
