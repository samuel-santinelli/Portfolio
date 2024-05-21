import {
  // ActionIcon,
  AppShell,
  Burger,
  // Card,
  Flex,
  Group,
  // Kbd,
  // SegmentedControl,
  Text,
  // Tooltip,
  // useMantineColorScheme,
} from "@mantine/core";

const HeaderLayout = (toggle, opened) => {
  // const { toggleColorScheme } = useMantineColorScheme();
  // const dark = colorScheme === "dark";

  return (
    <>
      <AppShell.Header className="header">
        <Group h="100%" px="md">
          <Burger opened={opened} o hiddenFrom="sm" size="sm" />
          <Flex justify={"center"} align={"center"} gap={"sm"}>
            <Text size="25px" pt="5px" style={{ fontFamily: "OpenSans" }}>
              © Code by Samuel
            </Text>
          </Flex>
        </Group>
      </AppShell.Header>
      {/* <AppShell.Navbar p="md">
        <Flex direction={"column"} p={20} gap={"lg"}>
          <Card>
            <Flex direction={"row"} align={"center"} gap={"md"}>
              <Flex align={"center"}>
                <Image src={ProfileLogo} height={"40px"} />
              </Flex>
              <Flex direction={"column"} align={"start"}>
                <Text fw={"bolder"}>Samuel Santinelli</Text>
                <Text fw={"normal"} size="xs" color="red">
                  Full-stack Developer
                </Text>
              </Flex>
            </Flex>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" >
                <IconStar color="red" />
              </ActionIcon>
              <Text fw={"bold"} size="sm">
                Characters
              </Text>
            </Group>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" >
                <IconPencil color="red"  />
              </ActionIcon>
              <Text fw={"bold"} >
                Creators
              </Text>
            </Group>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" >
                <IconCalendarEvent color="red"  />
              </ActionIcon>
              <Text fw={"bold"} >
                Events
              </Text>
            </Group>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" >
                <IconDeviceTv color="red"  />
              </ActionIcon>
              <Text fw={"bold"} >
                Series
              </Text>
            </Group>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" >
                <IconBook color="red" />
              </ActionIcon>
              <Text fw={"bold"} >
                Comics (HQ)
              </Text>
            </Group>
          </Card>

          <Tooltip color="none" label={<Kbd>Alterar tema do sistema</Kbd>}>
            <SegmentedControl
              size="xs"
              h={"40px"}
              onChange={() => toggleColorScheme()}
              transitionTimingFunction="ease"
              
              fullWidth
              data={[
                { label: <IconSun />, value: "light" },
                { label: <IconMoonStars />, value: "dark" },
              ]}
            />
          </Tooltip>
        </Flex>
        <Flex direction={"row"} gap={"5px"} justify={"center"} align={"center"} mt={"80px"} style={{ position: "fixed", left: 55, bottom: 20}}>
          <Text size="xs">Developed by</Text>{" "}
          <Text size="xs" color="red">
          (2024) Samuel Santinelli 
          </Text>
        </Flex>
      </AppShell.Navbar> */}
    </>
  );
};

export default HeaderLayout;
