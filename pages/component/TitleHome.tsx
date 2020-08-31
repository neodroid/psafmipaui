import React from "react";
import { Box, Heading, Flex, Text, Button, Link as ChakraLink, Link } from "@chakra-ui/core";
import { motion } from 'framer-motion';


const TitleHome = () => {

    return (


        <Flex
          
            
            w="100%"
            bg=""
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
                bg=""
                color="#2F80ED"


            >
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.4
                        }
                    },
                }}>
                    <Box
                       
                        fontSize={["1.875rem", "2.5rem"]}
                        fontWeight="bold"
                        fontFamily="heading"
                        color="black"
                        
                    >PSAF <Link color="#2F80ED" >MIPA</Link> UI 2020</Box>
                     </motion.div>
                     <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 0.8
                        }
                    },
                }}>
                    <Box
                        fontSize={["xs", "xl"]}
                        color="black"
                    >Kembangkan Potensimu, Mainkan Peranmu!</Box>
         </motion.div>
         <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            delay: 1.2
                        }
                    },
                }}>
                    <Box
                        fontSize={["xs", "xl"]}
                        color="black"
                        fontWeight="bold"
                    >"Secerah Harapan dari Benih Baru"</Box>
         </motion.div>
            </Box>

        </Flex>

    );
};

export default TitleHome;


