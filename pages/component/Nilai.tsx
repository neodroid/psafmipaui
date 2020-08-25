import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'



    const Nilai = () => {
 
        return(

    <Flex justifyContent="center" alignItems="center" w="100%" bg="white">
        <Flex
            width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1280px", // 992px upwards
            ]}
            as="nav"
            align="center"
            justify="space-between"
            bgImage="url('/bekron1.png')"
            bgPos="center"
            bgSize="700px"
            backgroundRepeat="no-repeat"
            wrap="wrap"
            padding="1.5rem"
            bg="white"
            color="black"
            flexDirection="row"
           
        >
            <Flex  m="1"
             maxW={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "48%", // 992px upwards
            ]}
            rounded="lg"
            borderWidth="1px"
            borderColor="#999999"
            h={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "200px", // 992px upwards
            ]}
            bg="white"
            >
                <Box maxW="40%" m="2"> <img src="/otak.png"/></Box>
                <Box>

                <Heading as="h1" fontSize={["1.5rem", "1.875rem"]} letterSpacing={".1rem"}  fontFamily="default" fontWeight="bold"> <Text color="black">Sadar</Text ></Heading>
                <Heading as="h1" fontSize={["xs", "xl"]}   letterSpacing={".1rem"}  fontFamily="default" w="100%" > 
                Merupakan sifat merasa; tahu dan mengerti sehingga segala perbuatan yang dilakukan atas dasar kesadaran, akal sehat, dan merupakan pilihan terbaik.
                 </Heading>
                </Box>
                
        </Flex>
        <Flex  m="1"
             maxW={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "48%", // 992px upwards
            ]}
            h={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "200px", // 992px upwards
            ]}
            
            bg="white"
            rounded="lg"
            borderWidth="1px"
            borderColor="#999999"
            >
                <Box maxW="40%" m="2"> <img src="/gear.png"/></Box>
                <Box>

                <Heading as="h1" fontSize={["1.5rem", "1.875rem"]} letterSpacing={".1rem"}  fontFamily="default" fontWeight="bold"> <Text color="black">Kontributif</Text ></Heading>
                <Heading as="h1" fontSize={["xs", "xl"]}   letterSpacing={".1rem"}  fontFamily="default" w="100%" > 
                Merapikan kesadaran untuk memberikan dampak positif untuk kemajuan bersama melalui posisi, potensi, dan peran yang ia miliki.
                 </Heading>
                </Box>
                
        </Flex>
        </Flex>



    </Flex>


);
};



export default Nilai;

