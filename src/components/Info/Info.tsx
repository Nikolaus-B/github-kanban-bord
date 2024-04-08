import { Flex, Link } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { appSelector } from "../../redux/store";
import formatNumber from "../../helpers/formatNumber";
import { selectCurrentRepo } from "../../redux/issue/issueSelectors";

export const Info = () => {
  const { repoUrl, repoInfo } = appSelector(selectCurrentRepo);

  return (
    <Flex gap={30}>
      <Link
        color="teal.500"
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {repoInfo.fullRepoName
          ? repoInfo.fullRepoName.split("/").join(" > ")
          : "None"}
      </Link>
      <Flex as="p" alignItems="center" gap={2}>
        <StarIcon boxSize={3} color="yellow.400" />
        {repoInfo.starsCount !== -1
          ? `${formatNumber(repoInfo.starsCount)} stars`
          : "None"}
      </Flex>
    </Flex>
  );
};
