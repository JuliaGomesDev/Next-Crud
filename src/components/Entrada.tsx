interface EntredaProps {
  tipo?: 'text' | 'number'
  texto: string
  valor: any
  className?: string
  somenteLeitura?: boolean
  valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntredaProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.texto}</label>
      <input
        type={props.tipo ?? 'text'}
        value={props.valor}
        readOnly={props.somenteLeitura}
        className={`border border-purple-500 rounded-lg  px-4 py-2 bg-gray-100 focus:outline-none ${
          props.somenteLeitura ? '' : 'focus:bg-white'
        }`}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  )
}
