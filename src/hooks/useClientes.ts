import { useEffect, useState } from 'react'
import Cliente from '../core/Cliente'
import ClienteRepositorio from '../core/ClienteRepositorio'
import ColecaoCliente from '../firebase/db/ColecaoCliente'
import useTabelaOrForm from './useTabelaOrForm'

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.empty())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const { exibirTabela, exibirFormulario, tabelaVisivel } = useTabelaOrForm()

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  function excluirCliente(cliente: Cliente) {
    repo.exluir(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.empty())
    exibirFormulario()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    tabelaVisivel,
    exibirTabela
  }
}
