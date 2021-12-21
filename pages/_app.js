import Layout from '../app/components/layouts/layout'
import '../app/styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}