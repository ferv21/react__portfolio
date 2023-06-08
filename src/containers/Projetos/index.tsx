import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const ReposApi = 'https://api.github.com/users/ferv21/repos'

type Repos = {
  id: number
  name: string
  html_url: string
}

const Projetos = () => {
  const [repository, setRepository] = useState<Repos[]>([])

  useEffect(() => {
    fetch(ReposApi)
      .then((res) => res.json())
      .then((res) => setRepository(res))
  }, [])

  console.log(repository)

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repository.map((item) => (
          <li key={item.id}>
            <Projeto urlRepos={item.html_url}>{item.name}</Projeto>
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
