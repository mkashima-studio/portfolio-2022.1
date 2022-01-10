import contato from './contato.module.css'
import Layout from './layout'

function Contato() {
    return (<section>
      <h5>mkashima portfolio_2022 •</h5>
      <h6>/ contact me / pourquoi pas</h6>
      <h1>GET IN TOUCH</h1>
      <div className={contato.card}>
        <ul className={contato.list}>
          <li className={contato.item}>studio@mkashima.com</li>
          <li className={contato.item}>discord: mkashima #2118</li>
          <li className={contato.item}>instagram: @mkashima</li>
        </ul>
      </div>
    </section>)
  }
  
export default Contato

Contato.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}