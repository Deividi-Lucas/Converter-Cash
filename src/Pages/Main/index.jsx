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
      .then(res => setValor(res.data?.USDBRL.ask))
      .catch(error => {
        console.error('ops ! ocorreu um erro')
      })
  }, [])

  return (
    <div className="Main_project">
      <div className="card-project">
        <Title />
        <h6>Valor do dolar: R${valor}</h6>
        <Input
          placeholder={'Digite Aqui:'}
          label={'Digite o valor abaixo: '}
          onChange={e => {
            setDolar(e.target.value)
          }}
          type={'number'}
        />
        <span className="result">{toBRL(dolar * valor)}</span>
      </div>
    </div>
  )
}
