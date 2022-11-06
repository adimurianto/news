import Head from 'next/head'
import { useEffect, useState } from 'react'
import Items from '../components/Items'
import Navbar from '../components/Navbar'
import { getDataNews } from '../utils/getDataNews'
import { NewsItems } from '../types/News'
import { useDispatch, useSelector } from 'react-redux'
import { updateNews } from '../features/News/actions'
import Banner from '../components/Banner'
import PopupDetail from '../components/PopupDetail'

interface NewsPageProps {
  NewsData: NewsItems
}

export default function Home({NewsData}: NewsPageProps) {
  let listNews = NewsData;
  listNews = useSelector((state:any) => state?.news);
  let category = listNews.category;
  const dispatch = useDispatch();

  useEffect(()=>{
    const loadNews = async ()=>{
        try{
            const res:any = await getDataNews(`https://www.cnnindonesia.com/${category}/rss`, category);
            dispatch(updateNews(res.category, res.data));
        }catch(err){
          let message = 'Unknown Error'
          if (err instanceof Error) message = err.message
          console.log(err);
        }
    }
    loadNews();
  },[category])

  return (
    <div className='bg-white'>
      <Head>
        <title>News</title>
        <meta name="description" content={`News | Berita kategori ${category}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar category={category} />
        <Banner />
      </header>

      {
        listNews && listNews.data.length > 0 ?
          <main style={{minHeight:"90vh"}}>
              <Items dataItems={listNews.data} category={listNews.category} />
          </main>
        :
          <div style={{minHeight:"90vh", width: "100%", textAlign: "center"}}>
            <h2 className='text-center text-black text-lg my-3'>No Data</h2>
          </div>
      }

      <PopupDetail status={false} />

      <footer className='text-center bg-gray-800 py-5 text-sm leading-6 text-white'>
        Developed By Adi Murianto
      </footer>
    </div>
  )
}
