import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Flex,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { Colors } from "../../assets/constants/colors";

function CustomChatCard(props) {
  const {avatarName,avatarColor,}=props
  return (
    <>
      <Card 
      direction={"row"} 
      overflow="hidden" 
      variant="outline"
      _hover={{
        bg:Colors.chatbg,
      }}
      p={3}
      borderRadius={8}
      color={Colors.font} 
      >
        <Avatar
          name={avatarName}
          bg={avatarColor}
          h={10}
          w={10}
          src="https://bit.ly/dan-abramo"
        />

        <Stack>
          <CardBody px={2}>
            <Flex w={200} justifyContent={"space-between"}>
              <Heading fontSize={"12"} fontWeight={"bold"}>
                {avatarName}
              </Heading>
              <Text fontSize={"10"}>2h</Text>
            </Flex>
            <Box w={'inherit'}>
              <Text fontSize={"10"} isTruncated>
                im fiza, Lorem ipsum dolor sit amet, ducimus consequatur dolor
                numquam dolorum molestiae temporibus? Earum reprehenderit
                consequatur accusantium, error iste eius nisi officia minima.
              </Text>
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}

export default CustomChatCard;
