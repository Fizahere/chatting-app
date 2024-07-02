import React, { useState } from "react";
import { HStack, Box, IconButton, Icon } from "@chakra-ui/react";
import SideContent from "../components/SideContent";
import ChatContainer from "../components/ChatContainer";
import { Colors } from "../assets/constants/colors";
import SideBarMenu from "../components/sideMenu";
import { FaBars, FaComments } from "react-icons/fa";
import { APP_ICONS } from "../assets/constants/icons";

function Chat() {
  const [showSideContent, setShowSideContent] = useState(true);

  return (
    <>
      <HStack p={{
      base:'0',
      md:'4'
    }}
    bg={"black"} position="relative" zIndex={1} height="100vh" alignItems="stretch">
        <HStack
          display={{ base: "flex", md: "none" }}
          // spacing={3}
          p={4}
          position="fixed"
          justifyContent={'space-between'}
          bottom={0}
          width="100%"
          bg="black"
          fontSize={20}
          zIndex={2}
        >
          <IconButton
            icon={<Icon as={APP_ICONS.CHAT} color={Colors.grey} />}
            aria-label="Side Content"
            onClick={() => setShowSideContent(true)}
          />
          <IconButton
            icon={<Icon as={APP_ICONS.WORK} color={Colors.grey} />}
            aria-label="Chat Container"
            onClick={() => setShowSideContent(false)}
          />
             <IconButton
            icon={<Icon as={APP_ICONS.FOLDER} color={Colors.grey} />}
            aria-label="Chat Container"
            onClick={() => setShowSideContent(false)}
          />
             <IconButton
            icon={<Icon as={APP_ICONS.USER} color={Colors.grey} />}
            aria-label="Chat Container"
            onClick={() => setShowSideContent(false)}
          />
        </HStack>
        <HStack spacing="0" alignItems="stretch">
          <Box
            height="100%"
            w={{ base: "0%", sm: "0%", md: "7%", lg: "7%" }}
            display={{ base: "none", md: "block" }}
          >
            <SideBarMenu />
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "35%", lg: "25%" }}
            height="100%"
            bg={Colors.body}
            borderTopLeftRadius={{
               base:'0',
              md:'30'
            }}
            display={{
              base: showSideContent ? "block" : "none",
              sm: "block",
              md: "block",
            }}
          >
            <SideContent />
          </Box>
          <Box
            w={{ base: "100%", sm: "50%", md: "58%", lg: "68%" }}
            height="100%"
            bg={Colors.body}
            borderTopRightRadius={{
              base:'0',
              md:'30'
            }}
            display={{
              base: showSideContent ? "none" : "block",
              sm: "block",
              md: "block",
            }}
          >
            <ChatContainer />
          </Box>
        </HStack>
      </HStack>
    </>
  );
}

export default Chat;
