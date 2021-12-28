import navbar from './navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
    <>
            
        <ul className={navbar.navbarlist}>
            <img src="/logo.svg" alt= "mkashima logo" width="130px" />
            <li className={navbar.navbaritem}><Link href="/home"><a>Home</a></Link></li>
            <li className={navbar.navbaritem}><Link href="/fotografia"><a>Fotografia</a></Link></li>
            <li className={navbar.navbaritem}><Link href="/webDev"><a>Web Dev</a></Link></li>
            <li className={navbar.navbaritem}><Link href="/sobreMim"><a>Sobre Mim</a></Link></li>
            <li className={navbar.navbaritem}><Link href="/contato"><a>Contato</a></Link></li>
            <ul className={navbar.navbarsociallist}>
                <li className={navbar.navbarsocialitem}>github</li>
                <li className={navbar.navbarsocialitem}>insta</li>
                <li className={navbar.navbarsocialitem}>blog</li>
            </ul>
        </ul>
            
    </>
    )
    
}