import React, { useState } from "react";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

const theme = extendBaseTheme({
  components: {},
});

const App = () => {
  const [user, setUser] = useState(true);

  return (
    <ChakraProvider theme={theme}>{user ? <Chat /> : <Login />}</ChakraProvider>
  );
};

export default App;
