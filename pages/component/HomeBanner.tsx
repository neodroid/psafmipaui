import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';

function makeSound(){
    var snare= new Audio("https://www.mboxdrive.com/Jingle%20PSAF.mp3")
    snare.play();
    console.log("play snare");
    
  }


 const HomeBan = () => {
 
    return(



    <Flex justifyContent="center" alignItems="center" mt="0" w="100%" bg="" zIndex={3}>
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
            bg=""
            bgImage="url('/jakun.png')"
            bgPos="center"
            bgSize="cover"
            rounded="lg"
            color="black"
            textAlign="center"
            
        >
           
          
         
            <Button width="fill" borderColor="white" borderWidth="3px"
            variant="solid" bg="#2F80ED" color="white"  rounded="lg" m="2"  
            mt={[
                "5px", // base
                "5px", // 480px upwards
                "450px", // 768px upwards
                "450px", // 992px upwards
            ]}
           shadow="xl"
           onClick={makeSound}
           px="100px"
            >
                 Play
              
            </Button>
           

           

            
           
        </Box>
        <Box>

        </Box>


    </Flex>


);
        };


export default HomeBan;