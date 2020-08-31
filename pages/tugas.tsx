import { Box, Flex } from '@chakra-ui/core'
import Head from 'next/head'
import React from 'react'
import HomeBan from './component/HomeBanner'
import Pengertian from './component/Pengertian'
import TitleHome from './component/TitleHome'
import TitleNilai from './component/TitleNilai'
import Nilai from './component/Nilai'
import Potensi from './component/Potensi'
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
      <Header2 />
      <TitleProfile>TUGAS</TitleProfile>

      <TugasCard judul="Buku Saku" gambar="/tugas.png" />
      <TugasCard judul="Ketentuan Tugas" tugas1="Ketentuan Tugas PSAF.pdf" link1="https://drive.google.com/u/0/uc?id=14WE7T1NNteU8tNO15BBc0HZf_2Z-SptF&export=download" />
      <TugasCard judul="Tugas" tugas1="Kenal MIPA - Denah FMIPA UI.pdf" tugas2="Kenal MIPA - Tebak Tokoh.pdf" tugas3="Kenal MIPA - Teka Teki Silang.pdf" tugas4="Kenal MIPA - Temukan Perbedaan.docx"
        tugas5="Personal Canvas.jpg"
        link1="https://drive.google.com/u/0/uc?id=1aC1oaUE4p20FJm0HGR1J5A1NBocYD4Mi&export=download" link2="https://drive.google.com/u/0/uc?id=1th4KihzwikrZ6vYe23MDQyN5xSW7wfi-&export=download"
        link3="https://drive.google.com/u/0/uc?id=1LzehiYni5uhZMcLqwYxMPy5Q_ZJ2D4t4&export=download" link4="https://drive.google.com/u/0/uc?id=1CWcwWBa0gWcKO5m1IJf25JxUzAXP1r-M&export=download"
        link5="https://drive.google.com/u/0/uc?id=1caXsmyX6DEsYaaF1cIUZ2sDPCCTP0Evv&export=download"
        tugas6="Twibbon Mahasiswa Baru FMIPA UI 2020.png" link6="https://drive.google.com/u/0/uc?id=1yQjOgoqyVtLP03fsg97fLov8qbMRem9H&export=download"
      />
      <TugasCard judul="JINGLE" tugas1="jingle PSAF.mp3" link1="https://drive.google.com/u/0/uc?id=1iMHzmLJi-NHpmXRzdH0kwzzlVQb2FhYp&export=download" tugas2="jingle PSAF.pdf"
        link2="https://drive.google.com/u/0/uc?id=1JdyDvovmPdyzsQt9uldjTbTJQC1plh9S&export=download"

      />


    </div>
  )
}
