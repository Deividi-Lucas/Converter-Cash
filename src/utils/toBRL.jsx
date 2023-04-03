export function toBRL(value) {
  const result = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return result
}
