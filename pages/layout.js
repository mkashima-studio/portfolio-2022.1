import Head from 'next/head'
import Footer from '../app/components/modules/footer'
import Navbar from '../app/components/modules/navBar'
import layout from './layout.module.css'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>mkashima</title>
                <link rel="favicon" href="public/favicon.ico" />
                <link rel= "preload" href="/fonts/goudosi.otf" as="font" crossOrigin="" />
            </Head>
            <Navbar className={layout.nav} />
            <section className={layout.main}>
                {children}
            </section>
            <footer>
                <Footer className={layout.foot} />
            </footer>
            
        </>
    )
}