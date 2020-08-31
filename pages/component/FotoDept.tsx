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
        h={[
            "300px", // base
            "400px", // 480px upwards
            "400px", // 768px upwards
            "300px", // 992px upwards
        ]}
        // borderWidth="1px"
        // borderColor="#999999"
        flexDirection="column"
       
    >
        <Box m="2"> <img src={props.img} /></Box>
        <Box textAlign="center" fontWeight="bold">{props.nama}</Box>
        <Box textAlign="center">{props.jabatan}</Box>
        <Box textAlign="center">{props.dept}</Box>
    </Flex>
);

const FotoDept = (props) => {

    return (

        <Flex  alignItems="center" w="100%"  flexDirection="column" bg={props.bg}>
            <Text fontWeight="bold" fontFamily="heading" fontSize="xl">{props.departemen}</Text>
            <Flex
                bg={props.bg}
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
                color="black"
                flexDirection="row"

            >
                <MenuItems img={props.logo1} nama={props.namakiri} jabatan={props.jabatankiri} dept={props.deptkiri}/>
                <MenuItems img={props.logo2} nama={props.nama1} jabatan={props.jabatan1} dept={props.dept1}/>
                <MenuItems img={props.logo3} nama={props.nama2} jabatan={props.jabatan2} dept={props.dept2}/>
                <MenuItems img={props.logo4} nama={props.namakanan} jabatan={props.jabatankanan} dept={props.deptkanan}/>

                
            </Flex>



        </Flex>


    );
};



export default FotoDept;

