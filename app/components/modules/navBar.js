import navbar from '../modules/navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
    <>
            <ul className={navbar.navbarlist}>
            <li className={navbar.navbaritem}><Link href="/home"><a>Home</a></Link></li>
            <li className={navbar.navbarphoto}>Fotografia
                    <li className={navbar.navbaritem}><Link href="/fotografia/alimentos"><a>Alimentos</a></Link></li>
                    <li className={navbar.navbaritem}><Link href="/fotografia/produtos"><a>Produtos</a></Link></li>
                    <li className={navbar.navbaritem}><Link href="/fotografia/retratos"><a>Retratos</a></Link></li>
            </li>
            <li className={navbar.navbaritem}><Link href="/webDev"><a>Web Dev</a></Link></li>
            <li className={navbar.navbaritem}><Link href="/sobreMim"><a>Sobre Mim</a></Link></li>
            <li className={navbar.navbaritem}><Link href="/contato"><a>Contato</a></Link></li>
            </ul>
            <ul className={navbar.navbarsociallist}>
                <li className={navbar.navbarsocialitem}>github</li>
                <li className={navbar.navbarsocialitem}>insta</li>
                <li className={navbar.navbarsocialitem}>blog</li>
            </ul>
    </>
    )
    
}