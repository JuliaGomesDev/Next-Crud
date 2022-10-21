import Cliente from '../../core/Cliente'
import ClienteRepositorio from '../../core/ClienteRepositorio'

export default class ColecaoCliente implements ClienteRepositorio {
  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade
      }
    },
    fromFirestore(snapshot, options): Cliente {
      const data = snapshot.data(options)
      return new Cliente(data.nome, data.idade, snapshot.id)
    }
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    return null
  }

  async exluir(cliente: Cliente): Promise<void> {
    return null
  }

  async obterTodos(cliente: Cliente): Promise<Cliente[]> {
    return null
  }
}
