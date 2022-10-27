import { useState } from 'react'

export default function useTabelaOrForm() {
  const [visivel, setVisivel] = useState<'tabela' | 'forms'>('tabela')

  const exibirTabela = () => setVisivel('tabela')
  const exibirFormulario = () => setVisivel('forms')

  return {
    tabelaVisivel: visivel === 'tabela',
    exibirTabela,
    exibirFormulario
  }
}
