import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

type Props = {
  children: string
  urlRepos: string
}

const Projeto = ({ children, urlRepos }: Props) => {
  return (
    <Card>
      <Titulo>{children}</Titulo>
      <Paragrafo tipo="secundaria">
        Lista de tarefas feita com o VueJS
      </Paragrafo>
      <LinkBotao href={urlRepos}>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
