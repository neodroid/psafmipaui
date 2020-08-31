import { Flex, Heading, Box, Button, Icon, Text, Link } from '@chakra-ui/core'
import React from 'react'


const MenuItems = ( props ) => (
    <Flex
        maxW={[
            "100%", // base
            "100%", // 480px upwards
            "40%", // 768px upwards
            "30%", // 992px upwards
        ]}
        
        // borderWidth="1px"
        // borderColor="#999999"
        flexDirection="column"
        bg="white"
        color="blue"
    >
        
       <Link href={props.link1} isExternal> <Box my="2" textAlign="center"  color="Blue">{props.tugas1}</Box></Link>
       <Link href={props.link2} isExternal> <Box my="2" textAlign="center"  color="Blue">{props.tugas2}</Box></Link>
       <Link href={props.link3} isExternal> <Box my="2" textAlign="center"  color="Blue">{props.tugas3}</Box></Link>
       <Link href={props.link4} isExternal> <Box my="2" textAlign="center"  color="Blue">{props.tugas4}</Box></Link>
       <Link href={props.link5} isExternal> <Box my="2" textAlign="center"  color="Blue">{props.tugas5}</Box></Link>
       <Link href={props.link6} isExternal> <Box my="2" textAlign="center"  color="Blue">{props.tugas6}</Box></Link>
        
    </Flex>
);

const TugasCard = (props) => {

    return (

        <Flex   w="100%" bg="white" flexDirection="column"  alignItems="center" >
           <Box
                    width={[
                        "90%", // base
                        "90%", // 480px upwards
                        "90%", // 768px upwards
                        "600px", // 992px upwards
                    ]}
                >
                    <img src={props.gambar} />
                </Box>
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
                <MenuItems tugas1={props.tugas1} tugas2={props.tugas2} tugas3={props.tugas3} tugas4={props.tugas4} tugas5={props.tugas5}
                link1={props.link1} link2={props.link2} link3={props.link3} link4={props.link4} link5={props.link5} tugas6={props.tugas6} link6={props.link6}
                />
               

                
            </Flex>



        </Flex>


    );
};



export default TugasCard;

