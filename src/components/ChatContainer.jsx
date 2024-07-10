import React, { useState } from "react";
import { Box, Heading, Text, HStack, VStack, Avatar, Icon } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import { APP_ICONS } from "../assets/constants/icons";
import { CustomInputFields } from '../components/Mists/InputFeild'; 

const TruncatedText = ({ children, maxLines = 2 }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  return (
    <Box onClick={() => setIsTruncated(!isTruncated)} cursor="pointer" w="100%">
      <Text
        isTruncated={isTruncated}
        noOfLines={isTruncated ? maxLines : undefined}
      >
        {children}
      </Text>
      {isTruncated && <Text as="span" ml={2}>...</Text>}
    </Box>
  );
};

function ChatContainer() {
  return (
    <Box w="100%" p="4">
      <Box display="flex" justifyContent="space-between" borderBottom="1px solid grey">
        <Heading fontSize="25" fontWeight="bold">
          Chat
        </Heading>
        <Box mr={5}>
          <Icon as={APP_ICONS.PHONE} fontSize={20} mr={6} />
          <Icon as={APP_ICONS.VIDEO} fontSize={20} />
        </Box>
      </Box>
      <Box
      height={'440px'}
      >
      <VStack spacing={4} align="stretch" pt={6}>
        <HStack alignSelf="flex-start" maxWidth="100%" w="auto" flexWrap="wrap">
          <Avatar
            name="Laiba"
            bg="#b1b2e4"
            h={10}
            w={10}
            src="https://bit.ly/dan-abramo"
          />
          <Box
            maxW="100%"
            bg={Colors.chatbg}
            borderRadius="md"
            p={3}
            flex="1"
          >
            <TruncatedText>
              nobis! Excepturicxgxdfgdxfh nobis! Excepturicxgxdfgdxfhgfgdfgffcbhfgchg nihil qui molestias culpa!
              gfgdfgffcbhfgchg nihil qui molestias culpa! nobis! Excepturicxgxdfgdxfh nobis! Excepturicxgxdfgdxfhgfgdfgffcbhfgchg nihil qui molestias culpa!
              gfgdfgffcbhfgchg nihil qui molestias culpa!
            </TruncatedText>
          </Box>
        </HStack>

        <HStack alignSelf="flex-end" maxWidth="100%" w="auto" flexWrap="wrap" justifyContent="flex-end">
          <Box
            maxW="100%"
            bg={Colors.sentChat}
            color={Colors.white}
            borderRadius="md"
            p={3}
            flex="1"
            textAlign="right"
          >
            <TruncatedText>
              nobis! Excepturicxgxdfgdxfhgfgdfgffcbhfgchg nihil qui molestias culpa!
              nobis! Excepturicxgxdfgdxfhgfgdfgffcbhfgchg nihil qui molestias culpa!
              iste
            </TruncatedText>
          </Box>
          <Avatar
            name="Fiza"
            bg="pink"
            h={10}
            w={10}
            src="https://bit.ly/dan-abramo"
          />
        </HStack>
      </VStack>
      </Box>
    
      <Box display={'flex'}>
      <CustomInputFields.CustomThemePurpleFeild 
      icon={APP_ICONS.CHATINPUT}
      rightIcon={APP_ICONS.SEND}
      text={'Message..'}
      width={{ base: 'inherit', sm: 'inherit', md: 'inherit' }}
       />
       <Icon
       as={APP_ICONS.GALLERY}
       color={Colors.grey}
       fontSize={24}
ml={2}
       mt={2}
       />
      </Box>
    </Box>
  );
}

export default ChatContainer;
