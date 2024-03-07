import {
  ActionIcon,
  AppShell,
  Burger,
  Card,
  Flex,
  Group,
  Image,
  Kbd,
  SegmentedControl,
  Text,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconBook,
  IconCalendarEvent,
  IconDeviceTv,
  IconMoonStars,
  IconPencil,
  IconStar,
  IconSun,
} from "@tabler/icons-react";
import Logo from "../../assets/img/captain-america.png";
import ProfileLogo from "../../assets/img/iron-man-user.png";


const HeaderLayout = (toggle, opened) => {
  const { toggleColorScheme } = useMantineColorScheme();
  // const dark = colorScheme === "dark";

  return (
    <>
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} o hiddenFrom="sm" size="sm" />
          <Flex justify={"center"} align={"center"} gap={"sm"}>
            <Image src={Logo} w={30} />
            <Text
              size="25px"
              pt="5px"
              style={{ fontFamily: "Marvel", letterSpacing: "2px" }}
            >
              MARVEL
            </Text>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
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
              <ActionIcon variant="transparent" color="red" size={"sm"}>
                <IconStar color="red" />
              </ActionIcon>
              <Text fw={"bold"} size="sm">
                Characters
              </Text>
            </Group>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" size={"sm"}>
                <IconPencil color="red" size={"sm"} />
              </ActionIcon>
              <Text fw={"bold"} size={"sm"}>
                Creators
              </Text>
            </Group>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" size={"sm"}>
                <IconCalendarEvent color="red" size={"sm"} />
              </ActionIcon>
              <Text fw={"bold"} size={"sm"}>
                Events
              </Text>
            </Group>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" size={"sm"}>
                <IconDeviceTv color="red" size={"sm"} />
              </ActionIcon>
              <Text fw={"bold"} size={"sm"}>
                Series
              </Text>
            </Group>
          </Card>
          <Card>
            <Group style={{ cursor: "pointer" }}>
              <ActionIcon variant="transparent" color="red" size={"sm"}>
                <IconBook color="red" />
              </ActionIcon>
              <Text fw={"bold"} size={"sm"}>
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
      </AppShell.Navbar>
    </>
  );
};

export default HeaderLayout;
