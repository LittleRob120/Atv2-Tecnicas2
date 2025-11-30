import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"
import AtualizarCliente from "./atualizarCliente"
import RemoverCliente from "./removerCliente"

export default class Principal extends Processo {
    constructor() {
        super()
        this.menu = new MenuPrincipal()
        this.execucao = true
    }
    processar(): void {
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero(`Digite sua opção: `)
            switch (this.opcao) {
                case 1:
                    this.processo = new TipoCadastroCliente()
                    this.processo.processar()
                    break
                case 2:
                    this.processo = new TipoListagemClientes()
                    this.processo.processar()
                    break
                case 3:
                    this.processo = new AtualizarCliente()
                    this.processo.processar()
                    break
                case 4:
                    this.processo = new RemoverCliente()
                    this.processo.processar()
                    break
                default:
                    this.execucao = false
                    break
            }
        }
    }
}