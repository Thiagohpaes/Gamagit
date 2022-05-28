import React, { useState } from 'react'
import * as S from './styled'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Git from './PNG/Git.png'
import GitW from './GitHub-Logos/GitW.png'

function Home(props) {
  const navigate = useNavigate()
  const [erro, setErro] = useState(false)
  const [usuario, setUsuario] = useState('')

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data
        const repositoriesName = []
        repositories.map(repository => {
          repositoriesName.push(repository.name)
        })
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        )
        setErro(false)
        navigate('/repositories')
      })
      .catch(err => setErro(true))
  }
  return (
    <>
      <div className="Header">
        <div>
          <img className="gitw" src={GitW} />
        </div>
        <ul>
          <li>
            <a target="blank" href="https://github.com/Thiagohpaes">
              Github
            </a>
          </li>
          <li>
            <a target="blank" href="mailto:t.paes@hotmail.com">
              Email
            </a>
          </li>
          <li>
            <a target="blank" href="https://wa.me/41997070864">
              Whatsapp
            </a>
          </li>
        </ul>
      </div>

      <S.HomeContainer>
        <img src={Git} />

        <S.TituloH1>Buscar Repositórios GitHub</S.TituloH1>

        <S.Content>
          <S.Input
            className="usuarioInput"
            placeholder="Usuário"
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            //e = evento vai chamar => o console.log
          ></S.Input>
          <S.Button type="button" onClick={handlePesquisa}>
            Pesquisar
          </S.Button>
        </S.Content>
        {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
      </S.HomeContainer>
    </>
  )
}

export default Home
