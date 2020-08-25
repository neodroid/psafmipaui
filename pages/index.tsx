import { Flex } from '@chakra-ui/core'
import Head from 'next/head'
import React from 'react'
import  HomeBan  from './component/HomeBanner'
import  Pengertian  from './component/Pengertian'
import TitleHome  from './component/TitleHome'
import  TitleNilai  from './component/TitleNilai'
import  Nilai  from './component/Nilai'
import  Potensi  from './component/Potensi'


export default function Home() {
  return (
    <div>
      <Head>
        <title>PSAF MIPA UI 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <TitleHome/>
      <HomeBan/>
      <Pengertian/>
      <TitleNilai/>
      <Nilai/>
      <Potensi/>
      

      
    </div>
  )
}
