import './styles.scss'

export default function Button({ title, onclick }) {
  return (
    <div>
      <button onClick={onclick}>{title}</button>
    </div>
  )
}
