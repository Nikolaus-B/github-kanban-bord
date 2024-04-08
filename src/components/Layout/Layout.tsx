import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { InputContainer } from "../InputContainer/InputContainer";
import { Info } from "../Info/Info";
import { KanbanList } from "../KanbanList/KanbanList";
import filteredIssues from "../../helpers/filteredIssues";
import { appSelector, useAppDispatch } from "../../redux/store";
import { selectIssues } from "../../redux/issue/issueSelectors";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { changeIssueCompletedState } from "../../redux/issue/issueSlice";

export const Layout = () => {
  const issues = appSelector(selectIssues);
  const dispatch = useAppDispatch();

  const handleDragEnd = (result: DropResult) => {
    const source = result.source;
    const destination = result.destination;
    const dropableIssue = result.draggableId;

    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      dispatch(
        changeIssueCompletedState({
          id: dropableIssue,
          completedState: destination.droppableId,
        })
      );
    }
  };

  return (
    <main>
      <Container as="section" maxW="1440px" mt="30px">
        <Flex gap="30px" flexDir="column">
          <InputContainer />
          <Info />
        </Flex>
        <DragDropContext onDragEnd={handleDragEnd}>
          <SimpleGrid
            spacing={10}
            alignItems="start"
            minChildWidth="400px"
            mt="30px"
          >
            <KanbanList
              title={"ToDo"}
              issues={filteredIssues(issues, "open")}
              issuesState={"open"}
            />
            <KanbanList
              title={"In Progress"}
              issues={filteredIssues(issues, "inProgress")}
              issuesState={"inProgress"}
            />
            <KanbanList
              title={"Done"}
              issues={filteredIssues(issues, "closed")}
              issuesState={"closed"}
            />
          </SimpleGrid>
        </DragDropContext>
      </Container>
    </main>
  );
};
