import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import ImpressorCliente from "../impressores/impressorCliente"

export default class ListagemDependentesDeTitular extends Processo {
    constructor() {
        super()
        this.execucao = true
    }
    processar(): void {
        const armazem = Armazem.InstanciaUnica
        console.clear()
        console.log(`Listagem de Dependentes por Titular`)
        const doc = this.entrada.receberTexto(`Informe o número de documento do titular: `)
        const titular = armazem.buscarClientePorNumeroDocumento(doc)
        if (!titular || titular.Titular) {
            console.log(`Titular não encontrado.`)
            this.execucao = false
            return
        }
        if (titular.Dependentes.length === 0) {
            console.log(`Titular não possui dependentes.`)
        } else {
            titular.Dependentes.forEach(c => new ImpressorCliente(c).imprimir())
        }
        this.execucao = false
    }
}