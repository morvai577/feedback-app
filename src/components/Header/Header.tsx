import { Box, Heading } from "@chakra-ui/react";

type HeaderProps = {
  text: string;
};

export const Header = ({ text = "" }: HeaderProps): JSX.Element => {
  return (
    <Box backgroundColor="#202142">
      <Heading as="h1" size="xl" textAlign="center" color="#ff6a95" p={2}>
        {text}
      </Heading>
    </Box>
  );
};
