import { useState } from 'react'
import Cliente from '../core/Cliente'
import Botao from './Botao'
import Entrada from './Entrada'

interface FormularioProps {
  cliente?: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

  return (
    <div>
      {id ? (
        <Entrada
          texto="Código"
          valor={id}
          className="mb-5"
          somenteLeitura
        ></Entrada>
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        className="mb-5"
        valorMudou={setNome}
      ></Entrada>
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      ></Entrada>
      <div className="flex justify-end mt-7 gap-3">
        <Botao
          cor="blue"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  )
}
