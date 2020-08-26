import { Flex, Heading, Box, Button, Icon, Text } from '@chakra-ui/core'
import React from 'react'



    const Visimisi = () => {
 
        return(

    <Flex justifyContent="center" alignItems="center" w="100%" bg="white">
        
        <Flex
            width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "1280px", // 992px upwards
            ]}
           
            as="nav"
            textAlign="center"
            alignItems="center"
            bgImage="url('/bekron1.png')"
            bgPos="center"
            bgSize="700px"
            backgroundRepeat="no-repeat"
            justifyContent="center"
            padding="1.5rem"
            bg="white"
            color="black"
           
           
        >
            
          
             <Flex width={[
                "100%", // base
                "100%", // 480px upwards
                "100%", // 768px upwards
                "75%     ", // 992px upwards
            ]}  textAlign="center"  flexDirection="column"
            alignItems="center" justifyContent="center">      
             <Box 
                        fontSize={["1.875rem", "2.25rem"]}
                        fontWeight="bold"
                        fontFamily="heading"
                        color="white"
                        textAlign="center"
                        maxW="200px"
                    ><Text bg="black" px="2" fontFamily="heading">VISI</Text> </Box>
                <Text textAlign="center" mt="5"  fontSize={["xs", "xl"]}>
            Menjadikan PSAF MIPA sebagai wadah dalam pengenalan sistem akademik dan kehidupan kampus serta mendorong mahasiswa untuk memahami dirinya dengan mengembangkan potensi yang dimiliki serta turut aktif berkontribusi untuk FMIPA UI.

               </Text>
               <Box 
                        fontSize={["1.875rem", "2.25rem"]}
                        fontWeight="bold"
                        fontFamily="heading"
                        color="white"
                        textAlign="center"
                        maxW="200px"
                    ><Text bg="#2F80ED" px="2" fontFamily="heading" mt="4">MISI</Text> </Box>
                <Text textAlign="center" mt="5"  fontSize={["xs", "xl"]}>
                    <Text>1. Mengenalkan kehidupan kampus dan sistem yang ada di FMIPA UI kepada mahasiswa baru baik akademis maupun non-akademis.</Text>
                    <Text>
                    2. Membimbing mahasiswa baru untuk turut aktif berkontribusi di FMIPA UI.
                    </Text>
<Text>3. Menerapkan nilai-nilai PPM dan menumbuhkan rasa cinta serta kepedulian terhadap FMIPA.</Text>



               </Text>
               </Flex> 
                
        
        </Flex>



    </Flex>


);
};



export default Visimisi;

