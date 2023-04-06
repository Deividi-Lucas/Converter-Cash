import './style.scss'

export default function Input({ placeholder, label, onChange, type }) {
  return (
    <div className="input-class">
      <label>{label}</label>
      <input placeholder={placeholder} onChange={onChange} type={type}></input>
    </div>
  )
}
