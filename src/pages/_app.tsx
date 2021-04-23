import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'
import { PlayerContext } from '../contexts/PlayerContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState }}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp

/* Este é um arquivo global, e independente do que tivermos que chamar dentro da nossa aplicação web, o arquivo _app será chamado também.
  Ele baiscamente é chamado para qualquer rota da aplicação, e o <Component {...pageProps}/> representa o componente da nossa rota, que no caso chama da nossa página Index.tsx
  O própio next realiza esse processo para nós de forma automática e por debaixo dos panos, não sendo necessário nenhum tipo de config extra.


  Ou seja, toda vez que eu queira que algo tenha em todos os lugares da minha aplicação web, eu posso colocar ele no meu _app. O problema disso é:
  Toda vez que eu quero trocar de rota, o _app é carregado do total zero. Tudo que tem no app é recalculado e recarregado.
  Isso, por exemplo, para aplicação de fontes já seria algo muito ruim. Porque toda vez que eu trocasse a minha aplicação as fontes da pagina toda seriam recarregadas.
  Prejudicando, assim o funcionamento do meu site.

  Por isso que criamos o arquivo _documento.tsx. --> Ele é um arquivo de documento que podemos configurar quais os parâmetros e o formato do nosso html em torno da nossa aplicação.
  
*/