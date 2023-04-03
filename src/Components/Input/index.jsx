import './style.css'

export default function Input({ placeholder, label, onChange, type }) {
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeholder} onChange={onChange} type={type}></input>
    </div>
  )
}
