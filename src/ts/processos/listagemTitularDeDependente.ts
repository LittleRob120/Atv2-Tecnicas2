import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import ImpressorCliente from "../impressores/impressorCliente"

export default class ListagemTitularDeDependente extends Processo {
    constructor() {
        super()
        this.execucao = true
    }
    processar(): void {
        const armazem = Armazem.InstanciaUnica
        console.clear()
        console.log(`Titular do Dependente`)
        const doc = this.entrada.receberTexto(`Informe o número de documento do dependente: `)
        const dep = armazem.buscarClientePorNumeroDocumento(doc)
        if (!dep || !dep.Titular) {
            console.log(`Dependente não encontrado ou não possui titular.`)
            this.execucao = false
            return
        }
        new ImpressorCliente(dep.Titular).imprimir()
        this.execucao = false
    }
}