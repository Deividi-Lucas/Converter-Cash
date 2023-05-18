import './style.scss'

export default function CoinCard({
  text,
  text1,
  text2,
  coinValue,
  coinValue1,
  coinValue2
}) {
  return (
    <div className="coin">
      <div>
        <span>{text}</span>
        <p>R$ {coinValue}</p>
      </div>
      <div>
        <span>{text1}</span>
        <p>R$ {coinValue1}</p>
      </div>
      <div>
        <span>{text2}</span>
        <p>R$ {coinValue2}</p>
      </div>
    </div>
  )
}
