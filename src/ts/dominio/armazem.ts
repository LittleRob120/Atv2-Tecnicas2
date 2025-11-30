import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }

    // CRUD utilitários
    public adicionarCliente(c: Cliente) {
        this.clientes.push(c)
    }
    public removerCliente(c: Cliente) {
        this.clientes = this.clientes.filter(x => x !== c)
    }
    public buscarClientePorNumeroDocumento(numero: string): Cliente | undefined {
        return this.clientes.find(c => c.Documentos?.some(d => (d as any).Numero === numero))
    }
    public getTitulares(): Cliente[] {
        return this.clientes.filter(c => !c.Titular)
    }
    public getDependentesDe(titular: Cliente): Cliente[] {
        return titular.Dependentes
    }
}