import React from "react";
import { Center, ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import { auth } from "./config/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner } from "@chakra-ui/react";

const theme = extendBaseTheme({
  components: {},
});

const App = () => {
  const [user, loading, error] = useAuthState(auth);
  const authToken = localStorage.getItem("auth-token");

  if (loading) {
    return <Center><Spinner mt={20} h={20} w={20}/></Center>
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  return (
    <ChakraProvider theme={theme}>
      {user && authToken ? <Chat /> : <Login />}
    </ChakraProvider>
  );
};

export default App;
