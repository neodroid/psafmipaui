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
import FotoDept from './component/FotoDept'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Profile - PSAF MIPA UI 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header2/>
      <TitleProfile>PROFIL</TitleProfile>
      <Visimisi/>
      <Filosofi/>
      {/* <FotoDept 
        departemen="STRUKTUR KEPANITIAAN"
        logo1="pdm logo.png"
        logo2="Lenni Fitri Anwar.png"
        logo3="faiz amir.png"
        logo4="Logo HMD Matematika 1.png"
        nama1="Lenni Fitri Anwar"
        nama2="Muhammad Faiz
        Amir Aththufail"
        jabatan1="Project Officer PDM 2020"
        jabatan2="Ketua HMD Matematika 2020"
       
      />
       <FotoDept 
      
        logo1="pdm logo.png"
        logo2="Lenni Fitri Anwar.png"
        logo3="faiz amir.png"
        logo4="Logo HMD Matematika 1.png"
        nama1="Lenni Fitri Anwar"
        nama2="Muhammad Faiz
        Amir Aththufail"
        jabatan1="Project Officer PDM 2020"
        jabatan2="Ketua HMD Matematika 2020"
       
      /> */}
      
    </div>
  )
}
