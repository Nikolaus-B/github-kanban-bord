import { Box, Link, Text } from "@chakra-ui/react";
import { Issue } from "../../interfaces/Issue";
import daysAgoFromDate from "../../helpers/daysAgoFromDate";

interface KanbanItemProps {
  issueInfo: Issue;
}

export const KanbanItem: React.FC<KanbanItemProps> = ({ issueInfo }) => {
  const { title, issueNumber, createdAt, comments, author, issueUrl } =
    issueInfo;
  return (
    <Box
      display="flex"
      flexDir="column"
      gap={5}
      w="250"
      bgColor="white"
      padding="10px 15px"
      borderRadius="8px"
      border="1px solid black.500"
    >
      <Link
        href={issueUrl}
        color="teal.500"
        target="_blank"
        rel="noopener noreferrer"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden"
      >
        {title}
      </Link>
      <Box display="flex" gap={5}>
        <Text>#{issueNumber}</Text>
        <Text>{`opened ${daysAgoFromDate(createdAt)}`}</Text>
      </Box>
      <Box display="flex" gap={5}>
        <Text>{author}</Text>
        <Box w="2px" height="auto" bgColor="black" />
        <Text>{`Comments: ${comments}`}</Text>
      </Box>
    </Box>
  );
};
