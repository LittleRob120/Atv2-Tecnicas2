import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"

export default class RemoverCliente extends Processo {
    constructor() {
        super()
        this.execucao = true
    }
    processar(): void {
        const armazem = Armazem.InstanciaUnica
        console.clear()
        console.log(`Remoção de Cliente`)
        const doc = this.entrada.receberTexto(`Informe o número de documento do cliente a remover: `)
        const cliente = armazem.buscarClientePorNumeroDocumento(doc)
        if (!cliente) {
            console.log(`Cliente não encontrado.`)
            this.execucao = false
            return
        }

        if (!cliente.Titular) {
            // é titular
            const confirm = this.entrada.receberTexto(`Remover titular e TODOS os dependentes? (s/N): `)
            if (confirm.toLowerCase() === 's') {
                // remover dependentes
                cliente.Dependentes.forEach(d => armazem.removerCliente(d))
                armazem.removerCliente(cliente)
                console.log(`Titular e dependentes removidos.`)
            } else {
                console.log(`Operação cancelada.`)
            }
        } else {
            // é dependente
            cliente.Titular.removerDependentePorDocumento(doc)
            armazem.removerCliente(cliente)
            console.log(`Dependente removido.`)
        }
        this.execucao = false
    }
}