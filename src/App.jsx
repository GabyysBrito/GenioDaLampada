import lampadaMagica from './assets/lampadaMagica.png'
import genioLampada from './assets/genioLampada.png'
import './app.scss'

import { useState } from 'react'

export default function App(){
  
  const [lampada, setLampada] = useState(lampadaMagica)
  
  const mudarLampada = () => {
    setLampada( (lampada) => (
        lampada === (lampadaMagica) ? (genioLampada) : (lampadaMagica)
      )
    )
  }
  
  return(
    <main>
      <p>"Liberte a magia da programação com a lâmpada de Aladim"</p>
      <img src={lampada} alt="Uma imagem de uma lâmpada" />
      <button onClick={mudarLampada}>Clique aqui</button>
    </main>
  )
}
