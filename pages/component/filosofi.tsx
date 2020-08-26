import { Flex, Heading, Box, Button, Icon, Text, Link } from '@chakra-ui/core'
import React from 'react'



    const Filosofi = () => {
 
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
            bgImage="url('/bekron2.png')"
            bgPos="center"
            bgSize="700px"
            backgroundRepeat="no-repeat"
            wrap="wrap"
            padding="1.5rem"
            bg="white"
            color="#2F80ED"
            flexDirection="row"
           
        >
            <Box 
             width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "40%", // 992px upwards
            ]}
            >
                <img src="/logo full.png"/>
            </Box>
            <Box m="5" 
             maxW={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "55%", // 992px upwards
            ]}
            justifyContent="center"
            >
                <Heading mb="2" as="h1" fontSize={["1.875rem", "2rem"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold" color="black" textAlign="center"> FILOSOFI LOGO</Heading>
                <Heading mb="2" as="h1" fontSize={["xs", "xl"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold" color="black" textAlign="center"> "Secerah Harapan dari Benih Baru"</Heading>
               
                <Text color="black"  fontSize={["xs", "xl"]} textAlign="justify" w="100%">Mahasiswa baru FMIPA UI 2020 merupakan sebuah harapan baru yang dimiliki FMIPA UI, mereka diharapkan menjadi awal dari sebuah perubahan. Mereka dianalogikan sebagai benih yang artinya mereka akan tumbuh dan menjadi sosok yang diharapkan dapat membawa perubahan sesuai dengan posisi, potensi, dan peran yang mereka miliki serta dengan jalan pilihannya masing - masing.



</Text >
                
        </Box>
            
        </Flex>



    </Flex>


);
};



export default Filosofi;
