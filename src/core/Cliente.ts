export default class Cliente {
  #id: string
  #nome: string
  #idade: number

  constructor(nome: string, idade: number, id: string = null) {
    this.#nome = nome
    this.#idade = idade
    this.#id = id
  }

  get nome() {
    return this.#nome
  }

  get idade() {
    return this.#idade
  }

  get id() {
    return this.#id
  }

  static empty() {
    return new Cliente('', 0)
  }
}
