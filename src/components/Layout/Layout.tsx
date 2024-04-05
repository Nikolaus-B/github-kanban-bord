import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { InputContainer } from "../InputContainer/InputContainer";
import { Info } from "../Info/Info";
import { KanbanList } from "../KanbanList/KanbanList";

export const Layout = () => {
  return (
    <Container as="section" maxW="1440px" mt="30px">
      <Flex gap="30px" flexDir="column">
        <InputContainer />
        <Info />
      </Flex>
      <SimpleGrid spacing={10} minChildWidth="350px" mt="30px">
        <KanbanList title={"ToDo"} type={"open"} />
        <KanbanList title={"In Progress"} type={"inProgress"} />
        <KanbanList title={"Done"} type={"closed"} />
      </SimpleGrid>
    </Container>
  );
};
