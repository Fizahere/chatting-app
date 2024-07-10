import React from "react";
import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { APP_ICONS } from "../../assets/constants/icons";
import { Colors } from "../../assets/constants/colors";

function CustomThemePurpleFeild(props) {
  const {text,icon,width,rightIcon}=props
  const widthStyle = typeof width === 'object' ? width : { base: width };

  return (
    <InputGroup display={"flex"} justifyContent={"space-between"}>
      <InputLeftElement ml={3} mt={2.5}>
      <Icon as={icon} color={Colors.grey} fontSize={20} />
      </InputLeftElement>
      <Input
        borderRadius={10}
        p={2}
        width={widthStyle}
        bg={Colors.ThemePurple}
        placeholder={text}
        pl={10}
      />
      {rightIcon ?
       <InputRightElement mr={3} mt={2.5}>
      <Icon as={rightIcon} color={Colors.grey} fontSize={20} />
      </InputRightElement>
      :
      null
    }
    </InputGroup>
  );
}

function CustomFormInputFeild(props) {
  const { text, icon } = props;
  return (
    <InputGroup display={"flex"} justifyContent={"space-between"}>
      <InputRightElement mr={4} mt={2.5}>
        <Icon as={icon} color={Colors.grey} fontSize={20} />
      </InputRightElement>
      <Input p={3} w={270} bg={Colors.lightGrey} placeholder={text} pl={3} />
    </InputGroup>
  );
}

export const CustomInputFields = {
  CustomThemePurpleFeild,
  CustomFormInputFeild,
};
