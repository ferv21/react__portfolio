import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre min</Titulo>
      <Paragrafo tipo="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ducimus
        veritatis suscipit eligendi. Omnis asperiores quidem eius, provident
        molestiae ut est debitis blanditiis accusantium soluta, vel beatae
        nostrum facere. Sint!
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=ferv21&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ferv21&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
