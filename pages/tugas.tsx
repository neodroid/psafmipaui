import { Box, Flex } from '@chakra-ui/core'
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
import TugasCard from './component/TugasCard'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tugas - PSAF MIPA UI 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header2/>
      <TitleProfile>TUGAS</TitleProfile>
      
       <TugasCard judul="Buku Saku" gambar="/tugas.png"/>
       <TugasCard judul="Tugas 1"/>
       <TugasCard judul="Tugas 2"/>

      
    </div>
  )
}
