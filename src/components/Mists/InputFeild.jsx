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
  const { 
    text, 
    icon,
     width, 
    rightIcon,
    f_value,
    onChangeState,
   } = props
  const widthStyle = typeof width === 'object' ? width : { base: width };

  return (
    <InputGroup display={"flex"} justifyContent={"space-between"}>
      <InputLeftElement ml={3} mt={2.5}>
        <Icon as={icon} color={Colors.grey} fontSize={20} />
      </InputLeftElement>
      <Input
        borderRadius={10}
        p={2}
        value={f_value}
        onChange={onChangeState}
        width={widthStyle}
        bg={Colors.ThemePurple}
        placeholder={text}
        _placeholder={{ color: Colors.grey, }}
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
  const { text, icon, onClickHandler, type } = props;
  return (
    <InputGroup display={"flex"} justifyContent={"space-between"}>
      <InputRightElement mr={4} mt={2.5}>
        <Icon cursor={onClickHandler ? 'pointer' : 'default'} as={icon} color={Colors.grey} fontSize={20} onClick={onClickHandler ? onClickHandler : null} />
      </InputRightElement>
      <Input
        type={type ? type : text}
        color={Colors.font}
        p={3}
        w={270}
        bg={Colors.lightGrey}
        _placeholder={{ color: Colors.grey, }}
        placeholder={text} pl={3} />
    </InputGroup>
  );
}

export const CustomInputFields = {
  CustomThemePurpleFeild,
  CustomFormInputFeild,
};
