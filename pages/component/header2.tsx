import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import Link from "next/link";

const MenuItems = ({ children }) => (
  <Text mt={[
    "5", // base
    "5", // 480px upwards
    "5", // 768px upwards
    "0", // 992px upwards
  ]}
    textAlign="justify"
    mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header2 = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      w="100%"
      bg="white"
      align="center"
      justify="center"
      pos="fixed" top="0" left="0"
      overflow="hidden"
      zIndex={2}
    >
      <Flex
        width={[
          "100%", // base
          "100%", // 480px upwards
          "100%", // 768px upwards
          "75%", // 992px upwards
        ]}
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="white"
        color="#2F80ED"
      >
        <Flex align="center" mr={5} justifyContent="center"
        >
          <Heading as="h1" letterSpacing={"-.1rem"}>
            <Box
              width={[
                "30px", // base
                "30px", // 480px upwards
                "40px", // 768px upwards
                "50px", // 992px upwards
              ]}
              h="100%"
            ><img src="/logo.png" /></Box>
          </Heading>   <Heading as="h1" letterSpacing={"-.1rem"}>
            <Box ml="2"
              width={[
                "80px", // base
                "80px", // 480px upwards
                "80px", // 768px upwards
                "100px", // 992px upwards
              ]}
              h="100%"
            ><img src="/fmipa.png" /></Box>
          </Heading>
          <Text color="black" ml="2">PSAF MIPA UI 2020</Text>
        </Flex>


        <Box
          display={[
            "block", // base
            "block", // 480px upwards
            "block", // 768px upwards
            "none", // 992px upwards
          ]}
          onClick={handleToggle}>
          <svg
            fill="black"
            width="20px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Flex
          display={[
            show ? "block" : "none", // base
            show ? "block" : "none", // 480px upwards
            show ? "block" : "none", // 768px upwards
            "flex", // 992px upwards
          ]}
          width={[
            "full", // base
            "full", // 480px upwards
            "full", // 768px upwards
            "auto", // 992px upwards
          ]}


          flexGrow={1}
          textAlign="justify"
          flexDirection="row-reverse"
        >
          <MenuItems><Link href="/tugas">TUGAS</Link></MenuItems>
          <MenuItems><Link href="/mentoring">MENTORING</Link></MenuItems>
          <MenuItems><Link href="/media">MEDIA</Link></MenuItems>
          <MenuItems><Link href="/departemen">DEPARTEMEN</Link></MenuItems>
          <MenuItems><Link href="/profile">PROFIL</Link></MenuItems>
          <MenuItems><Link href="/">HOME</Link></MenuItems>
        </Flex>

      </Flex>
    </Flex>
  );
};

export default Header2;
