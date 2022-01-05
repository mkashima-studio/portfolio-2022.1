import info from './info.module.css'
import Image from 'next/image'

import mkphoto2 from '../public/photos/info/mkself2.jpg'

function Info() {
    return <div>
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
          <h1>Experiências</h1>
          <h2>
          <ul className={info.explist}>
            <li className={info.expitem}>
              <ul className={info.explist}>
                Freelancer
                <li className={info.expitem}>
                  Front End: duas temporadas consecutivas trabalhando para a CPN, no desenvolvimento do site do maior campeonato independente de Free Fire. 
                  Idealizado pelo streamer e jogador profissional Bruno Goes (@nobrutv) que conta hoje com o apoio de 12,8 milhões de seguidores no Instagram.
                </li>
                <li className={info.expitem}>
                  Fotografia: especializada em fotografia de alimentos e produtos. 
                </li>
                <li className={info.expitem}>
                  Design Gráfico: guia da marca, catálogos de produtos no setor industrial, design de embalagens, fichas técnicas, flyers de divulgação para eventos, 
                  criação e redesign da identidade visual da marca e portfólio gastronômico.
                </li>
              </ul>
            </li>
            <li className={info.expitem}>
              <ul className={info.explist}>
                Graduação em Engenharia Elétrica na Escola Politécnica da UFRJ
                <li className={info.expitem}>
                  TCC: Projeto de um inversor bidirecional aplicado em carregadores de veículos elétricos para a configuração G2V e V2G.
                </li>
              </ul>
            </li>
            <li className={info.expitem}>  
              <ul className={info.explist}>
                Intercâmbio Acadêmico com equivalência de disciplinas no Institut Mines Télécom Lille-Douai, França (1 ano, em Francês).
                <li className={info.expitem}>
                  Major: Engenharia Energética (Energias renováveis, Smart Grid e Gerenciamento de Energia)
                </li>
                <li className={info.expitem}>
                  Minor: Habitats Inteligentes (IoT, Smart Home e Eficiência Energética)
                </li>
              </ul>
            </li>
            <li className={info.expitem}>
              Estágio como Analista de dados na Furnas Centrais Elétricas - Eletrobras: 
              Análise de dados do sistema de assistência remota do Centro Regional de Operação e Controle
              da Rede Elétrica. Descrição de subestações e novas linhas de transmissão no sistema
              de monitoramento da rede elétrica. Auxílio na instalação de novos servidores. Familiarização com o sistema SCADA.
            </li>
            <li className={info.expitem}>
              Pesquisadora na Oriental Consultants Global, Japão (Remoto, em Inglês): durante a 
              Olimpíada Rio 2016, pesquisa de campo sobre infraestrutura de ambientes, transportes e eventos sociais no 
              quesito acessibilidade para o andamento de projetos da Olimpíada de Tóquio 2020. Documentação através de 
              relatórios, fotos, vídeos e entrevistas.
            </li>
            <li className={info.expitem}>
              Assistente em Pesquisa no Departamento de Expressão Gráfica da UFRJ: sobre robôs adaptados a meios urbanos. Projeto 
              de um robô auxiliar na prática de esportes como o beisebol, considerando possíveis efeitos de curvas na trajetória do arremesso.
            </li>
            <li className={info.expitem}>
              Assistente de Pesquisa no Observatório Nacional do Rio de Janeiro: sobre limites nos modelos teóricos de explosão 
              de supernovas usando enriquecimento de metais pesados no meio intra aglomerado com o Satélite Suzaku.
            </li>
           </ul> 
          </h2>
        </div>
        <div className={info.column}>
          <div className={info.photo}>
            <Image src={mkphoto2} />
          </div>
        </div>
      </div>
    </div>
  }
  
  export default Info