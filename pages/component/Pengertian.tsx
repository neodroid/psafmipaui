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
               
                <Text color="black" textAlign="justify" fontSize={["xs", "xl"]}   letterSpacing={".1rem"}   w="100%">PSAF MIPA UI 2020 merupakan kepanjangan dari Pengenalan Sistem Akademik Fakultas Matematika dan Ilmu Pengetahuan Alam. PSAF MIPA UI 2020 akan membantu mahasiswa baru FMIPA UI untuk mengenal kehidupan kampus secara akademik maupun non akademik dalam menghadapi dunia perkuliahan, serta sebagai sarana untuk mehasiswa baru FMIPA UI untuk dapat mengenal teman seangkatannya dari berbagai jurusan di FMIPA.</Text >
                
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