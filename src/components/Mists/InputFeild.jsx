import React from 'react'
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { APP_ICONS } from "../../assets/constants/icons";
import { Colors } from "../../assets/constants/colors";

function CustomInputFeild() {
  return (
    <>
        <InputGroup display={"flex"} justifyContent={"space-between"}>
          <InputLeftElement ml={3} mt={2.5}>
            <APP_ICONS.SEARCH color={Colors.grey} fontSize={20} />
          </InputLeftElement>
          <Input
            borderRadius={10}
            p={1}
            w={{
              base:200,
              sm:40,
              md:180,
            }}
            bg={Colors.searchInput}
            placeholder="Search.."
            pl={10}
          />
        </InputGroup>
    </>
  )
}

export default CustomInputFeild
