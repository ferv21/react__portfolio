import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'
const Projeto = () => {
  return (
    <Card>
      <Titulo>Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundaria">
        Lista de tarefas feita com o VueJS
      </Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
