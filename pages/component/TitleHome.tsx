import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
export const TitleHome = () => (


     
            <Flex
                w="100%"
                bg="#EAF2FD"
                align="center"
                justify="center"
            >
                <Box
                    width={[
                        "100%", // base
                        "100%", // 480px upwards
                        "100%", // 768px upwards
                        "75%", // 992px upwards
                    ]}
                    as="nav"
                    textAlign="center"
                    
                    
                    padding="1.5rem"
                    bg="#EAF2FD"
                    color="#2F80ED"
                    
                  
                >
                    <Box 
                        fontSize={["1.875rem", "2.25rem"]}
                        fontWeight="bold"
                       
                        color="black"
                    >PSAF MIPA UI 2020</Box>
                    <Box 
                        fontSize={["xs", "xl"]} 
                        color="black"
                    >Kembangkan Potensimu, Mainkan Peranmu!</Box>


                </Box>
            </Flex>
       
    );


    TitleHome.defaultProps = {
        title: 'with-chakra-ui',
    }
