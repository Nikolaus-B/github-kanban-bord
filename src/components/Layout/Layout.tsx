import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { InputContainer } from "../InputContainer/InputContainer";
import { Info } from "../Info/Info";
import { KanbanList } from "../KanbanList/KanbanList";
import filteredIssues from "../../helpers/filteredIssues";
import { appSelector } from "../../redux/store";
import { selectIssues } from "../../redux/issue/issueSelectors";

export const Layout = () => {
  const issues = appSelector(selectIssues);

  return (
    <Container as="section" maxW="1440px" mt="30px">
      <Flex gap="30px" flexDir="column">
        <InputContainer />
        <Info />
      </Flex>
      <SimpleGrid
        spacing={10}
        alignItems="start"
        minChildWidth="400px"
        mt="30px"
      >
        <KanbanList title={"ToDo"} issues={filteredIssues(issues, "open")} />
        <KanbanList
          title={"In Progress"}
          issues={filteredIssues(issues, "inProgress")}
        />
        <KanbanList title={"Done"} issues={filteredIssues(issues, "closed")} />
      </SimpleGrid>
    </Container>
  );
};
