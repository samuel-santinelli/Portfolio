import { Flex } from "@mantine/core";
import CardComponent from "../card/CardComponent";

const ContentComponent = (characters) => {
  return (
    <Flex wrap={"wrap"} gap={"xl"} >
      {characters?.data?.data?.results.map((item, key) => (
        <CardComponent key={key} data={item}/>
      ))}
    </Flex>
  );
};

export default ContentComponent;
