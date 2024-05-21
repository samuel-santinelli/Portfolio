import { Carousel } from "@mantine/carousel";
import { Card, Flex, Text } from "@mantine/core";
import { IconBolt } from "@tabler/icons-react";
import skill from "../../models/skills";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const Skills = () => {
  const front_end_skill = skill.filter(
    (item) => item.type_skill === "front-end"
  );
  const back_end_skill = skill.filter((item) => item.type_skill === "back-end");
  const database_skill = skill.filter((item) => item.type_skill === "database");
  const devops_skill = skill.filter((item) => item.type_skill === "devops");
  const test_skill = skill.filter((item) => item.type_skill === "test");
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Flex direction={"column"} gap={"sm"}>
      <Text size="xl" className="block__title-text">
        Minhas{" "}
        <Text c={"#9D70F6"} span={true} className="block__title-text">
          habilidades <IconBolt width={"35px"} height={"35px"} />
        </Text>
      </Text>
      <Carousel
        controlSize={50}
        pb={"xl"}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        withIndicators
        slideSize={{ base: "100%", sm: "50%", md: "100%" }}
      >
        <Carousel.Slide>
          <Text className="block_title-card">Front-end</Text>
          <Flex
            wrap={"wrap"}
            gap={"xl"}
            justify={"center"}
            h={"500px"}
            align={"center"}
            p={"15px"}
            // style={{ border: "solid 2px #7a37ff", borderRadius: "10px" }}
          >
            {front_end_skill.map((item, index) => (
              <Card key={index}>
                <Flex
                  direction={"column"}
                  w={"195px"}
                  h={"200px"}
                  justify={"center"}
                  align={"center"}
                >
                  <Text tt={"uppercase"} size={"lg"} fw={"bold"} className="">
                    {item.name}
                  </Text>
                  {item.icon}
                </Flex>
              </Card>
            ))}
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Text className="block_title-card">Back-end</Text>
          <Flex
            wrap={"wrap"}
            gap={"xl"}
            justify={"center"}
            p={"15px"}
            // style={{ border: "solid 5px #7a37ff", borderRadius: "10px" }}
          >
            {back_end_skill.map((item, index) => (
              <Card key={index}>
                <Flex
                  direction={"column"}
                  w={"200px"}
                  h={"200px"}
                  justify={"center"}
                  align={"center"}
                >
                  <Text tt={"uppercase"} size={"lg"} fw={"bold"} className="">
                    {item.name}
                  </Text>

                  {item.icon}
                </Flex>
              </Card>
            ))}
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Text className="block_title-card">Database</Text>
          <Flex
            wrap={"wrap"}
            gap={"xl"}
            justify={"center"}
            p={"15px"}
            // style={{ border: "solid 5px #7a37ff", borderRadius: "10px" }}
          >
            {database_skill.map((item, index) => (
              <Card key={index}>
                <Flex
                  direction={"column"}
                  w={"300px"}
                  h={"500px"}
                  justify={"center"}
                  align={"center"}
                >
                  <Flex direction={"column"} justify={"center"} align={"center"} gap={"md"}>
                  <Text tt={"uppercase"} size={"40px"} fw={"bold"} className="">
                    {item.name}
                  </Text>

                  {item.icon}
                </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Text className="block_title-card">DevOps</Text>
          <Flex
            wrap={"wrap"}
            gap={"xl"}
            justify={"center"}
            p={"15px"}
            // style={{ border: "solid 5px #7a37ff", borderRadius: "10px" }}
          >
            {devops_skill.map((item, index) => (
              <Card key={index}>
                <Flex
                  direction={"column"}
                  w={"350px"}
                  h={"200px"}
                  justify={"center"}
                  align={"center"}
                >
                  <Text tt={"uppercase"} size={"lg"} fw={"bold"} className="">
                    {item.name}
                  </Text>

                  {item.icon}
                </Flex>
              </Card>
            ))}
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Text className="block_title-card">Testes</Text>
          <Flex
            wrap={"wrap"}
            gap={"xl"}
            justify={"center"}
            p={"15px"}
            // style={{ border: "solid 5px #7a37ff", borderRadius: "10px" }}
          >
            {test_skill.map((item, index) => (
              <Card key={index}>
                <Flex
                  direction={"column"}
                  w={"400px"}
                  h={"250px"}
                  justify={"center"}
                  align={"center"}
                >
                  <Text tt={"uppercase"} size={"lg"} fw={"bold"} className="">
                    {item.name}
                  </Text>

                  {item.icon}
                </Flex>
              </Card>
            ))}
          </Flex>
        </Carousel.Slide>
      </Carousel>
    </Flex>
  );
};

export default Skills;
