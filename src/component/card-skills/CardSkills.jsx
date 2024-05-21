import { Card, Flex, Text } from "@mantine/core";

const CardSKills = (text, icon) => {
  return (
    <Card w={"220px"} h={"220px"}>
      <Flex direction={"column"} justify={"center"} align={"center"}>
      <Text tt={"uppercase"} size={"lg"} fw={"bold"}>{text}</Text>
          {icon}
      </Flex>
    </Card>
  );
};

export default CardSKills;
