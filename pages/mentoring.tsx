import { Button, Flex, Link } from '@chakra-ui/core'
import Head from 'next/head'
import React from 'react'
import  HomeBan  from './component/HomeBanner'
import  Pengertian  from './component/Pengertian'
import TitleHome  from './component/TitleHome'
import  TitleNilai  from './component/TitleNilai'
import  Nilai  from './component/Nilai'
import  Potensi  from './component/Potensi'
import TitleProfile from './component/TitleProfile'
import Visimisi from './component/visimisi'
import Filosofi from './component/filosofi'
import Header2 from './component/header2'
import KetentuanKelompok from './component/KetentuanKelompok'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Mentoring - PSAF MIPA UI 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header2/>
      <TitleProfile>MENTORING</TitleProfile>
     

    <KetentuanKelompok/>




      <Flex  textAlign="center"  h="200px" justifyContent="center" fontSize="xl">
      <Link href="https://drive.google.com/u/0/uc?id=1ySFgnc20Z0sA5DMAx47hP-HsU5ta_k5w&export=download" isExternal>
        <Button width="fill" 
            variant="solid" bg="#2F80ED" color="white"  rounded="full" m="2"  
           
           p="6"
            >
                 Cek Kelompok Mentoring
              
            </Button>
            </Link>
            </Flex>
      

      
    </div>
  )
}
