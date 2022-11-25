export const stringToColor = (str: string) => {
  let hash = 0
  let color = '#'

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }

  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    color += ('00' + value.toString(16)).slice(-2)
  }

  return color
}

export const randomColor = () => {
  const r = Math.random() * 255
  const g = Math.random() * 255
  const b = Math.random() * 255

  return `rgb(${r}, ${g}, ${b})`
}
