import { AppShell, Burger, Group, Image, Select, Text, UnstyledButton } from "@mantine/core";

const HeaderLayout = (toggle, opened) => {
  const languages = [
    {
      value: "pt",
      label: "Português",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    },
    {
      value: "en",
      label: "Inglês",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
    {
      value: "es",
      label: "Espanhol",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    },
  ];

  const SelectItem = ({ ...others }) => (      
    <div {...others}>      
    <Group>
      <Image src={others.option.image} w={20} h={20} />
      <div>
        <Text size="sm">{others.option.label}</Text>       
      </div>
    </Group>
  </div>
  );


  return (
    <>
      <AppShell.Header className="header">
        <Group h="100%" px="md">
          <Burger opened={opened} o hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group
              ml="xl"
              gap={0}
              visibleFrom="sm"
              style={{ flex: 1, gap: 10 }}
            >
              <UnstyledButton className={"control"}>Início</UnstyledButton>
              <UnstyledButton className={"control"}>Sobre mim</UnstyledButton>
              <UnstyledButton className={"control"}>Experiência</UnstyledButton>
              <UnstyledButton className={"control"}>Habilidades</UnstyledButton>
            </Group>
          </Group>      
          <Select
            defaultValue={"pt"}
            data={languages}
            renderOption={SelectItem}
            placeholder="Select a language"
          />
        </Group>
      </AppShell.Header>
    </>
  );
};

export default HeaderLayout;
