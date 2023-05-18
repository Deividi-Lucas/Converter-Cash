import Title from '../../Components/Title'
import Input from '../../Components/Input'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toBRL } from '../../utils/toBRL'
import './style.scss'
import CoinCard from '../../Components/Coin'

export default function Main() {
  const [dolar, setDolar] = useState(0)
  const [valor, setValor] = useState(0)

  useEffect(() => {
    axios
      .get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
      .then(res => setValor(res?.data))
      .catch(error => {
        console.error('ops ! ocorreu um erro')
      })
  }, [])

  return (
    <div className="Main_project">
      <CoinCard
        text={valor.USDBRL?.name}
        coinValue={valor.USDBRL?.ask}
        text1={valor.EURBRL?.name}
        coinValue1={valor.EURBRL?.ask}
        text2={valor.BTCBRL?.name}
        coinValue2={valor.BTCBRL?.ask}
      />
      <div className="card-project">
        <Title />
        <Input
          placeholder={'Digite Aqui:'}
          label={'Digite o valor abaixo: '}
          onChange={e => {
            setDolar(e.target.value)
          }}
          type={'number'}
        />
        <span className="result">{toBRL(dolar * valor.USDBRL?.ask)}</span>
      </div>
    </div>
  )
}
