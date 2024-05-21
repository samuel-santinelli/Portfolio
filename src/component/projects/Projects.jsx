import { Badge, Button, Card, Flex, Group, Image, Text } from "@mantine/core";
import { IconFolderCode } from "@tabler/icons-react";
import projects from "../../models/projects";

const Projects = () => {
  return (
    <Flex direction={"column"} gap={"sm"}>
      <Flex justify={"center"}>
        <Text size="xl" className="block__title-text">
          Meus{" "}
          <Text c={"#9D70F6"} span={true} className="block__title-text">
            projetos <IconFolderCode width={"35px"} height={"35px"} />
          </Text>
        </Text>
      </Flex>
      <Flex wrap={"wrap"} gap={"xl"} justify={"center"}>
        {projects.map((item, index) => (
      <Card maw={"350px"} shadow="sm" padding="lg" radius="md" withBorder key={index}>
        <Card.Section component="a" href="https://mantine.dev/">
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{item.name_project}</Text>
          <Badge color="pink">{item.status_project}</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {item.description_project}
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>     
        ))}
    </Flex>
    </Flex>
  );
};

export default Projects;
