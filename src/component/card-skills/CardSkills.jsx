import { Card, Flex, Text } from "@mantine/core";

const CardSKills = (item) => {
  return (
    <Card>
      <Flex
        direction={"column"}
        w={item.w_number}
        h={item.h_number}
        justify={"center"}
        align={"center"}
      >
        <Text tt={"uppercase"} size={"lg"} fw={"bold"} className="">
          {item.item.name}
        </Text>

        {item.item.icon}
      </Flex>
    </Card>
  );
};

export default CardSKills;
