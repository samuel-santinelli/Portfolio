import { Carousel } from "@mantine/carousel";
import {
  Button,
  Card,
  Flex,
  Modal,
  Paper,
  Progress,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconWorldWww } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { useCallback, useEffect, useState } from "react";

const CardSKills = (item) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState(null);
  const data = [
    {
      image:
        "https://wallpapers.com/images/hd/rick-and-morty-background-0b308lns37s5x1gn.jpg",
      title: "Informações de todos os personagens",
      category: "Ricky & Morty",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2020/01/31/07/48/dogs-4807370_960_720.jpg",
      title: "Site de compras para pets",
      category: "Cãonectados",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg",
      title: "Gerenciamento de dados de cartão de crédito",
      category: "Banco digital",
    },
    {
      image:
        "https://sm.ign.com/t/ign_br/screenshot/default/blob_1w3g.1200.jpg",
      title: "Marvel API",
      category: "Marvel API",
    },
    {
      image:
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Best places to visit this winter",
      category: "tourism",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Active volcanos reviews: travel at your own risk",
      category: "nature",
    },
  ];

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  function CardSlide({ image, title, category }) {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
        className={"card_slide"}
      >
        <div>
          <Text className={"category_slide"} size="xs">
            {category}
          </Text>
          <Title order={3} className={"title_slide"}>
            {title}
          </Title>
        </div>
        <Flex gap={"md"}>
          <Button variant="white" bg={item.item.color}>
            <Flex gap={"xs"}>
              <IconWorldWww color="white" />
              <Text color="white">Site</Text>
            </Flex>
          </Button>
          <Button color="dark">
            <Flex gap={"xs"}>
              <IconBrandGithub />
              <Text>Código</Text>
            </Flex>
          </Button>
        </Flex>
      </Paper>
    );
  }

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CardSlide {...item} />
    </Carousel.Slide>
  ));

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  const [infoModal, setInfoModal] = useState(false);
  return (
    <Card
      className="card-grow card-container"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = item.item.color;
        e.currentTarget.style.color = "#fff";
        const icon = e.currentTarget.querySelector(".card-icon");
        if (icon) {
          icon.style.color = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "";
        e.currentTarget.style.color = item.item.color;
        const icon = e.currentTarget.querySelector(".card-icon");
        if (icon) {
          icon.style.color = item.item.color;
        }
      }}
    >
      <Modal
        opened={infoModal}
        centered
        onClose={() => setInfoModal(false)}
        size={"xl"}
        title={
          <Text tt={"uppercase"} size={"xl"} className="">
            Projetos em que utilizo o{" "}
            <Text color={item.item.color} fw={"bold"} span>
              {item.item.name}
            </Text>
          </Text>
        }
      >
        <Carousel
          slideSize={{ base: "100%", sm: "50%" }}
          slideGap={{ base: "xl", sm: 2 }}
          align="start"
          getEmblaApi={setEmbla}
          slidesToScroll={mobile ? 1 : 2}
        >
          {slides}
        </Carousel>
        <Progress
          value={scrollProgress}
          color={item.item.color}
          size="sm"
          mt="xl"
          mx="auto"
        />
      </Modal>
      <Flex
        direction={"column"}
        gap={"md"}
        className={item.className}
        justify={"center"}
        align={"center"}
      >
        <Text tt={"uppercase"} size={"lg"} fw={"bold"} className="">
          {item.item.name}
        </Text>
        <Flex
          className="card-icon"
          style={{
            color: item.item.color, // Cor inicial dinâmica
          }}
        >
          {item.item.icon}
        </Flex>
        <Button
          className="card-text"
          onClick={() => setInfoModal(true)}
          variant="outline"
          color="white"
        >
          Visualizar Projetos
        </Button>{" "}
      </Flex>
    </Card>
  );
};

export default CardSKills;
