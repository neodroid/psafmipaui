import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'



    const Pengertian = () => {
 
        return(


    <Flex justifyContent="center" alignItems="center" w="100%" bg="white">
        <Flex
            width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1060px", // 992px upwards
            ]}
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="white"
            color="#2F80ED"
            flexDirection="row"
           
        >
            <Box m="5" 
             maxW={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "40%", // 992px upwards
            ]}
            justifyContent="center"
            >
                <Heading as="h1" fontSize={["1.875rem", "2rem"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold"> <Text color="black"  fontFamily="heading">Apa itu</Text >PSAF FMIPA UI 2020?</Heading>
                <Heading as="h1" fontSize={["xs", "xl"]}   letterSpacing={".1rem"}  fontFamily="default" fontWeight="bold" w="100%" > 
                <Text color="black" textAlign="justify">Merupakan pengenalan sistem akademis fakultas bagi mahasiswa FMIPA UI 2020 untuk membantu mahasiswa baru mengenal kehidupan kampus, menjalankan akademis dan non akademis dalam perkuliahan serta sebagai tempat untuk mahasiswa baru dapat mengenal teman seangkatannya walaupun berbeda departemen atau jurusan.</Text >
                </Heading>
        </Box>
            <Box 
             width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "50%", // 992px upwards
            ]}
            >
                <img src="/apaitu.png"/>
            </Box>
        </Flex>



    </Flex>


);
};



export default Pengertian;