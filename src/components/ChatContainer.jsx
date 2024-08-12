import React, { useState, useRef, useEffect } from "react";
import { Box, Heading, Text, HStack, VStack, Avatar, Icon, IconButton } from "@chakra-ui/react";
import { collection, query, orderBy, limit, addDoc, serverTimestamp } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth,firestore } from "../config/firebaseConfig";
import { CustomInputFields } from "./Mists/InputFeild";
import { APP_ICONS } from "../assets/constants/icons"; 
import { Colors } from "../assets/constants/colors";

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
  const messagesRef = collection(firestore, "messages");
  const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(messagesQuery);
  const dummy = useRef();

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    try {
      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });
      setFormValue("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error sending message: ", error);
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
          {messages && messages.map((msg, index) => (
            <HStack
              key={index}
              alignSelf={msg.uid === auth.currentUser.uid ? "flex-end" : "flex-start"}
              maxWidth="100%"
              w="auto"
              flexWrap="wrap"
              spacing={2}
              justifyContent={msg.uid === auth.currentUser.uid ? "flex-end" : "flex-start"}
            >
              {msg.uid !== auth.currentUser.uid && (
                <Avatar name="User" bg="#b1b2e4" h={10} w={10} src={msg.photoURL} mr={2} />
              )}
              <Box
                maxW="80%"
                bg={msg.uid === auth.currentUser.uid ? Colors.sentChat : Colors.chatbg}
                color={msg.uid === auth.currentUser.uid ? Colors.white : Colors.font}
                borderRadius="md"
                p={3}
                textAlign={msg.uid === auth.currentUser.uid ? "right" : "left"}
              >
                {msg.text.length >= 600 ? <TruncatedText>{msg.text}</TruncatedText> : <Text>{msg.text}</Text>}
              </Box>
              {msg.uid === auth.currentUser.uid && (
                <Avatar name="You" bg="pink" h={10} w={10} src={msg.photoURL} ml={2} />
              )}
            </HStack>
          ))}
          <Box ref={dummy}></Box>
        </VStack>
      </Box>

      <Box mt={4}>
        <form onSubmit={sendMessage}>
          <Box display={"flex"}>
            <CustomInputFields.CustomThemePurpleFeild
              icon={APP_ICONS.CHATINPUT}
              rightIcon={APP_ICONS.SEND}
              rightIconButton={APP_ICONS.SEND}
              text={"Message.."}
              f_value={formValue}
              onChangeState={(e) => setFormValue(e.target.value)}
              width={{ base: "inherit", sm: "inherit", md: "inherit" }}
            />
            {/* <IconButton
              type="submit"
              icon={<APP_ICONS.SEND />}
              color={Colors.grey}
              fontSize={24}
              ml={2}
              mt={2}
            /> */}
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default ChatContainer;
