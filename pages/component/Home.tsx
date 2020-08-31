import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import TitleHome from './TitleHome';
import Header from './header';
import HomeBan from './HomeBanner';



 const HomeFix = () => {
 
    return(

        <Flex  w="100%" flexDirection="column" 
 
            bg=""
            >
                 <Box
                  zIndex={3}
           
            bg=""
            bgImage="url('/Group 99.png')"
            bgPos="center"
            bgSize="cover"
            rounded="lg"
            color="black"
            textAlign="center"
            
        >
      <Header />
       <TitleHome/>
      <HomeBan/>
      </Box>
      </Flex>

    


);
        };


export default HomeFix;