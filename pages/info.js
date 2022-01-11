import info from './info.module.css'
import Layout from './layout'

const mkphoto2 = '/photos/info/mkself2.jpg'

function Info() {
  return (
    <section>
      <h5>mkashima portfolio_2022 •</h5>
      <h6>/ info / information / in formation</h6>
      <h1>ABOUT MKASHIMA</h1>
      <h2>
        <p>Maisa Kashima, fev/1991</p>
        <p>Hoje em: Curitiba - PR</p>
        <p><img src="/circle-green.svg" alt= "avaible" width="6px"/> DISPONÍVEL PARA NOVOS TRABALHOS</p>
      </h2>
      <div className={info.row}>
        <div className={info.column}>
          <div className={info.photo}>
            <img src={mkphoto2} width="100%"/>
          </div>
        </div>
        <div className={info.column}>
          <h1>Experiências</h1>
          <h2>
          <ul className={info.explist}>
            <li className={info.expitem}>
              <ul className={info.explist}>
                <b><u>Freelancer</u></b>
                <li className={info.expitem}>
                <b><u>Front End</u></b>: duas temporadas consecutivas trabalhando para a CPN, no desenvolvimento do site do maior campeonato independente de Free Fire. 
                  Idealizado pelo streamer e jogador profissional Bruno Goes (@nobrutv) que conta hoje com o apoio de 12,8 milhões de seguidores no Instagram.
                </li>
                <li className={info.expitem}>
                <b><u>Fotografia</u></b>: especializada em fotografia de alimentos e produtos. 
                </li>
                <li className={info.expitem}>
                <b><u>Design Gráfico</u></b>: guia da marca, catálogos de produtos no setor industrial, design de embalagens, fichas técnicas, flyers de divulgação para eventos, 
                  criação e redesign da identidade visual da marca e portfólio gastronômico.
                </li>
              </ul>
            </li>
            <li className={info.expitem}>
              <ul className={info.explist}>
              <b><u>Graduação em Engenharia Elétrica na Escola Politécnica da UFRJ</u></b>
                <li className={info.expitem}>
                  <b>TCC:</b> Projeto de um inversor bidirecional aplicado em carregadores de veículos elétricos para a configuração G2V e V2G.
                </li>
              </ul>
            </li>
            <li className={info.expitem}>  
              <ul className={info.explist}>
                Intercâmbio Acadêmico com equivalência de disciplinas no Institut Mines Télécom Lille-Douai, França (1 ano, em Francês).
                <li className={info.expitem}>
                  <b>Major:</b> Engenharia Energética (Energias renováveis, Smart Grid e Gerenciamento de Energia)
                </li>
                <li className={info.expitem}>
                  <b>Minor:</b> Habitats Inteligentes (IoT, Smart Home e Eficiência Energética)
                </li>
              </ul>
            </li>
            <li className={info.expitem}>
              <b><u>Estágio como Analista de dados na Furnas Centrais Elétricas - Eletrobras</u></b>: 
              Análise de dados do sistema de assistência remota do Centro Regional de Operação e Controle
              da Rede Elétrica. Descrição de subestações e novas linhas de transmissão no sistema
              de monitoramento da rede elétrica. Auxílio na instalação de novos servidores. Familiarização com o sistema SCADA.
            </li>
            <li className={info.expitem}>
              <b><u>Pesquisadora na Oriental Consultants Global, Japão</u></b> (Remoto, em Inglês): durante a 
              Olimpíada Rio 2016, pesquisa de campo sobre infraestrutura de ambientes, transportes e eventos sociais no 
              quesito acessibilidade para o andamento de projetos da Olimpíada de Tóquio 2020. Documentação através de 
              relatórios, fotos, vídeos e entrevistas.
            </li>
            <li className={info.expitem}>
              <b><u>Assistente em Pesquisa no Departamento de Expressão Gráfica da UFRJ</u></b>: sobre robôs adaptados a meios urbanos. Projeto 
              de um robô auxiliar na prática de esportes como o beisebol, considerando possíveis efeitos de curvas na trajetória do arremesso.
            </li>
            <li className={info.expitem}>
              <b><u>Assistente de Pesquisa no Observatório Nacional do Rio de Janeiro</u></b>: sobre limites nos modelos teóricos de explosão 
              de supernovas usando enriquecimento de metais pesados no meio intra aglomerado com o Satélite Suzaku.
            </li>
            <ul className={info.list}>
              <li className={info.item}>
                <a target="_blank" href="https://imt-nord-europe.fr/" rel="noopener noreferrer"><img src="/photos/info/imt.png" alt= "imt lille douai website" width="100px" /></a>
              </li>
              <li className={info.item}>
                <a target="_blank" href="http://www.poli.ufrj.br/" rel="noopener noreferrer"><img src="/photos/info/poliufrj.png" alt= "escola politécnica ufrj website" width="120px" /></a>
              </li>
              <li className={info.item}>
                <a target="_blank" href="http://repositorio.poli.ufrj.br/monografias/monopoli10023307.pdf" rel="noopener noreferrer">monografia <br></br> <img src="/link-arrow.svg" alt= "arrow to the right" width="50px" /></a>
              </li>
            </ul>
            </ul> 
          </h2>
        </div>
      </div>
    </section>
  )
}
  
export default Info

Info.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}