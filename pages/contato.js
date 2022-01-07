import contato from './contato.module.css'
import Layout from './layout'

function Contato() {
    return (<section>
      <h5>mkashima portfolio_2022 •</h5>
      <h6>/ contact me / pourquoi pas</h6>
      <h1>GET IN TOUCH</h1>
      <div className={contato.card}>
        <p className={contato.font}>studio@mkashima.com</p>
        <p className={contato.font}>discord: mkashima #2118</p>
        <p className={contato.font}>instagram: @mkashima</p>
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