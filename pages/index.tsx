import Head from 'next/head'
import { useEffect, useState } from 'react'
import Items from '../components/Items'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { getDataNews } from '../utils/getDataNews'
import { NewsItems } from '../types/News'

interface NewsPageProps {
  NewsData: NewsItems
}

export default function Home({NewsData}: NewsPageProps) {
  const [category, setCategory] = useState('nasional');
  const [listNews, setListNews] = useState(NewsData);

  useEffect(()=>{
    const loadPokemon = async ()=>{
        try{
            const res:any = await getDataNews(`https://www.cnnindonesia.com/${category}/rss`, category);
            setListNews(res);
        }catch(err){
          let message = 'Unknown Error'
          if (err instanceof Error) message = err.message
          console.log(err);
        }
    }
    loadPokemon();
  },[category])

  console.log(listNews);

  return (
    <div className='bg-white'>
      <Head>
        <title>News</title>
        <meta name="description" content={`News | Berita kategori ${category}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main style={{minHeight:"90vh"}}>
        {
          listNews ?
          <Items dataItems={listNews.data} category={listNews.category} />
          :
          <h2 className='text-center text-black'>No Data</h2>
        }
      </main>

      <footer className='text-center bg-gray-800 py-5 text-sm leading-6 text-white-800'>
        Developed By Adi Murianto
      </footer>
    </div>
  )
}
