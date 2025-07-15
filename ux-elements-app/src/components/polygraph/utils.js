export function valueToPoint(value, index, total) {
  const x = 0
  const y = -value * 0.8
  const angle = ((Math.PI * 2) / total) * index
  const cosinus = Math.cos(angle)
  const sinus = Math.sin(angle)
  const tx = x * cosinus - y * sinus + 100
  const ty = x * sinus + y * cosinus + 100
  return {
    x: tx,
    y: ty,
  }
}
