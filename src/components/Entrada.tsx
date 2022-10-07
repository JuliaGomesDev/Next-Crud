interface EntredaProps {
  tipo?: 'text' | 'numbers'
  texto: string
  valor: any
}

export default function Entrada(props: EntredaProps) {
  return (
    <div>
      <label>{props.texto}</label>
      <input type={props.tipo ?? 'text'} value={props.valor} />
    </div>
  )
}
