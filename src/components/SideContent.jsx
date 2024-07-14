import React from "react";
import { Box, VStack, Avatar } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import CustomChatCard from "../components/Mists/chatCard";
import { APP_ICONS } from "../assets/constants/icons";
import { CustomInputFields } from '../components/Mists/InputFeild'; 

function SideContent() {
  return (
    <Box 
      width="100%"
      maxW={{ base: '100%', md: '300px' }}
      p={4}
    >
      <Box pb={5} display="flex" alignItems="center">
        <CustomInputFields.CustomThemePurpleFeild 
  text={'Search..'}
        icon={APP_ICONS.SEARCH}
        width={{ base: 'inherit', sm: 'inherit', md: '210px' }}
        />
        <Avatar 
          name='Fiza' 
          color={Colors.font}
          bg={Colors.ThemePurple} 
          ml={3} 
          h={10} 
          w={10} 
          src='https://bit.ly/dan-abramo' 
        />
      </Box>
      <VStack spacing={3} align="stretch">
        <CustomChatCard avatarName={'Fiza'} avatarColor={'pink'} />
        <CustomChatCard avatarName={'Ali'} avatarColor={'orange'} />
        <CustomChatCard avatarName={'Laba'} avatarColor={'#b1b2e4'} />
        <CustomChatCard avatarName={'John'} avatarColor={'#4caf50'} />
        <CustomChatCard avatarName={'Emma'} avatarColor={'#ffc107'} />
        <CustomChatCard avatarName={'Sophia'} avatarColor={'#9c27b0'} />
      </VStack>
    </Box>
  );
}

export default SideContent;
