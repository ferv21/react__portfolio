import Titulo from '../../components/Titulo'
import { Avatar } from './styles'

const Sidebar = () => {
  return (
    <>
      <aside>
        <Avatar>
          <img src="https://github.com/ferv21.png" alt="" />
        </Avatar>
        <Titulo fontSize={20}>Fernando Viana</Titulo>
      </aside>
    </>
  )
}

export default Sidebar
