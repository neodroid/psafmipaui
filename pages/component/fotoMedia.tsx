import { Flex, Heading, Box, Button, Icon, Text, Link } from '@chakra-ui/core'
import React from 'react'


const MenuItems = ( props ) => (
    <Flex
        maxW={[
            "40%", // base
            "40%", // 480px upwards
            "40%", // 768px upwards
            "25%", // 992px upwards
        ]}
       
        // borderWidth="1px"
        // borderColor="#999999"
        flexDirection="column"
       
    >
        <Box m="2"> <Link href={props.link} isExternal> <img src={props.img} /></Link></Box>
       
    </Flex>
);

const FotoMedia = (props) => {

    return (

        <Flex  alignItems="center" w="100%" bg="white" flexDirection="column" my="10">
              <Box
                    width={[
                        "90%", // base
                        "90%", // 480px upwards
                        "90%", // 768px upwards
                        "600px", // 992px upwards
                    ]}
                >
                    <img src="/media.png" />
                </Box>
            <Text fontWeight="bold" fontFamily="heading" fontSize="xl">{props.departemen}</Text>
            <Flex
                width={[
                    "100%", // base
                    "100%", // 480px upwards
                    "100%", // 768px upwards
                    "900px", // 992px upwards
                ]}
                as="nav"
                align="center"
                justify="space-between"
                //bgImage="url('/bekron1.png')"
                bgPos="center"
                bgSize="700px"
                backgroundRepeat="no-repeat"
                wrap="wrap"
                padding="1.5rem"
                bg="white"
                color="black"
                flexDirection="row"

            >
              
               <MenuItems img={props.logo1} link={props.link1}/>
                    
               <MenuItems img={props.logo2} link={props.link2}/>
                  
               <MenuItems img={props.logo3} link={props.link3}/>
                   
                   
               <MenuItems img={props.logo4} link={props.link4}/>
                   
               

                
            </Flex>



        </Flex>


    );
};



export default FotoMedia;

