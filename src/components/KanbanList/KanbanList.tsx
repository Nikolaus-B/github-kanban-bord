import { Box, Flex, List, Text } from "@chakra-ui/react";
import { KanbanItem } from "../KanbanItem/KanbanItem";
import { Issue } from "../../interfaces/issue";
import { Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../StrictModeDroppable/StrictModeDroppable";

interface KanbanListProps {
  title: string;
  issues: Issue[];
  issuesState: string;
}

export const KanbanList: React.FC<KanbanListProps> = ({
  title,
  issues,
  issuesState,
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="10px 20px"
      gap={5}
    >
      <Text fontSize={20} fontWeight={500}>
        {title}
      </Text>
      <Box padding="20px 20px" bgColor="gray.400">
        <StrictModeDroppable droppableId={issuesState}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <List
                display="flex"
                gap={5}
                padding="0px 10px"
                w="400px"
                h="500px"
                flexDir="column"
                overflowY="auto"
              >
                {issues.map((issue: Issue, index) => {
                  return (
                    <Draggable
                      key={issue.id}
                      draggableId={issue.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <KanbanItem key={issue.id} issueInfo={issue} />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </List>
            </div>
          )}
        </StrictModeDroppable>
      </Box>
    </Flex>
  );
};
