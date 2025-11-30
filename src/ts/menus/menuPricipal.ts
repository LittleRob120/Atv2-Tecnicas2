import Menu from "../interfaces/menu";

export default class MenuPrincipal implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Atlantis - Menu Principal`)
        console.log(`----------------------------`)
        console.log(`| 1 - Cadastrar cliente`)
        console.log(`| 2 - Listar clientes`)
        console.log(`| 3 - Atualizar cliente`)
        console.log(`| 4 - Remover cliente`)
        console.log(`| 0 - Sair`)
        console.log(`----------------------------`)
    }
}