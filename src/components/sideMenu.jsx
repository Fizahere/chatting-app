import React from "react";
import { VStack, IconButton, Box, Text } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import { APP_ICONS } from "../assets/constants/icons";

function SideBarMenu(props) {
  const { icon } = props;

  return (
    <>
      <VStack p={3}>
        <Box textAlign={"center"}>
          <IconButton
            icon={<APP_ICONS.CHAT fontSize={25} color={Colors.grey} />}
          />
          <Text color={Colors.grey} m={1} fontSize={10}>
            All Chats
          </Text>
        </Box>

        <Box textAlign={"center"}>
          <IconButton
            icon={<APP_ICONS.WORK fontSize={25} color={Colors.grey} />}
          />
          <Text color={Colors.grey} m={1} fontSize={10}>
            Work
          </Text>
        </Box>

        <Box textAlign={"center"}>
          <IconButton
            icon={<APP_ICONS.FOLDER fontSize={25} color={Colors.grey} />}
          />
          <Text color={Colors.grey} m={1} fontSize={10}>
            Friends
          </Text>
        </Box>

        <Box textAlign={"center"}>
          <IconButton
            icon={<APP_ICONS.USER fontSize={25} color={Colors.grey} />}
          />
          <Text color={Colors.grey} m={1} fontSize={10}>
            Profile
          </Text>
        </Box>

        <Box textAlign={"center"}>
          <IconButton
            icon={<APP_ICONS.LOGOUT fontSize={25} color={Colors.grey} />}
          />
          <Text color={Colors.grey} m={1} fontSize={10}>
            Logout
          </Text>
        </Box>
      </VStack>
    </>
  );
}

export default SideBarMenu;
