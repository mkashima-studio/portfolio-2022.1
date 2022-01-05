import index from './index.module.css'
import Image from 'next/image'

import mkphoto1 from '../public/photos/home/mkself1.jpg'

function Home() {
  return <div>
    <h5>mkashima portfolio_2022 •</h5>
    <h6>/ home / home / hello mellow</h6>
    <div className={index.row}>
      <div className={index.column}>
        <div className={index.photo}>
          <Image src={mkphoto1} />
        </div>
      </div>
      <div className={index.column}>
        <div className={index.hello}>
          HELLO!
        </div>
        <h2>
          <p className={index.text}>Bem vindo, sou Maisa Kashima :)</p>
          <p className={index.text}>Front End e Fotógrafa Comercial</p>
          <p className={index.text}>Aqui você encontra alguns dos meus projetos favoritos</p>
        </h2>
        <ul className={index.list}>
          <li className={index.item}>
            WEB DEV <img src="/link-arrow.svg" alt= "arrow to the right" width="100px" />
          </li>
          <li className={index.item}>
            F0T0GRAFIA <img src="/link-arrow.svg" alt= "arrow to the right" width="100px" />
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default Home