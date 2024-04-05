import { Flex, List, Text } from "@chakra-ui/react";
import { KanbanItem } from "../KanbanItem/KanbanItem";

interface KanbanListProps {
  title: string;
  type: string;
}

export const KanbanList: React.FC<KanbanListProps> = ({ title, type }) => {
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
        css={{
          overflowY: "scroll", // Встановлюємо прокрутку по вертикалі за допомогою стилів CSS
        }}
      >
        <KanbanItem />
        <KanbanItem />
      </List>
    </Flex>
  );
};
