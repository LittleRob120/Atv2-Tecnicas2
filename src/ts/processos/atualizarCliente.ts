import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"

export default class AtualizarCliente extends Processo {
    constructor() {
        super()
        this.execucao = true
    }
    processar(): void {
        const armazem = Armazem.InstanciaUnica
        console.clear()
        console.log(`Atualização de Cliente`)
        const doc = this.entrada.receberTexto(`Informe o número de documento do cliente: `)
        const cliente = armazem.buscarClientePorNumeroDocumento(doc)
        if (!cliente) {
            console.log(`Cliente não encontrado.`)
            this.execucao = false
            return
        }
        console.log(`Deixe em branco para manter o valor atual.`)
        const novoNome = this.entrada.receberTexto(`Nome atual (${cliente.Nome}): `)
        const novoNomeSocial = this.entrada.receberTexto(`Nome social atual (${cliente.NomeSocial}): `)
        if (novoNome.trim()) cliente.Nome = novoNome
        if (novoNomeSocial.trim()) cliente.NomeSocial = novoNomeSocial
        console.log(`Cliente atualizado com sucesso.`)
        this.execucao = false
    }
}