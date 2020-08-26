import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";



    const TitleProfile = ({ children }) => {
 
        return(

     
            <Flex
                mt="20"
           
                w="100%"
                bg="white"
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
                    bg="white"
                    color="#2F80ED"
                    
                  
                >
                    <Box 
                        fontSize={["1.875rem", "2.5rem"]}
                        fontWeight="bold"
                        fontFamily="heading"
                        color="black"
                    >{children} </Box>
                   

                </Box>
            </Flex>
     
);
};

export default TitleProfile;

   
