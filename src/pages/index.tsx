import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
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
      bg-[#2c2c2c] bg-gradient-to-r from-blue-500 to-purple-500
      text-white`}
    >
      <Layout titulo="Cadastro simples">
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  )
}
