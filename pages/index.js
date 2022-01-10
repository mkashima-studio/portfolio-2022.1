import React from 'react'
import index from './index.module.css'
import Link from 'next/link'
import Layout from './layout'

const WebDevButton = React.forwardRef( ({ onClick, href }, ref) => {
  return (
    <a className={index.links} href={href} onClick={onClick} ref={ref}>
      WEB DEV <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" />
    </a>
  )
})

const FotografiaButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a className={index.links} href={href} onClick={onClick} ref={ref}>
      F0T0GRAFIA <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" />
    </a>
  )
})

function Home() {
  return ( <section>
    <h5>mkashima portfolio_2022 •</h5>
    <h6>/ home / home / hello mellow</h6>
      <div className={index.row}>
        <div className={index.column}>
          <img className={index.photo} src="/photos/home/mkself1.jpg" alt= "mkashima self portrait" />
        </div>
        <div className={index.column}>
          <img src="/hello.svg" alt= "hello" width="83%" />
          <h2>
            <p className={index.text}>Bem vindo, sou Maisa Kashima :)</p><br></br>
            <p className={index.redtext}>Front End e Fotógrafa Comercial</p><br></br>
            <p className={index.text}>Aqui você encontra alguns dos meus projetos favoritos</p><br></br>
          </h2>
          <ul className={index.list}>
            <li className={index.item}>
              <Link href="/webDev" passHref>
                <WebDevButton />
              </Link>
            </li>
            <br></br>
            <li className={index.item}>
              <Link href="/fotografia" passHref>
                <FotografiaButton />
              </Link>
            </li>
          </ul>
        </div>
      </div>
  </section>)
}

export default Home

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}