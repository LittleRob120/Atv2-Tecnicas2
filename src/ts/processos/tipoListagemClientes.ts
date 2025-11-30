import Processo from "../abstracoes/processo"
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes"
import ListagemTitulares from "./listagemTitulares"
import ListagemDependentesDeTitular from "./listagemDependentesDeTitular"
import ListagemTitularDeDependente from "./listagemTitularDeDependente"

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
        this.execucao = true
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Digite sua opção: `)
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break
            case 2:
                this.processo = new ListagemDependentesDeTitular()
                this.processo.processar()
                break
            case 3:
                this.processo = new ListagemTitularDeDependente()
                this.processo.processar()
                break
            default:
                this.execucao = false
                break
        }
    }
}