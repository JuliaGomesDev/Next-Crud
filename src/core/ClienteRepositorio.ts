import Cliente from './Cliente'

export default interface ClienteRepositorio {
  salvar(cliente: Cliente): Promise<Cliente>
  exluir(cliente: Cliente): Promise<void>
  obterTodos(cliente: Cliente): Promise<Cliente[]>
}
