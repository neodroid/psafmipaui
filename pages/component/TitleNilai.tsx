import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";

const MenuItems = (
    <Link color="black">
      YANG DITANAMKAN
    </Link>
  );

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
export const TitleNilai = () => (


     
            <Flex
                w="100%"
                bg="white" 
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
                    bg="white"
                    color="#2F80ED"
                    
                  
                >
                    <Box 
                        fontSize={["1.875rem", "2.25rem"]}
                        fontWeight="bold"
                        color="blue"
                ><a >NILAI </a> {" "}{MenuItems}</Box>
                   


                </Box>
            </Flex>
       
    );


    TitleNilai.defaultProps = {
        title: 'with-chakra-ui',
    }
