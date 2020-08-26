import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'


const MenuItems = ( props ) => (
    <Flex
        maxW={[
            "50%", // base
            "50%", // 480px upwards
            "35%", // 768px upwards
            "25%", // 992px upwards
        ]}
       
        // borderWidth="1px"
        // borderColor="#999999"
        flexDirection="column"
        bg="white"
    >
        <Box m="2"> <img src={props.img} /></Box>
       
    </Flex>
);

const FotoMedia = (props) => {

    return (

        <Flex  alignItems="center" w="100%" bg="white" flexDirection="column" my="10">
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
                <MenuItems img={props.logo1}/>
                <MenuItems img={props.logo2} />
                <MenuItems img={props.logo3} />
                <MenuItems img={props.logo4}/>

                
            </Flex>



        </Flex>


    );
};



export default FotoMedia;

