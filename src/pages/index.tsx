import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'forms'>('tabela')

  const clientes = [
    new Cliente('Ana', 20, '1'),
    new Cliente('Bia', 22, '2'),
    new Cliente('Carlos', 33, '3'),
    new Cliente('Daniel', 58, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir.. ${cliente.nome}`)
  }
  return (
    <div
      className={`
      flex justify-center items-center h-screen 
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}
    >
      <Layout titulo="Cadastro simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className="mb-4"
                onClick={() => setVisivel('forms')}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={clientes[0]}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}
