import Head from 'next/head'
import Filter from '@/components/Filter'
import Content from '@/components/Content'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>BRASA Connect</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='bg-primary'>
          <Header/>
          <div className='flex p-[30px]'>
            <Filter/>              
            <Content/>
          </div>
        </div>
      </main>
    </>
  )
}
