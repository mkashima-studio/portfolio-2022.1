import contato from './contato.module.css'

function Contato() {
    return <div>
      <h5>mkashima portfolio_2022 •</h5>
      <h6>/ contact me / pourquoi pas</h6>
      <h1>GET IN TOUCH</h1>
      <div className={contato.card}>
        <p className={contato.font}>studio@mkashima.com</p>
        <p className={contato.font}>discord: mkashima #2118</p>
        <p className={contato.font}>instagram: @mkashima</p>
      </div>
    </div>
  }
  
export default Contato