import React, { useState,useEffect } from "react";
import { HStack, Box, IconButton, Icon } from "@chakra-ui/react";
import SideContent from "../components/SideContent";
import ChatContainer from "../components/ChatContainer";
import { Colors } from "../assets/constants/colors";
import SideBarMenu from "../components/sideMenu";
import { APP_ICONS } from "../assets/constants/icons";
import Login from "./Login";

function Chat() {
  const [showSideContent, setShowSideContent] = useState(true);
  const [showChatContainer, setShowChatContainer] = useState(false);
  const [showLogin, setLogin] = useState(false);
 
  return (
    <>
       <Box
        p={{ base: "0", md: "4" }}
        bg="black"
        position="relative"
        zIndex={1}
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <HStack
          display={{ base: "flex", md: "none" }}
          p={4}
          position="fixed"
          justifyContent="space-between"
          bottom={0}
          width="100%"
          bg="black"
          fontSize={20}
          zIndex={2}
        >
          <IconButton
            icon={<Icon as={APP_ICONS.CHAT} color={Colors.grey} />}
            aria-label="Side Content"
            onClick={() => {
              setShowSideContent(true);
              setShowChatContainer(false);
              setLogin(false);
            }}
          />
          <IconButton
            icon={<Icon as={APP_ICONS.WORK} color={Colors.grey} />}
            aria-label="Chat Container"
            onClick={() => {
              setShowSideContent(false);
              setShowChatContainer(true);
              setLogin(false);
            }}
          />
          <IconButton
            icon={<Icon as={APP_ICONS.FOLDER} color={Colors.grey} />}
            aria-label="Hide All"
            onClick={() => {
              setLogin(false);
              setShowSideContent(false);
              setShowChatContainer(false);
            }}
          />
          <IconButton
            icon={<Icon as={APP_ICONS.USER} color={Colors.grey} />}
            aria-label="Hide All"
            onClick={() => {
              setLogin(true);
              setShowSideContent(false);
              setShowChatContainer(false);
            }}
          />
        </HStack>
        <Box display="flex" flex="1">
          <Box
            height="100%"
            w={{ base: "0", md: "80px" }}
            display={{ base: "none", md: "block" }}
          >
            <SideBarMenu />
          </Box>
          <Box
            flex="1"
            bg={Colors.white}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            borderRadius={{
              base: "none",
              md: "10",
            }}
            overflow="hidden"
          >
            <Box
              display={{
                base: showSideContent ? "block" : "none",
                sm: "block",
              }}
              flex={{ base: "1", sm: "0 0 300px" }}
              minWidth={{ base: "100%", sm: "300px" }}
            >
              <SideContent />
            </Box>
            <Box
              display={{
                base: showChatContainer ? "block" : "none",
                sm: "block",
              }}
              flex="1"
              minWidth={{ base: "100%", sm: "0" }}
            >
              <ChatContainer/>
               </Box> 
            <Box
              display={{ base: setLogin ? "block" : "none", sm: "none" }}
              flex="1"
              minWidth={{ base: "100%", sm: "0" }}
            >
              <Login />
            </Box>
          </Box>
        </Box>
      </Box> 
    </>
  );
}

export default Chat;
