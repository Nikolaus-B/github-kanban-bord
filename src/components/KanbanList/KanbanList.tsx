import { Box, Flex, List, Text } from "@chakra-ui/react";
import { KanbanItem } from "../KanbanItem/KanbanItem";
import { Issue } from "../../redux/issue/issue";

interface KanbanListProps {
  title: string;
  issues: Issue[];
}

export const KanbanList: React.FC<KanbanListProps> = ({ title, issues }) => {
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
        <List
          display="flex"
          gap={5}
          padding="0px 10px"
          w="400px"
          h="500px"
          flexDir="column"
          overflowY="auto"
        >
          {issues.map((issue: Issue) => {
            return <KanbanItem key={issue.id} issueInfo={issue} />;
          })}
        </List>
      </Box>
    </Flex>
  );
};
