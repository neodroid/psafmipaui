import { Flex } from '@chakra-ui/core'
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
import FotoMedia from './component/fotoMedia'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Media - PSAF MIPA UI 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header2/>
      <TitleProfile>MEDIA</TitleProfile>
      <FotoMedia departemen="Mentoring Day 1"/>
      <FotoMedia departemen="Mentoring Day 2"/>
      <FotoMedia departemen="YOUTUBE"/>

      
    </div>
  )
}