import Title from '../../Components/Title'
import Input from '../../Components/Input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toBRL } from '../../utils/toBRL'
import './style.scss'

export default function Main() {
  const [dolar, setDolar] = useState(0)
  const [valor, setValor] = useState(0)

  useEffect(() => {
    axios
      .get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
      .then(res => setValor(res.data?.USDBRL))
      .catch(error => {
        console.error('ops ! ocorreu um erro')
      })
  }, [])

  return (
    <div className="Main_project">
      <div
        style={{
          background: 'rgb(0,0,0,0.8)',
          margin: '1rem',
          display: 'flex',
          justifyContent: 'space-around',
          gap: '3rem',
          padding: '1rem'
        }}
      >
        <h6 style={{ color: 'green' }}>Dolar alta: R${valor.high}</h6>
        <h6 style={{ color: 'red' }}>Dolar Baixa: R${valor.low}</h6>
      </div>
      <div className="card-project">
        <Title />
        <h6>Dolar Atualmente: R${valor?.ask}</h6>
        <Input
          placeholder={'Digite Aqui:'}
          label={'Digite o valor abaixo: '}
          onChange={e => {
            setDolar(e.target.value)
          }}
          type={'number'}
        />
        <span className="result">{toBRL(dolar * valor.ask)}</span>
      </div>
    </div>
  )
}
