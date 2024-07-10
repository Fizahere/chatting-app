import React from "react";
import { VStack, IconButton, Box, Text } from "@chakra-ui/react";
import { Colors } from "../assets/constants/colors";
import { APP_ICONS } from "../assets/constants/icons";
import CustomIconButton from "./Mists/iconsButton";

function SideBarMenu() {
  return (
    <>
      <VStack spacing={0} mt={10} mr={4}>
        <CustomIconButton
          icon={APP_ICONS.CHAT}
          _color={Colors.grey}
          text={"All Chat"}
        />
        <CustomIconButton
          icon={APP_ICONS.WORK}
          _color={Colors.grey}
          text={"Work"}
        />
        <CustomIconButton
          icon={APP_ICONS.FOLDER}
          _color={Colors.grey}
          text={"Friends"}
        />
        <CustomIconButton
          icon={APP_ICONS.USER}
          _color={Colors.grey}
          text={"Profile"}
        />
        <CustomIconButton
          icon={APP_ICONS.LOGOUT}
          _color={Colors.grey}
          text={"Logout"}
        />
      </VStack>
    </>
  );
}

export default SideBarMenu;
