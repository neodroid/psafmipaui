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
        <title>Departemen - PSAF MIPA UI 2020</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header2/>
      <TitleProfile>DEPARTEMEN</TitleProfile>
      <FotoDept 
        departemen="MATEMATIKA"
        logo1="pdm logo.png"
        logo2="Lenni Fitri Anwar.png"
        logo3="faiz amir.png"
        logo4="Logo HMD Matematika 1.png"
        nama1="Lenni Fitri Anwar"
        nama2="Muhammad Faiz
        Amir Aththufail"
        jabatan1="Project Officer PDM 2020"
        jabatan2="Ketua HMD Matematika 2020"
        bg="#FFABAB"
      />
       <FotoDept 
        departemen="KIMIA"
        logo1="pdk logo.png"
        logo2="Niken Fitria.png"
        logo3="Adha Masfufa.png"
        logo4="Logo HMD Kimia 1.png"
        nama1="Niken Fitria"
        nama2="Adha Masfufa"
        jabatan1="Project Officer PDK 2020"
        jabatan2="Ketua HMD Kimia 2020"
        bg="#D0A9F5"
      />
       <FotoDept 
        departemen="FISIKA"
        logo1="Group 42.png"
        logo2="Group 41.png"
        logo3="Group 34.png"
        logo4="logo fisika baru.png"
        nama1="Michida Budi Darmawan"
        nama2="Ammar Amrullah Zain"
        jabatan1="Project Officer PDF 2020"
        jabatan2="Ketua HMD Fisika 2020"
        bg="#C3FBDA"
      />
       <FotoDept 
        departemen="BIOLOGI"
        logo1="Logo PDB 1.png"
        logo2="Group 43.png"
        logo3="Group 35.png"
        logo4="Logo HMD Biologi 1.png"
        nama1="Vialda Anindita Puteri Sulandri"
        nama2="Ario Dewandaru Suryo Arianto"
        jabatan1="Project Officer PDB 2020"
        jabatan2="Ketua HMD Biologi 2020"
        bg="#C3D0FB"
      />
       <FotoDept 
        departemen="GEOGRAFI"
        logo1="Logo PSADG 1.png"
        logo2="Group 44.png"
        logo3="Group 36.png"
        logo4="Logo HMD Geografi 1.png"
        nama1="Fauzan Ananda Prasetyo"
        nama2="Rifqi Hermawan"
        jabatan1="Project Officer PSADG 2020"
        jabatan2="Ketua HMD Geografi 2020"
        bg="#BDBDBD"
      />
       <FotoDept 
        departemen="GEOSAINS"
        logo1="Group 46.png"
        logo2="Group 45.png"
        logo3="Group 38.png"
        logo4="Logo HMD Geosains 1.png"
        nama1="Ezra Brillyantama Putra"
        nama2="Achmad Zulvickar"
        jabatan1="Project Officer PDGS 2020"
        jabatan2="Ketua HMD Geosains 2020"
        bg="#FFF0B9"
      />

      
    </div>
  )
}
