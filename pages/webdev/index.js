import index from './index.module.css'
import Layout from '../layout'

const cpn = '/photos/webdev/cpn-webdev.png'

function WebDev() {
  return (<section>
    <h5>mkashima portfolio_2022 •</h5>
    <h6>/ front end / web dev / we write code</h6>
    <h1>DESENVOLVIMENTO WEB</h1>
    <h2>
      <p className={index.skills}><u>Skills</u>: React.JS, Next.JS, CSS, HTML, JavaScript, Wordpress, Bootstrap, Git </p>
      <p className={index.skills}><u>Plus</u>: Photoshop, Illustrator, Lightroom, Indesign, Corel Draw, Figma</p>
      <p className={index.skills}><u>Idiomas</u>: Inglês, Francês, Japonês</p>
      <br></br>
    </h2>

    <h1>TRABALHOS RECENTES</h1>

    <div className={index.row}>
      <div className={index.column}>
        <img src={cpn} alt="mkashima for cpn" width="100%"/>
      </div>
      <div className={index.column}>
        <div>
          <h2>
            <p className={index.text}>Desenvolvimento de uma Landing Page para a CPN.</p>
            <p className={index.text}>Trabalho desde a Season 5, sendo responsável também pela manutenção do site.</p>
            <p className={index.text}>Este projeto conta ainda com um portal de notícias. Segue o site atualizado:</p>
          </h2>
          <ul className={index.list}>
            <li className={index.item}>
              <a target="_blank" href="https://cpn.nobru.gg/" rel="noopener noreferrer">CPN WEBSITE <img src="/link-arrow.svg" alt= "arrow to the right" width="100px" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>  

  </section>)
}
  
export default WebDev

WebDev.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}