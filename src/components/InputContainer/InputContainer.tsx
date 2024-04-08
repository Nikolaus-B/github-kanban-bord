import { Button, Flex, Input, useToast } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import {
  fetchUserRepoInfo,
  fetchUserRepoIsses,
} from "../../redux/issue/operations";
import getUsernameAndRepo from "../../helpers/getUsernameAndRepo";

// interface InputContainerProps {
//   repoUrl: string;
//   onRepoSearchSubmit: (arg: string) => void;
// }

export const InputContainer = () => {
  const [repoUrl, setRepoUrl] = useState<string>("");

  const toast = useToast();
  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRepoUrl(event.target.value);
  };

  const handleClick = () => {
    if (repoUrl.startsWith("https://")) {
      const { username, repoName } = getUsernameAndRepo(repoUrl);
      const userInfo = {
        username: username,
        repoName: repoName,
        repoUrl: repoUrl,
      };

      dispatch(fetchUserRepoInfo(userInfo));
      dispatch(fetchUserRepoIsses(userInfo));
    } else {
      toast({
        position: "top-right",
        title: "URL must start with 'https://'",
        status: "warning",
        isClosable: true,
      });
    }
    setRepoUrl("");
  };

  return (
    <Flex gap="20px">
      <Input
        value={repoUrl}
        variant="outline"
        outline="teal.500"
        placeholder="Enter repo URL"
        onChange={handleInputChange}
      />
      <Button onClick={handleClick}>Load</Button>
    </Flex>
  );
};
