import { Flex, List, Text } from "@chakra-ui/react";
import { KanbanItem } from "../KanbanItem/KanbanItem";

interface KanbanListProps {
  title: string;
}

export const KanbanList: React.FC<KanbanListProps> = ({ title }) => {
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
      <List
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        gap={5}
        w="300px"
        h="400px"
        p="15px"
        bgColor="gray.300"
      >
        <KanbanItem />
        <KanbanItem />
      </List>
    </Flex>
  );
};
