import footer from './footer.module.css'

export default function Footer() {
    return (
        <div className={footer.responsive}>
            <div className={footer.content}>
                <div className={footer.row}>
                    <div className={footer.column}>
                        <ul className={footer.footerlist}>
                            <li className={footer.footeritem}>MAISA KASHIMA</li>
                            <li className={footer.footeritem}><img src="/circle-green.svg" alt= "avaible" width="4px"/> DISPONÍVEL PARA NOVOS TRABALHOS</li>
                        </ul>
                    </div>
                    <div className={footer.column}>
                        <ul className={footer.footerlist}>  
                            <li className={footer.footeritem}><a target="_blank" href="https://www.instagram.com/mkashima" rel="noopener noreferrer">/ INSTAGRAM</a></li>
                            <li className={footer.footeritem}><a target="_blank" href="https://github.com/mkashima-studio" rel="noopener noreferrer">/ GITHUB</a></li>
                            <li className={footer.footeritem}><a target="_blank" href="" rel="noopener noreferrer">/ BLOG</a></li>
                        </ul>
                    </div>
                    <div className={footer.column}>
                        <ul className={footer.footerlist}>
                            <li className={footer.footeritem}><a href="mailto:studio@mkashima.com">STUDIO@MKASHIMA.COM</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}