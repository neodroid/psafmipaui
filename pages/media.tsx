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
      {/* <FotoMedia departemen="Mentoring Day 1"/>
      
      <FotoMedia departemen="Youtube"/> */}
      <FotoMedia departemen="Instagram" 
      logo1="jignle.png"
      logo2="merch.jpg"
      logo4="makanan.jpg"
      logo3="mengenal.jpg"
      link1="https://www.instagram.com/tv/CDtia3DnvB7/?igshid=hvx3d81r07cg"
      link2="https://www.instagram.com/p/CERkGH-HVam/?igshid=vffbm2uqggic"
      link4="https://www.instagram.com/p/CEMZU16HZy2/?igshid=k6ecl53cfi6d"
      link3="https://www.instagram.com/p/CEV3LbKniST/?igshid=2ira0xcqgeld"
      />

      
    </div>
  )
}
