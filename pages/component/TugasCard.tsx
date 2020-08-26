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
        color="blue"
    >
        
        <Box textAlign="center" fontWeight="bold" color="blue">{props.nama}</Box>
        <Box textAlign="center">{props.jabatan}</Box>
    </Flex>
);

const TugasCard = (props) => {

    return (

        <Flex   w="100%" bg="white" flexDirection="column">
           
            <Flex
                width={[
                    "100%", // base
                    "100%", // 480px upwards
                    "100%", // 768px upwards
                    "100%", // 992px upwards
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
                flexDirection="column"
                alignItems="center"
            >
                <Text fontWeight="bold" fontFamily="heading" fontSize="xl">{props.judul}</Text>
                <MenuItems nama={props.tugas1} jabatan={props.tugas2}/>
               

                
            </Flex>



        </Flex>


    );
};



export default TugasCard;

