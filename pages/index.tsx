import { Flex } from '@chakra-ui/core'

import Head from 'next/head'
import React from 'react'
import  HomeBan  from './component/HomeBanner'
import  Pengertian  from './component/Pengertian'
import TitleHome  from './component/TitleHome'
import  TitleNilai  from './component/TitleNilai'
import  Nilai  from './component/Nilai'
import  Potensi  from './component/Potensi'
import Header from './component/header'
import Header2 from './component/header2'

import HomeFix from './component/Home'

// function makeSound(){
//   var snare= new Audio("https://www.mboxdrive.com/Jingle%20PSAF.mp3")
//   snare.play();
//   console.log("play snare");
  
// }


export default function Home() {
  return (
    <div>
      <Head>
        <title>PSAF MIPA UI 2020</title>
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
     <HomeFix/>
      <Header2/>
      <Pengertian/>
      <TitleNilai/>
      <Nilai/>
      <Potensi/>
      

      
    </div>
  )
}
