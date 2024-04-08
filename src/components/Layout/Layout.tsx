import { Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { InputContainer } from "../InputContainer/InputContainer";
import { Info } from "../Info/Info";
import { KanbanList } from "../KanbanList/KanbanList";
import filterIssues from "../../helpers/filterIssues";
import { appSelector, useAppDispatch } from "../../redux/store";
import { selectIssues } from "../../redux/issue/issueSelectors";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import { useEffect, useState } from "react";
import { appendAt, remove, reorder } from "../../helpers/dragNDropUtils";

export const Layout = () => {
  const issues = appSelector(selectIssues);
  const dispatch = useAppDispatch();

  const [filteredIssues, setFilteredIssues] = useState(filterIssues(issues));

  useEffect(() => {
    setFilteredIssues(filterIssues(issues));
  }, [issues]);

  const handleDragEnd = (result: DropResult) => {
    const source = result.source;
    const destination = result.destination;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        [...filteredIssues[source.droppableId]],
        source.index,
        destination.index
      );

      const tempIssues = { ...filteredIssues };
      tempIssues[source.droppableId] = items;
      setFilteredIssues({ ...tempIssues });
    } else {
      // dispatch(
      //   changeIssueCompletedState({
      //     id: dropableIssue,
      //     completedState: destination.droppableId,
      //   })
      // );
      const srcItems = remove(filteredIssues[source.droppableId], source.index);

      const destItems = appendAt(
        filteredIssues[destination.droppableId],
        destination.index,
        filteredIssues[source.droppableId][source.index]
      );

      const tempIssues = { ...filteredIssues };
      tempIssues[source.droppableId] = srcItems;
      tempIssues[destination.droppableId] = destItems;
      setFilteredIssues({ ...tempIssues });
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
              issues={filteredIssues.open || []}
              issuesState={"open"}
            />
            <KanbanList
              title={"In Progress"}
              issues={filteredIssues.inProgress || []}
              issuesState={"inProgress"}
            />
            <KanbanList
              title={"Done"}
              issues={filteredIssues.closed || []}
              issuesState={"closed"}
            />
          </SimpleGrid>
        </DragDropContext>
      </Container>
    </main>
  );
};
