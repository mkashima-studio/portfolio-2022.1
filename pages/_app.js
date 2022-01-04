import Head from 'next/head'
import Layout from '../app/components/layouts/layout'
import '../app/styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>mkashima</title>
        <link rel="favicon" href="public/favicon.ico" />
        <link rel= "preload" href="/fonts/goudosi.otf" as="font" crossOrigin="" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}