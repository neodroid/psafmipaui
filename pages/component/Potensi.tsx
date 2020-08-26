import { Flex, Heading, Box, Button, Icon, Text, Link } from '@chakra-ui/core'
import React from 'react'



    const Potensi = () => {
 
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
            <Box m="5" 
             maxW={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "55%", // 992px upwards
            ]}
            justifyContent="center"
            >
                <Heading mb="2" as="h1" fontSize={["1.875rem", "2rem"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold" color="black"> POSISI, <Link color="#2F80ED">POTENSI{" "}</Link >DAN PERAN</Heading>
                
                <Text color="black" textAlign="justify" fontSize={["xs", "xl"]}   letterSpacing={".1rem"}   w="100%">Menentukan posisi, potensi, dan peran artinya kita harus mengetahui kedudukan kita sebagai manusia ditiap tempat yang berbeda seperti apa, misalkan pada saat di kampus kedudukan kita sebagai mahasiswa, tetapi saat kita di lingkungan rumah kedudukan kita sebagai warga. Setelah mengetahui posisi kita dalam lingkup lingkungan dan individu, selanjutnya adalah kita mengetahui kemampuan yang memungkinkan untuk dikembangkan dari segi kekuatan, kesanggupan, dan daya serta dapat dimanfaatkan dalam kehidupan manusia itu sendiri. Setelah kita mengetahui potensi yang kita miliki sebagai masing – masing individu, itu akan mempermudah kita untuk menentukan peran yang akan kita lakukan.


</Text >
              
        </Box>
            <Box 
             width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "40%", // 992px upwards
            ]}
            >
                <img src="/potensi.png"/>
            </Box>
        </Flex>



    </Flex>


);
};



export default Potensi;
