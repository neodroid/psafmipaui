import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'




 const HomeBan = () => {
 
    return(



    <Flex justifyContent="center" alignItems="center" mt="0" w="100%" bg="#EAF2FD">
        <Box
            width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1060px", // 992px upwards
            ]}

            height={[
                "350px", // base
                "400px", // 480px upwards
                "600px", // 768px upwards
                "546px", // 992px upwards
            ]}
            bg="#EAF2FD"
            bgImage="url('/jakun.png')"
            bgPos="center"
            bgSize="cover"
            rounded="lg"
            color="black"
            textAlign="center"
        >
           

            <Button width="fill" 
            variant="solid" bg="#2F80ED" color="white"  rounded="lg" m="2"  
            mt={[
                "5px", // base
                "5px", // 480px upwards
                "450px", // 768px upwards
                "450px", // 992px upwards
            ]}
           
            >
               Cari Kelompok
            </Button>
            <Button width="150px" 
            variant="outline" bg="white" color="#2F80ED"  rounded="lg" m="2"  borderWidth="2px" borderColor="#2F80ED" 
            mt={[
                "5px", // base
                "5px", // 480px upwards
                "450px", // 768px upwards
                "450px", // 992px upwards
            ]}
            
            >
               Lihat Tugas
            </Button>
        </Box>
        <Box>

        </Box>


    </Flex>


);
        };


export default HomeBan;