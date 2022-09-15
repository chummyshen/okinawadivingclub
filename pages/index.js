import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="沖縄潜水俱楽部" />
        <p className="description">
         Coming Soon! 工事中！<code>~敬请期待~</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
