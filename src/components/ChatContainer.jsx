import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Avatar,
  Icon,
} from "@chakra-ui/react";
import { auth } from "../config/firebaseConfig";
import { CustomInputFields } from "./Mists/InputFeild";
import { APP_ICONS } from "../assets/constants/icons";
import { Colors } from "../assets/constants/colors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const TruncatedText = ({ children, maxLines = 2 }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  return (
    <Box onClick={() => setIsTruncated(!isTruncated)} cursor="pointer" w="100%">
      <Text isTruncated={isTruncated} noOfLines={isTruncated ? maxLines : undefined}>
        {children}
      </Text>
      {isTruncated && <Text as="span" ml={2}>...</Text>}
    </Box>
  );
};

function ChatContainer() {
  const dummy = useRef();
  const [inputValue, setInputValue] = useState('');
  const [promptResponses, setPromptResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const genAI = new GoogleGenerativeAI("AIzaSyCKhoblkz5pmVWRfIiMYIWdTbtb2VzSFms");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getResponseForGivenPrompt = async (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(inputValue);
      let response = await result.response.text();
      response = response.replace(/(?:\r\n|\r|\n)/g, '\n');
      setPromptResponses([
        ...promptResponses,
        { question: inputValue, answer: response, isUser: true },
        { question: inputValue, answer: response, isUser: false }
      ]);

      setInputValue('');
    } catch (error) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box w="100%" p="4" color={Colors.font} display="flex" flexDirection="column" height="100vh">
      <Box display="flex" justifyContent="space-between" borderBottom="1px solid grey" mb={4}>
        <Heading fontSize="25" fontWeight="bold">Chat</Heading>
        <Box mr={5}>
          <Icon as={APP_ICONS.PHONE} fontSize={20} mr={6} />
          <Icon as={APP_ICONS.VIDEO} fontSize={20} />
        </Box>
      </Box>

      <Box flex="1" overflowY="auto" pr={2}>
        <VStack spacing={4} align="stretch" pt={6}>
          {promptResponses.map((item, index) => (
            <HStack
              key={index}
              alignSelf={item.isUser ? "flex-end" : "flex-start"}
              maxWidth="100%"
              w="auto"
              flexWrap="wrap"
              spacing={2}
              justifyContent={item.isUser ? "flex-end" : "flex-start"}
            >
              {!item.isUser && (
                <Avatar name="AI" bg="#b1b2e4" h={10} w={10} mr={2} />
              )}
              <Box
                maxW="80%"
                bg={item.isUser ? Colors.sentChat : Colors.chatbg}
                color={item.isUser ? Colors.white : Colors.font}
                borderRadius="md"
                p={3}
                textAlign="left"
              >
                {item.isUser ? (
                  <Text>{item.question}</Text>
                ) : (
                  <TruncatedText whiteSpace="pre-line">{item.answer}</TruncatedText>
                )}
              </Box>
              {item.isUser && (
                <Avatar name="You" bg="pink" h={10} w={10} src={auth.currentUser.photoURL} ml={2} />
              )}
            </HStack>
          ))}
          <Box ref={dummy}></Box>
        </VStack>
      </Box>

      <Box my={4}>
        <form onSubmit={getResponseForGivenPrompt}>
          <Box display="flex">
            <CustomInputFields.CustomThemePurpleFeild
              icon={APP_ICONS.CHATINPUT}
              rightIcon={APP_ICONS.SEND}
              isLoading={loading}
              text="Message.."
              f_value={inputValue}
              onChangeState={handleInputChange}
              width="100%"
            />
          </Box>
        </form>
        {error && <Text color={'red'}>{error}</Text>}
      </Box>
    </Box>
  );
}

export default ChatContainer;
