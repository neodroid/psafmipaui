import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



    const TitleHome = () => {
 
        return(

     
            <Flex
                mt="10"
           
                w="100%"
                bg="#EAF2FD"
                align="center"
                justify="center"
                
            >
                <Box
                mt={[
                    "0", // base
                    "0", // 480px upwards
                    "5", // 768px upwards
                    "20", // 992px upwards
                ]}
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
                        fontSize={["1.875rem", "2.5rem"]}
                        fontWeight="bold"
                        fontFamily="heading"
                        color="black"
                    >PSAF <Link color="#2F80ED" >MIPA</Link> UI 2020</Box>
                    <Box 
                        fontSize={["xs", "xl"]} 
                        color="black"
                    >Kembangkan Potensimu, Mainkan Peranmu!</Box>


                </Box>
            </Flex>
     
);
};

export default TitleHome;

   
