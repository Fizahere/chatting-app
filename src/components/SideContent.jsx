import React from "react";
import { 
  Flex, 
  Box,
Avatar,
VStack,
} from "@chakra-ui/react";
import { APP_ICONS } from "../assets/constants/icons";
import { Colors } from "../assets/constants/colors";
import CustomChatCard from "../components/Mists/chatCard";
import {CustomInputFields } from '../components/Mists/InputFeild' 

function SideContent() {
  return (
    <>
      <Box p={4}>
        <Flex pb={5}>
        <CustomInputFields.CustomSearchInputFeild />
        <Avatar name='Fiza' bg={Colors.searchInput} ml={{sm:3}} h={10} w={10} src='https://bit.ly/dan-abramo' />
        </Flex>
        <VStack pl={6} spacing={4}>
        <CustomChatCard avatarName={'Fiza'} avatarColor={'pink'} />
        <CustomChatCard avatarName={'Alidsd'} avatarColor={'orange'} />
        <CustomChatCard avatarName={'D'} avatarColor={'#b1b2e4'} />
        </VStack>
      </Box>
    </>
  );
}

export default SideContent;
