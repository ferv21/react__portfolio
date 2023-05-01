import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'
const Sidebar = () => {
  return (
    <>
      <aside>
        <SidebarContainer>
          <Avatar />
          <Titulo fontSize={20}>Fernando Viana</Titulo>
          <Paragrafo tipo="secundario" fontSize={16}>
            ferv21
          </Paragrafo>
          <Descricao tipo="principal" fontSize={12}>
            Engenheiro Front-End
          </Descricao>
          <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
      </aside>
    </>
  )
}

export default Sidebar
