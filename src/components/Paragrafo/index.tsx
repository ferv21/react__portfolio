import { P } from './styles'

export type Props = {
  children: string
  tipo?: string
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => {
  return (
    <P fontSize={fontSize} tipo={tipo}>
      {children}
    </P>
  )
}
export default Paragrafo
