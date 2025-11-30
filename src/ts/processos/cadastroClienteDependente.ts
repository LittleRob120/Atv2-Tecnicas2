import Processo from "../abstracoes/processo"
import Armazem from "../dominio/armazem"
import Cliente from "../modelos/cliente"
import Documento from "../modelos/documento"
import { TipoDocumento } from "../enumeracoes/TipoDocumento"

export default class CadastroClienteDependente extends Processo {
    constructor() {
        super()
        this.execucao = true
    }

    processar(): void {
        const armazem = Armazem.InstanciaUnica
        console.clear()
        console.log(`Cadastro de Dependente`)

        const docTitular = this.entrada.receberTexto(`Informe o número de documento do titular: `)
        const titular = armazem.buscarClientePorNumeroDocumento(docTitular)

        if (!titular || titular.Titular) {
            console.log(`Titular não encontrado.`)
            this.execucao = false
            return
        }

        const nome = this.entrada.receberTexto(`Nome do dependente: `)
        const nomeSocial = this.entrada.receberTexto(`Nome social do dependente: `)
        const data = this.entrada.receberTexto(`Data de nascimento (aaaa-mm-dd): `)
        const dep = new Cliente(nome, nomeSocial, new Date(data))

        // Documento principal do dependente
        const numeroDoc = this.entrada.receberTexto(`Número de documento (RG/CPF) do dependente: `)
        dep.adicionarDocumento(new Documento(numeroDoc, TipoDocumento.CPF, new Date()))

        titular.adicionarDependente(dep)
        armazem.adicionarCliente(dep)
        console.log(`Dependente cadastrado com sucesso.`)
        this.execucao = false
    }
}