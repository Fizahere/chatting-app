import React from "react";
import { Box, Icon, Button } from "@chakra-ui/react";
import { Colors } from "../../assets/constants/colors";
import { APP_ICONS } from "../../assets/constants/icons";

function CustomIconButton(props) {
  const { icon, _color, text, onClickHanlder } = props;
  return (
    <Box textAlign={"center"}>
      <Button
        _hover={{
          bg: Colors.iconhover,
          color: Colors.white,
        }}
        borderRadius={8}
        w={20}
        py={4}
        color={_color}
        m={1}
        fontSize={10}
        display={"flex"}
        flexDirection={"column"}
        onClick={onClickHanlder ? onClickHanlder : null}
      >
        <Icon as={icon} fontSize={25} />
        {text}
      </Button>
    </Box>
  );
}

export default CustomIconButton;
