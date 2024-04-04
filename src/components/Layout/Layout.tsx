import { Container, Flex } from "@chakra-ui/react";
import { InputContainer } from "../InputContainer/InputContainer";
import { Info } from "../Info/Info";
import { KanbanList } from "../KanbanList/KanbanList";

export const Layout = () => {
  return (
    <Container as="section" maxW="1440px" mt="30px">
      <Flex gap="20px" flexDir="column" ml="30px">
        <InputContainer />
        <Info />
      </Flex>
      <KanbanList />
    </Container>
  );
};
