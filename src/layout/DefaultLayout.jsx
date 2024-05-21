import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ContentComponent from "../component/content/ContentComponent";
import HeaderLayout from "./header/Header";

const DefaultLayout = () => {
  const [{ toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}        
      padding="md"
    >
      <HeaderLayout toggle={toggle} />
      <AppShell.Main>
        <ContentComponent />
      </AppShell.Main>
    </AppShell>
  );
};

export default DefaultLayout;
