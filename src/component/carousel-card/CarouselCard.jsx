import { Button, Paper, Title } from "@mantine/core";

const CarouselCard = (resourceURI, title) => {
    return (
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${resourceURI.path}.${resourceURI.extension})` }}
        className={"card"}        
      >
        <div>
          <Title order={3} className={"title"}>
            {title}
          </Title>
        </div>
        <Button variant="white" color="dark">
          Read article
        </Button>
      </Paper>
    );
  }

  export default CarouselCard
  