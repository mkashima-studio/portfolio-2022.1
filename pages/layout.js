import { useState } from "react";
import Head from 'next/head'
import Footer from '../app/components/modules/footer'
import Navbar from '../app/components/modules/navBar'
import layout from './layout.module.css'
import Link from "next/link";

export default function Layout({children}) {

    const [isOpen,setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <Head>
                <title>mkashima</title>
                <link rel="favicon" href="public/favicon.ico" />
                <link rel="preload" href="/fonts/goudosi.otf" as="font" crossOrigin="" />
            </Head>
            <header>
                <Navbar className={isOpen === false ? layout.nav : layout.nav + ' ' + layout.active} />
                <button className={isOpen === false ? layout.mobile + ' ' + layout.hamburger : layout.mobile + ' ' + layout.hamburger +' '+layout.active}
                onClick={openMenu}>
                    <span className={layout.bar}></span>
                    <span className={layout.bar}></span>
                    <span className={layout.bar}></span>
                </button>
                <ul className={isOpen === false ? layout.mobile + ' ' + layout.navmob : layout.mobile + ' ' + layout.navmob +' ' + layout.active} 
                onClick={openMenu}>
                    <li className={layout.navmobitem}><Link href="/"><a>/ HOME</a></Link></li>
                    <li className={layout.navmobitem}><Link href="/fotografia"><a>/ FOTOGRAFIA</a></Link></li>
                    <li className={layout.navmobitem}><Link href="/webDev"><a>/ WEB DEV</a></Link></li>
                    <li className={layout.navmobitem}><Link href="/info"><a>/ INFO</a></Link></li>
                    <li className={layout.navmobitem}><Link href="/contato"><a>/ CONTATO</a></Link></li>
                </ul>
            </header>
            <section className={layout.main}>
                {children}
            </section>
            <footer>
                <Footer className={layout.foot} />
            </footer>
            
        </>
    )
}