import Head from 'next/head'
import TriviaHeader from '@/components/TriviaHeader'
import TriviaCard from '@/components/TriviaCard'
import ProgressBar from '../components/ProgressBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Survey RatherLabs</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='flex flex-col justify-center items-center mt-[50px] gap-[60px]'>
        <TriviaHeader />
        <ProgressBar />
        <TriviaCard />
      </section>
    </>
  )
}
