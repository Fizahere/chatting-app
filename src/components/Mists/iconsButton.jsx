import React from "react";
import { IconButton, } from "@chakra-ui/react";
import { Colors } from "../../assets/constants/colors";
import { APP_ICONS } from "../../assets/constants/icons";

function CustomIconButton(props) {
  const { icon, color } = props;
  return (
    <IconButton
    bg={Colors.searchInput}
    borderRadius={50}
    p={3}
    border={'2px solid grey'}
    icon={<APP_ICONS.USER
      fontSize={17}
      color={Colors.grey}
    />} 
    />
  );
}

export default CustomIconButton;
