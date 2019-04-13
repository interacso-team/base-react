import { setGlobal, getGlobal } from 'reactn'

// Set your logic anywhere you want, not attached to reducers, actions, etc

const names = [
  'Andreina',
  'Antonio',
  'Alvaro',
  'Carlos',
  'Cristian',
  'David',
  'Emilio',
  'Irene',
  'Jairo',
  'Juan',
  'Marta',
  'Miguel',
  'Pepe',
  'Ruben',
  'Sera',
  'Sergio',
  'Alejandro',
  'Alexis',
  'Florencia',
  'Óscar'
]

export const init = () => {
  const int = setInterval(() => {
    const name = getGlobal().name
    let index = 0
    if (names[names.indexOf(name) + 1]) {
      index = names.indexOf(name) + 1
    }
    setGlobal({
      name: names[index]
    })
  }, 1000)

  return () => {
    clearInterval(int)
  }
}
