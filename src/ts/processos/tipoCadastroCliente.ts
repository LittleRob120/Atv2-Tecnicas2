import Processo from "../abstracoes/processo"
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente"
import CadastroClienteTitular from "./cadastroClienteTitular"
import CadastroClienteDependente from "./cadastroClienteDependente"

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
        this.execucao = true
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Digite sua opção: `)
        switch (this.opcao) {
            case 1:
                this.processo = new CadastroClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroClienteDependente()
                this.processo.processar()
                break
            default:
                this.execucao = false
                break
        }
    }
}