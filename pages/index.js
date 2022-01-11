import React from 'react'
import index from './index.module.css'
import Layout from './layout'

function Home() {
  return ( <section>
    <h5>mkashima portfolio_2022 •</h5>
    <h6>/ home / home / hello mellow</h6>
      <div className={index.row}>
        <div className={index.column}>
          <img className={index.photo} src="/photos/home/mkself1.jpg" alt= "mkashima self portrait" />
          <img className={index.jp} src="/jp-text-red.svg" alt= "japanese mkashima's presentation" />
          <img className={index.jpdesk} src="/jp-text-red.svg" alt= "japanese mkashima's presentation" />
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
              <a className={index.links} href="https://www.mkashima.com/webDev">WEBDEV <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a>
            </li>
            <br></br>
            <li className={index.item}>
              <a className={index.links} href="https://www.mkashima.com/fotografia">FOTOGRAFIA <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a>
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