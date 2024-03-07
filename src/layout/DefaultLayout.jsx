import {
  AppShell,
  Button,
  Flex,
  Image,
  Overlay,
  Pagination,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import ContentComponent from "../component/content/ContentComponent";
import { useEffect, useState } from "react";
import { listCharacters, listCharactersByParams } from "../services/api";
import HeaderLayout from "./header/Header";
import Logo from "../assets/img/captain-america.png";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";

const DefaultLayout = () => {
  const [character, setCharacter] = useState([]);
  const [opened, { toggle }] = useDisclosure();
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const form = useForm({
    name: "",
    validate: {
      name: isNotEmpty("Este campo não pode ser vazio"),
    },
  });

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await listCharacters(currentPage);
        setCharacter(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return false;
      }
    };

    fetchData();
  }, [currentPage]);

  const SearchByParams = async () => {
    setLoading(true);
    try {
      const response = await listCharactersByParams(
        form.values.name,
        type.value,
        currentPage
      );
      setCharacter(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return false;
    }
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <HeaderLayout toggle={toggle} />

      {loading === true && (
        <>
          <Image className="rotating-image" maw={250} mah={250} src={Logo} />
          <Overlay />
        </>
      )}

      <AppShell.Main>
        <Flex justify={"start"} align={"center"} direction={"row"} gap={"md"}>
          <IconSearch width={50} height={50} color="red" />
          <Text
            style={{ fontFamily: "Marvel", textTransform: "uppercase" }}
            size="8vh"
          >
            Search for a specific character
          </Text>
        </Flex>
        <Flex justify={"flex-start"} align={"center"} gap={"md"} mb={"md"}>
          <TextInput
            {...form.getInputProps("name")}
            placeholder="Pesquise por algum personagem específico..."
            w={"50%"}
            py={20}
          />
          <Select
          defaultValue={"nameStartsWith"}
            data={[
              { label: "Character name", value: "nameStartsWith" },
              { label: "Series", value: "series" },
              { label: "Comics", value: "comics" },
              { label: "Events", value: "events" },
              { label: "Stories", value: "stories" },
            ]}
            onChange={(_value, option) => setType(option)}
            color="red"
          />
          <Button color="red" onClick={SearchByParams}>
            Search
          </Button>
        </Flex>
        <ContentComponent data={character} />
      </AppShell.Main>
      <Flex justify={"end"} pos={"relative"}>
        <Pagination
          total={character?.data?.total}
          color="red"
          autoContrast
          onChange={setCurrentPage}
          value={currentPage}
        />
      </Flex>
    </AppShell>
  );
};

export default DefaultLayout;
