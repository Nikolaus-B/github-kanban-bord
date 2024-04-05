import { Flex, Link } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { selectRepoInfo } from "../../redux/issue/issueSelectors";
import { appSelector } from "../../redux/store";
import formatNumber from "../../helpers/formatNumber";

export const Info = () => {
  const repoInfo = appSelector(selectRepoInfo);

  return (
    <Flex gap={30}>
      <Link
        color="teal.500"
        href={repoInfo.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {repoInfo.fullRepoName
          ? repoInfo.fullRepoName.split("/").join(" > ")
          : "None"}
      </Link>
      <Flex as="p" alignItems="center" gap={2}>
        <StarIcon boxSize={3} color="yellow.400" />
        {repoInfo.starsCount
          ? `${formatNumber(repoInfo.starsCount)} stars`
          : "None"}
      </Flex>
    </Flex>
  );
};
