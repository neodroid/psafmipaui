import { Flex, Heading, Box, Button, Icon, Text, Link } from '@chakra-ui/core'
import React from 'react'



const KetentuanKelompok = () => {

    return (


        <Flex justifyContent="center" alignItems="center" w="100%" bg="white"  flexDirection="column">
            <Box
                    width={[
                        "90%", // base
                        "90%", // 480px upwards
                        "90%", // 768px upwards
                        "600px", // 992px upwards
                    ]}
                >
                    <img src="/mentoring fektor.png" />
                </Box>
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
                flexDirection="column"

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
                    <Text color="black" fontSize={["xs", "xl"]} textAlign="center" w="100%">Halo Keluarga Baru FMIPA UI!
                 </Text >
                    <Heading mb="2" as="h1" fontSize={["xs", "xl"]} letterSpacing={".1rem"} fontFamily="heading" fontWeight="bold" color="black" textAlign="center"> Di PSAF MIPA UI 2020 nanti, tentu kamu

gak akan pernah sendiri!</Heading>

                    <Text color="black" fontSize={["xs", "xl"]} textAlign="center" w="100%">Ayo temukan kelompok mentoring-mu dengan cara mencari
                    namamu pada dokumen ini! Setelah ketemu, langsung
                    hubungi mentor* masing-masing, ya, supaya bisa segera
                    bergabung di group chat dan bertemu teman-teman baru!
                    Untuk mempermudah mentor dalam memprioritaskan pesan
                    dari kamu, kamu boleh menggunakan format pesan berikut:
</Text >
                    <Text color="black" mt="3" fontSize={["xs", "xl"]} textAlign="center" w="100%">“Halo Kak [nama mentor], perkenalkan saya [nama kamu] dari
                    [jurusan kamu] 2020, anggota kelompok [nomor dan nama

                    kelompok]. Terima kasih, kak!”
</Text >
<Heading mb="4" as="h1" fontSize={["xs", "xl"]} letterSpacing={".1rem"}   mt="5" fontFamily="heading" fontWeight="bold" color="black" textAlign="center"> Bagi teman-teman FMIPA UI 2020 yang belum mendapatkan
kelompok atau namanya termasuk ke dalam lebih dari satu
kelompok, harap segera menghubungi kontak berikut, ya!
</Heading>
<Heading mb="2" as="h1" fontSize={["xs", "xl"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold" color="black" textAlign="center"> 
ID LINE : farahnuraiman</Heading>
<Heading mb="2" as="h1" fontSize={["xs", "xl"]} letterSpacing={".1rem"}   fontFamily="heading" fontWeight="bold" color="black" textAlign="center"> 

WhatsApp : 082208241402</Heading>
<Text color="black" mt="3" fontSize={["xs", "xs"]} textAlign="center" w="100%">*kontak mentor yang tertera adalah ID LINE/WhatsApp
</Text >


                </Box>

            </Flex>




        </Flex>


    );
};



export default KetentuanKelompok;
