import navbar from './navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <div className={navbar.hidenav}>
                <div className={navbar.col-3}>
                    <div className={navbar.content}>
                        <ul className={navbar.navbarlist}>
                            <Link href="/"><img className={navbar.logoimg} src="/logo.svg" alt= "mkashima logo" width="130px" /></Link>
                            <li className={navbar.logoitem}>
                                mkashima
                            </li>
                            <li className={navbar.logoitem}>
                                portfolio
                            </li>
                            <br></br>
                            <br></br>
                            <li className={navbar.navbaritem}><Link href="/fotografia"><a>/ FOTOGRAFIA</a></Link></li>
                            <li className={navbar.navbaritem}><Link href="/webDev"><a>/ WEB DEV</a></Link></li>
                            <li className={navbar.navbaritem}><Link href="/info"><a>/ INFO</a></Link></li>
                            <li className={navbar.navbaritem}><Link href="/contato"><a>/ CONTATO</a></Link></li>
                            <br></br>
                            <br></br>
                            <br></br>
                            <ul className={navbar.navbarsociallist}>
                                    <li className={navbar.navbarsocialitem}><a target="_blank" href="https://github.com/mkashima-studio" rel="noopener noreferrer"><img src="/circle-green.svg" alt= "enabled" width="5px"/> GITHUB</a></li>
                                    <li className={navbar.navbarsocialitem}><a target="_blank" href="https://www.instagram.com/mkashima" rel="noopener noreferrer"><img src="/circle-red.svg" alt= "disabled" width="5px"/> INSTAGRAM</a></li>
                                    <li className={navbar.navbarsocialitem}><a target="_blank" href="" rel="noopener noreferrer"><img src="/circle-red.svg" alt= "disabled" width="5px"/> BLOG</a></li>
                            </ul>
                        </ul>        
                    </div>  
                </div>
            </div>  
        </>
    )
}
