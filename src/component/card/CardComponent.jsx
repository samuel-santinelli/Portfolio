import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Modal,
  Flex,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { listCharacterById } from "../../services/api";
import { Carousel } from "@mantine/carousel";
import CarouselCard from "../carousel-card/CarouselCard";
import { useMediaQuery } from "@mantine/hooks";

const CardComponent = (character) => {
  const [modal, setModal] = useState(false);
  const [characterId, setCharactedId] = useState(0);
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    Promise.resolve(listCharacterById(characterId)).then((response) => {
      setCharacterData(response.data.data.results);
    });
  }, [characterId]);

  const aboutModal = async () => {
    setModal(true), setCharactedId(character?.data?.id);
  };

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const series = character.data.series.items;

  
  return (
    <Card
      shadow="xl"
      padding="lg"
      radius="md"
      withBorder
      w={"270px"}
      h={"400px"}
    >
      <Modal
        opened={modal}
        centered
        size={"55%"}
        onClose={() => setModal(false)}
      >
        <Flex direction={"row"} gap={"md"}>
          <Image
            maw={"30vw"}
            src={`${characterData[0]?.thumbnail?.path}.${characterData[0]?.thumbnail?.extension}`}
          />
          <Flex h={"100%"} direction={"column"}>
            <Text>{character.data.name}</Text>
            <Text>{character.data.description}</Text>
            <Carousel
              slideSize={{ base: "100%", sm: "50%" }}
              slideGap={{ base: "xl", sm: 2 }}
              align="start"
              slidesToScroll={mobile ? 1 : 2}
            >
              {series.map((item, key) => (
                <Carousel.Slide key={key}>
                  <CarouselCard reourseURI={item.reourseURI} title={item.title} />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Flex>
        </Flex>
      </Modal>
      <Card.Section component="a">
        <Image
          src={`${character.data.thumbnail.path}.${character.data.thumbnail.extension}`}
          height={160}
          width={160}
        />
        <img
          src={`${character.data.thumbnail.path}.${character.data.thumbnail.extension}`}
          height={120}
          width={120}
          radius={"xl"}
          style={{
            position: "relative",
            borderRadius: "100%",
            marginTop: "-60px",
          }}
        />
      </Card.Section>

      <Group justify="center" mt="md" mb="xs">
        <Text
          style={{ fontFamily: "Marvel", textTransform: "uppercase" }}
          size="xl"
        >
          {character?.data.name}
        </Text>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={2}>
        {character?.data.description}
      </Text>

      <Button color="red" fullWidth mt="md" radius="md" onClick={aboutModal}>
        <Text truncate size="xs">
          + Sobre {character?.data.name}
        </Text>
      </Button>
    </Card>
  );
};

export default CardComponent;
