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
      <FotoDept 
        departemen="STRUKTUR KEPANITIAAN"
        logo1="Group 53.png"
        logo2="Group 54.png"
       
        namakiri="Ketua Pelaksana"
        jabatankiri="Muhammad Rifqi Ramdhani"
        deptkiri="Fisika 2018"

        nama1="Wakil Ketua Pelaksana"
        jabatan1="Emily Arjuna Melani"
        dept1="Biologi 2018"
        
        
        
        
      />
       <FotoDept 
       
        logo1="Group 55.png"
        logo2="Group 56.png"
       
       
        namakiri="Koor. Materi"
        jabatankiri="Farah Nuraiman Hartono"
        deptkiri=" Fisika 2018"

        nama1="Bendahara Umum"
        jabatan1="Graceilla Puspita Arum "
        dept1="Matematika 2018"
        
        nama2=""
        jabatan2=""
        dept2=""

        namakanan=""
        jabatankanan=""
        deptkanan=""
       
        
      />
       <FotoDept 
       
        logo1="Group 58.png"
        logo2="Group 59.png"
        logo3="Group 57.png"
       
        namakiri="Koor. Penunjang"
        jabatankiri="Muhammad Raja Amarulloh "
        deptkiri="Geosains 2018"

        nama1="Koor. HPDD"
        jabatan1=" Marchello"
        dept1="Kimia 2018"
        
        nama2="Koor. Acara"
        jabatan2="Kayla Puteri Naura "
        dept2="Geografi 2018"

        namakanan=""
        jabatankanan=""
        deptkanan=""
      />
      <FotoDept 
       
       logo1="Group 83.png"
       logo2="Mask Group.png"
       logo3="Group 82.png"
      
       namakiri="Wakil PJ Evaluasi"
        jabatankiri="Dwi Tamara"
        deptkiri="Geografi 2018"

        nama1="PJ Evaluasi"
        jabatan1="Muhammad Faiz Amir A"
        dept1="Matematika 2018"
        
        nama2="Wakil PJ Evaluasi"
        jabatan2="Muhammad Arsyi K."
        dept2="Geografi 2018"

        namakanan=""
        jabatankanan=""
        deptkanan=""
     />
     <FotoDept 
       
       logo1="Group 86.png"
       logo2="Group 84.png"
       logo3="Group 85.png"
      
       namakiri="Wakil PJ Mentor Kreatif "
        jabatankiri="Aulia Oktaviani"
        deptkiri="Kimia 2018"

        nama1="PJ Mentor Kreatif"
        jabatan1="Alia Farhana"
        dept1="Biologi 2018"
        
        nama2="Wakil PJ 
        Mentor Kreatif "
        jabatan2="Pinandita Ardhana "
        dept2="Geosains 2018"

        namakanan=""
        jabatankanan=""
        deptkanan=""
     />
       <FotoDept 
      
        logo1="Group 60.png"
        logo2="Group 61.png"
        logo3="Group 62.png"
        logo4="Group 63.png"
        namakiri="PJ Acara"
        jabatankiri="Ahmad Rafianto"
        deptkiri="Fisika 2018"

        nama1="Wakil PJ Acara"
        jabatan1="Maylannia Ariski"
        dept1="Fisika 2018"
        
        nama2="PJ Dokum & Desain"
        jabatan2="Muhamad Edgar Zulfikar "
        dept2="Geografi 2018"

        namakanan="Wakil PJ Dokum
        & Desain"
        jabatankanan="Deo Brilliant M"
        deptkanan="Geografi 2019"
       
      />
      <FotoDept 
      
      logo1="Group 64.png"
      logo2="Group 65.png"
      logo3="Group 67.png"
      logo4="Group 66.png"
      namakiri="PJ Humas
      & Publikasi"
        jabatankiri="Amira Fairuza"
        deptkiri="Geografi 2018"

        nama1="Wakil PJ Humas
        & Publikasi"
        jabatan1="Fauzan Ramadhani"
        dept1="Kimia 2019"
        
        nama2="PJ Kesekretariatan"
        jabatan2="Syahputri Riani "
        dept2="Matematika 2019"

        namakanan="Wakil PJ 
        Kesekretariatan"
        jabatankanan="Dinda Lusiafitri"
        deptkanan="Matematika 2019"
     
    />
    <FotoDept 
      
      logo1="Group 69.png"
      logo2="Group 68.png"
      logo3="Group 70.png"
      logo4="Group 71.png"
      namakiri="PJ Kewirausahaan"
      jabatankiri="Shafiya Yunka Putri"
      deptkiri="Geografi 2018"

      nama1="Wakil PJ
      Kewirausahaan"
      jabatan1="Karintya Aisya"
      dept1="Matematika 2019"
      
      nama2="PJ Konsumsi"
      jabatan2="Balqis Jihaan Nabila"
      dept2="Biologi 2018"

      namakanan="Wakil PJ Konsumsi"
      jabatankanan="Shafa Talitha Risti"
      deptkanan="Biologi 2018"
     
    />
    <FotoDept 
      
      logo1="Group 72.png"
      logo2="Group 73.png"
      logo3="Group 74.png"
      logo4="Group 75.png"
      namakiri="PJ MC"
      jabatankiri="Andrea Alexandra "
      deptkiri="Kimia 2018"

      nama1="Wakil PJ MC"
      jabatan1="Salsabila Amanda "
      dept1="Kimia 2018"
      
      nama2="PJ Medis"
      jabatan2="Kezialie"
      dept2="Geosains 2018"

      namakanan="Wakil PJ Medis"
      jabatankanan="Nathassya Sherly"
      deptkanan="Geosains 2018"
     
    />
    <FotoDept 
      
      logo1="Group 76.png"
      logo2="Group 77.png"
      logo3="Group 78.png"
      logo4="Group 79.png"
      namakiri="PJ Pergerakan Mahasiswa"
        jabatankiri="Zaidan Rahmat Wibawa"
        deptkiri="Matematika 2019"

        nama1="Wakil PJ Pergerakan Mahasiswa"
        jabatan1="Farhan Ramadhan"
        dept1="Geografi 2019"
        
        nama2="PJ Perlengkapan"
        jabatan2="Bastanta Kristian"
        dept2="Geosains 2019"

        namakanan="Wakil PJ Perlengkapan"
        jabatankanan="Ferdio Nathaniel"
        deptkanan="Matematika 2019"
     
    />
      
    </div>
  )
}
